import React, {Component} from 'react'
import Home from './home'
import UserList from './userList'
import UserInfo from './userInfo'
import Main from './main'
import Header from './header'

export default class User extends Component {
    constructor(props) {
        super(props);
        let userInfo = localStorage.getItem('userInfo') || ''
        if (!userInfo) {
            props.history.push('/login')
        }
    }

    renderChildren = () => {
        let pathName = this.props.match.path || ''
        // console.log("pathName:",pathName)
        // console.log("this.props:",this.props)
        let child;
        switch (pathName) {
            case '/':
                child = <Home {...this.props}/>
                break;
            case '/user':
                child = <UserList {...this.props}/>
                break;
            case '/user/:id':
                child = <UserInfo {...this.props}/>
                break;
            default:
                child = <Home {...this.props}/>
                break;
        }
        return child;
    }

    render() {
        return (
            <div>
                <Header/>
                <Main>
                    {this.renderChildren()}
                </Main>
            </div>
        )
    }

}
