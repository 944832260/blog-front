import * as React from "react";
import "./home.scss";
import { connect } from 'react-redux'



class Home extends React.Component {
	state = {
	};

	UNSAFE_componentWillMount() {

	}

	componentDidMount() {

	}
	routerDetail =() =>{
		this.props.history.push('/detail/1')
	}
	render() {
		let {} = this.state;
		return (
			<div id="Home">
				<div className='item'>
					<h3>第三个开发大使馆富商大贾</h3>
					<p className='tips'> <span>20-20-20</span></p>
					<div className='content'>
						高峰时刻换个方式开会贵绳股份开始干活但是分公司的机会股份收到过发
						但是符合规定时间很反感德生科技很过分圣诞节韩国放声大哭割发代首开荒
					</div>
					<div className='lookText' onClick={()=>{this.routerDetail()}} >
						<div>
							<span>查看全文</span>
							<img src={require('../../assets/look.png')} alt=""/>
						</div>
					</div>
				</div>
				<div className='item'>
					<h3>第三个开发大使馆富商大贾</h3>
					<p className='tips'> <span>20-20-20</span></p>
					<div className='content'>
						高峰时刻换个方式开会贵绳股份开始干活但是分公司的机会股份收到过发
						但是符合规定时间很反感德生科技很过分圣诞节韩国放声大哭割发代首开荒
					</div>
					<div className='lookText'>
						<div>
							<span>查看全文</span>
							<img src={require('../../assets/look.png')} alt=""/>
						</div>
					</div>
				</div>
				<div className='item'>
					<h3>第三个开发大使馆富商大贾</h3>
					<p className='tips'> <span>20-20-20</span></p>
					<div className='content'>
						高峰时刻换个方式开会贵绳股份开始干活但是分公司的机会股份收到过发
						但是符合规定时间很反感德生科技很过分圣诞节韩国放声大哭割发代首开荒
					</div>
					<div className='lookText'>
						<div>
							<span>查看全文</span>
							<img src={require('../../assets/look.png')} alt=""/>
						</div>
					</div>
				</div>
				<div className='item'>
					<h3>第三个开发大使馆富商大贾</h3>
					<p className='tips'> <span>20-20-20</span></p>
					<div className='content'>
						高峰时刻换个方式开会贵绳股份开始干活但是分公司的机会股份收到过发
						但是符合规定时间很反感德生科技很过分圣诞节韩国放声大哭割发代首开荒
					</div>
					<div className='lookText'>
						<div>
							<span>查看全文</span>
							<img src={require('../../assets/look.png')} alt=""/>
						</div>
					</div>
				</div>
				<div className='item'>
					<h3>第三个开发大使馆富商大贾</h3>
					<p className='tips'> <span>20-20-20</span></p>
					<div className='content'>
						高峰时刻换个方式开会贵绳股份开始干活但是分公司的机会股份收到过发
						但是符合规定时间很反感德生科技很过分圣诞节韩国放声大哭割发代首开荒
					</div>
					<div className='lookText'>
						<div>
							<span>查看全文</span>
							<img src={require('../../assets/look.png')} alt=""/>
						</div>
					</div>
				</div>
				<div className='item'>
							<h3>第三个开发大使馆富商大贾</h3>
							<p className='tips'> <span>20-20-20</span></p>
							<div className='content'>
								高峰时刻换个方式开会贵绳股份开始干活但是分公司的机会股份收到过发
								但是符合规定时间很反感德生科技很过分圣诞节韩国放声大哭割发代首开荒
							</div>
							<div className='lookText'>
								<div>
									<span>查看全文</span>
									<img src={require('../../assets/look.png')} alt=""/>
								</div>
							</div>
						</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		User: state.User,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		UpdateUser: obj => {
			dispatch(UpdateUser(obj));
		}
	}
}

export default Home;
