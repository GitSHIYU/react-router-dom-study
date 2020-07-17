import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Other from '../pages/other'


export default class Index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                            <a href='/other'>a标签</a>
                            <li><Link to='/'>home</Link></li>
                            <li><Link to='/about'>about</Link></li>
                            <li><Link to='/other'>other</Link></li>
                        </ul>
                    </div>
                    <div>
                        <Route path='/' exact component={Home}/>
                        <Route path='/about' render={(props) => {
                            return <About {...props}/>
                        }}/>
                        <Route path='/other' children={(props) => {
                            return <Other {...props}/>
                        }}/>
                    </div>
                </Router>
            </div>
        )
    }
}
