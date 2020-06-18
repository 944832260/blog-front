import * as React from "react";
import "./detail.scss";

class Detail extends React.Component {
    state = {
    };

    UNSAFE_componentWillMount() {

    }

    componentDidMount() {

    }

    routerHome() {
        this.props.history.push('/')
    }

    render() {
        let { } = this.state;
        console.log(this.props, '333333333333')
        const data = this.props.location.search  //地址栏截取
        console.log(data)
        const param = data.split('?')[1].split('&')
        console.log(param)
        return (
            <div id="Detail">
                <div className='menu'>
                    <span className='menuItem' onClick={() => { this.routerHome() }} >首页</span><span>/</span><span>详情页</span>
                </div>
                <h3 className='title'>这是我的第一个博客</h3>
                <div className='info'>
                    <span>2020-20-20</span>
                    <span>文案</span>
                    <span>作者：刘先生</span>
                </div>
                <div className='content'>
                    很多公司更多伤口恢复过段时间给发的手机号高度近视给辅导后进生给分电视剧购房贷款和世界观范德萨高分段考生高考说的话
                    很多公司更多伤口恢复过段时间给发的手机号高度近视给辅导后进生给分电视剧购房贷款和世界观范德萨高分段考生高考说的话
                    很多公司更多伤口恢复过段时间给发的手机号高度近视给辅导后进生给分电视剧购房贷款和世界观范德萨高分段考生高考说的话
                    很多公司更多伤口恢复过段时间给发的手机号高度近视给辅导后进生给分电视剧购房贷款和世界观范德萨高分段考生高考说的话
                    很多公司更多伤口恢复过段时间给发的手机号高度近视给辅导后进生给分电视剧购房贷款和世界观范德萨高分段考生高考说的话
                    很多公司更多伤口恢复过段时间给发的手机号高度近视给辅导后进生给分电视剧购房贷款和世界观范德萨高分段考生高考说的话
                </div>
            </div>
        );
    }
}

export default Detail;
