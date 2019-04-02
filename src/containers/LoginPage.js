import React, { Component } from 'react'
import LoginForm from '../components/login/Form';
import ErrorMessage from '../components/common/ErrorMessage';

export default class LoginPage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isShowMessage: true,
      }
    }
    
    render() {
        const { isShowMessage } = this.state;
        return (
            <div className="wrapper">
            <div className="container login">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        {/* <ErrorMessage  isShowMessage={isShowMessage} /> */}
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
