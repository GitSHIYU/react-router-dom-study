import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UserAPI from '../data/api';

export default class UserList extends Component {
    render() {
        return (
            <div>
                {
                    UserAPI.all().map(item => {
                        return <li key={item.id}>
                            <Link to={`/user/${item.id}`}>{item.name}</Link>
                        </li>
                    })
                }
            </div>
        );
    }
}
