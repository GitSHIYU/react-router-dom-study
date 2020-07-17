import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Other from '../pages/other'

/**
 * 使用BrowserRouter
 */
export default class Index extends Component {

    render() {
        return (
            <div>
                <h1>使用BrowserRouter, Route, Link</h1>
                <Router>
                    <ul>
                        <li><Link to='/'>首页</Link></li>
                        <li><Link to='/about'>关于</Link></li>
                        <li><Link to='/other'>其他</Link></li>
                    </ul>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/other' component={Other}/>
                </Router>
            </div>
        )
    }

}
