import React, {Component} from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.user = React.createRef();
        this.password = React.createRef();
    }

    onSubmitForm = () => {
        let userName = this.refs.user.value || "";
        let password = this.refs.password.value || "";
        if (userName === "admin") {
            if (password === "123456") {
                localStorage.setItem("userInfo", `${userName}-${password}`)
                this.props.history.push("/home")
            } else {
                alert('密码错误')
            }
        } else {
            alert('用户名错误')
        }
    }

    render() {
        return (
            <div>
                用户名：<input type="text" ref="user"/><br/>
                密码：&nbsp;&nbsp;&nbsp;<input type="password" ref="password"/><br/>
                <button type="button" onClick={this.onSubmitForm}>登录</button>
            </div>
        );
    }
}

