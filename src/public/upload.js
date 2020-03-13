import axios from 'axios'
import {message} from "antd"
/*
*   bucket
*   头像、图片：apl-static     https://apl-static.oss-cn-beijing.aliyuncs.com/
*   文件：apl-docs         https://apl-docs.oss-cn-beijing.aliyuncs.com/
* */


export function Upload(bucket, files, callback, error, progress){
  let fileObj = files.length > 0 ? files[0] : files,
    fileName = "",
    name = fileObj.name,
    isIMG = /(png|jpg|jpeg)$/i.test(name),
    client;

  if(bucket === 'apl-static' && !/(png|jpg|jpeg|gif)$/i.test(name)){
    message.error("请选择图片");
    return;
  }

  // 获取权限
  axios.get('/api/v1/user/sts/token').then(data => {
    data = data.results;
    fileName = data.key + name.match(/\.[A-z\d]+$/)[0];
    client = new OSS.Wrapper({
      region: 'oss-cn-beijing',
      accessKeyId: data.oss_access_key_id,
      accessKeySecret: data.access_key_secret,
      bucket,
      stsToken: data.security_token
    });


    if(isIMG && fileObj.size > 1024000 * 5) {
      // File对象转换成base64
      FileToBase64(fileObj).then(base64 => {
        let blob = Base64ToBlob(base64);
        // blob转arrayBuffer
        let reader = new FileReader();
        reader.readAsArrayBuffer(blob);
        reader.onload = function (event) {
          let buffer = new OSS.Buffer(event.target.result);

          // 上传
          client.put(fileName, buffer).then(function(result){
            callback && callback(result);
          }).catch(function(err){
            error && error(err);
          });
        }
      });
    } else {
      client.multipartUpload(fileName, fileObj, {
        progress: function* (percentage, cpt) {
          if(cpt) {
            progress && progress(percentage, {client, uploadId: cpt.uploadId, bucket, fileName});
          } else {
            progress && progress(percentage);
          }
        },
        partSize: 1024000 * 2
      }).then(function (result) {
        callback && callback(result);
      }).catch(function (err) {
        error && error(err);
      })
    }
  });
}

export function FileToBase64(file){
  return new Promise((resolve => {
    let canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d'),
      img = new Image;

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async function () {
      img.src = this.result;
      img.onload = function(){
        canvas.height = this.height;
        canvas.width = this.width;

        ctx.drawImage(this, 0, 0, this.width, this.height);

        let ext = img.src.match(/(png|jpe?g)/)[0];
        let base64 = canvas.toDataURL(`image/${ext}`, 0.2);
        canvas = null;

        resolve(base64);
      };
    }
  }))
}

export function Base64ToBlob(base64){
  var base = base64.split(',')[1],
    fileType = base64.split(';')[0].split(':')[1],
    bytes = window.atob(base),
    n = bytes.length,
    u8arr = new Uint8Array(n);

  while(n--){
    u8arr[n] = bytes.charCodeAt(n);
  }

  return new Blob([u8arr],{type:fileType});
}


