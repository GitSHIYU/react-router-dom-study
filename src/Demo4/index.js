import React, {Component} from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import User from '../pages/user'
import Login from '../pages/login'

/**
 * 有<Switch>标签，则其中的<Route>在路径相同的情况下，只匹配第一个，这个可以避免重复匹配；
 */
class Index extends Component {

    render() {
        return (
            <Router basename='/test'>
                <Switch>
                    <Route path='/home' exact component={User}/>
                    <Route path='/user' exact component={User}/>
                    <Route path='/user/:id' exact component={User}/>
                    <Route path='/login' exact component={Login}/>
                    <Redirect exact to='home'/>
                </Switch>
            </Router>
        )
    }
}

export default Index
