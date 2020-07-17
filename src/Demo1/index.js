import React, {Component} from 'react'
import Home from '../pages/home'
import About from '../pages/about'
import Other from '../pages/other'

/**
 * 原始方法实现路由跳转
 */
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: window.location.hash.substr(1)
        }
    }

    setRoute = () => {
        this.setState({
            route: window.location.hash.substr(1) //截取井号后的
        })
    }

    /**
     * onhashchange 事件在当前 URL 的锚部分(以 '#' 号为开始) 发生改变时触发
     */
    componentDidMount() {
        window.addEventListener('hashchange', this.setRoute)
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', this.setRoute)
    }


    render() {
        console.log("this.state,,",this.state)
        let Child;
        switch (this.state.route) {
            case '/about':
                Child = About;
                break;
            case '/other':
                Child = Other;
                break;
            default:
                Child = Home;
                break;
        }
        return (
            <div>
                <h1>不使用react router</h1>
                <ul>
                    <li><a href='#/about'>About</a></li>
                    <li><a href='#/other'>Other</a></li>
                </ul>
                <Child/>
            </div>
        )
    }
}
