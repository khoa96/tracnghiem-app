import React, { Component } from 'react';
import './style.css';

export default class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            email: "",
            password: ""
        }
        this.onCreateAccount = this.onCreateAccount.bind(this)
    }

    onUserChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onCreateAccount() {
    
        const { username, email, password } = this.state;
        if (username && email && password ) {
            this.props.onCreateAccount(this.state)
        }
    }

    render() {
        return (
            <div className="card card-signin my-5">
                <div className="card-body">
                    <h5 className="card-title text-center">Register</h5>
                    <form className="form-signin">
                        <div className="form-label-group">
                            <input
                                type="text" id="inputUsername"
                                className="form-control"
                                placeholder="username"
                                required autoFocus
                                name="username"
                                onChange={(event) => { this.onUserChange(event) }}
                            />
                            <label htmlFor="inputUsername">Username</label>
                        </div>
                        <div className="form-label-group">
                            <input
                                type="email"
                                id="inputEmail"
                                className="form-control"
                                placeholder="Email address"
                                required autoFocus name="email"
                                onChange={(event) => { this.onUserChange(event) }}

                            />
                            <label htmlFor="inputEmail">Email address</label>
                        </div>

                        <div className="form-label-group">
                            <input
                                type="password"
                                id="inputPassword"
                                className="form-control"
                                placeholder="Password"
                                required
                                name="password"
                                onChange={(event) => { this.onUserChange(event) }}

                            />
                            <label htmlFor="inputPassword">Password</label>
                        </div>
                        <button
                            className="btn btn-lg btn-primary btn-block text-uppercase"
                            type="button"
                            onClick={this.onCreateAccount}
                        >
                            Create New Account</button>
                    </form>
                </div>
            </div>
        )
    }
}
