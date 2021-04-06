import React, {Component} from 'react'

import './login.less'
import logo from './images/logo.png'

/*
登录的路由组件
 */
export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>Admin System</h1>
                </header>
                <section className="login-content">
                    <h2>User Login</h2>
                    <div>Form Component</div>
                </section>
            </div>
        )
    }
}
