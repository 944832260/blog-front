import * as React from "react";
import "./frame.scss";
import { Popover, } from 'antd';
import { renderRoutes } from "react-router-config";


class Frame extends React.Component {
	state = {
		interactiveList:[{
			name:'github',
			icon:require('../../assets/github.png'),
			contact:'https://github.com/944832260',
		},{
			name:'QQ',
			icon:require('../../assets/qq.png'),
			contact:'944832260',
		},{
			name:'微信',
			icon:require('../../assets/wechat.png'),
			contact:'z1281349262',
        }],
        routesLeft:[],
	};

	UNSAFE_componentWillMount() {
        this.setState({routesLeft:this.props.route.routesLeft})
	}

	componentDidMount() {

	}

	toTop = () =>{
		let contact = document.getElementById('zhanweifu')
        contact.scrollIntoView({
            behavior: 'smooth'
        })
	}

	render() {
		let {interactiveList , } = this.state;
		let newinteractiveList = interactiveList.map((e,i)=>{
			return (
				<div className='contactItem' key={i}>
					<Popover content={<div>{e.name+':' + e.contact}</div>} >
						<img src={e.icon} alt={e.name}/>
					</Popover>
				</div>
			)
		})
		return (
			<div id="Frame">
				<header className='headers'>
					<div className='left'>
						<span>大苏打</span>
					</div>
					{/* <div className='right'>
						<ul>
							<li>首页</li>
							<li>首页</li>
							<li>首页</li>
						</ul>
					</div> */}
				</header>
				<div className='mainstay'>
					<div className='zhanweifu' id='zhanweifu'></div>
					<div className='mainstayLeft' id='mainstayLeft'>
                    {
                        renderRoutes(this.state.routesLeft)
                    }
					</div>
					<div className='mainstayRight'>
						<div className='introduce'>
							<div className='portrait'>
								<img src={require('../../assets/shopicon.png')} alt=""/>
							</div>
							<div className='name'><p>帅哥</p></div>
							<div className='speciality'>专注于前段开发</div>
							<div className='labels'>
								<span>爱吃</span>
								<span>爱玩</span>
								<span>爱睡</span>
								<span>爱吃</span>
								<span>爱玩</span>
								<span>爱睡</span>
								<span>爱吃</span>
								<span>爱玩</span>
								<span>爱睡</span>
							</div>
							<div className='contact'>
								<div className='linefather'>
									<div className='contactLine'>
										<span>社交账号</span>
									</div>
								</div>
								<div className='contactTotal'>
									{newinteractiveList}
									{/* <div className='contactItem'>
										<Popover content={<div>我们都一样</div>}>
											<img src={require('../../assets/github.png')} alt=""/>
										</Popover>
									</div>
									<div className='contactItem'>
										<Popover content={<div>我们都一样</div>}>
											<img src={require('../../assets/qq.png')} alt=""/>
										</Popover>
									</div>
									<div className='contactItem'>
										<Popover content={<div>我们都一样</div>} >
											<img src={require('../../assets/wechat.png')} alt=""/>
										</Popover>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='toTop' onClick={this.toTop} >
					<img className='topimg' src={require('../../assets/top.png')} alt=""/>
				</div>
			</div>
		);
	}
}

export default Frame;
