import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
        props.history.listen((location) => {
            // console.log("location", location)
            switch (location.pathname) {
                case "/home":
                    document.title = '首页'
                    break;
                case "/user":
                    document.title = '个人中心'
                    break;
                default:
                    document.title = '首页'
                    break;
            }
        })
    }

    loginOut = () => {
        localStorage.clear();
        this.props.history.push("/login")
    }

    render() {
        return (
            <div>
                <div className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className='navbar-heading'>
                            <div className='navbar-brand'>React-Router</div>
                        </div>
                        <div className='nav navbar-nav'>
                            <li style={{cursor: 'pointer'}}><Link to='/'>首页</Link></li>
                            <li style={{cursor: 'pointer'}}><Link to='/user'>个人中心</Link></li>
                        </div>
                        <span onClick={this.loginOut} style={{
                            float: "right",
                            textAlign: "center",
                            lineHeight: "3.3",
                            color: "#9d9d9d",
                            cursor: "pointer"
                        }}>登出</span>
                    </div>
                </div>
            </div>
        )
    }

}

//把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上
//使用withRouter可以获取当前页面props中的history、location、match属性
export default withRouter(Header)
