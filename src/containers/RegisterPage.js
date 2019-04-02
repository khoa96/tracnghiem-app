import React, { Component } from 'react'
import RegisterForm from '../components/register/Form';
import ErrorMessage from '../components/common/ErrorMessage';
import { connect } from 'react-redux';
import { registerUserAction } from '../actions/index';
import Loading from '../components/loading/Loading';

class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isShowMessage: true

        }
        this.onDismiss = this.onDismiss.bind(this);
        this.onCreateAccount = this.onCreateAccount.bind(this)
    }

    onDismiss() {
        this.setState({
            isShowMessage: !this.state.isShowMessage
        })
    }

    onCreateAccount(user) {
        this.props.dispatch(registerUserAction(user))
    }

    render() {
        const { isShowMessage } = this.state;
        const { isLoading, message, isRegisterSuccess } = this.props.register;

        return (
            <div className="wrapper-register">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            {
                                isRegisterSuccess && !isLoading ?
                                    <ErrorMessage
                                        onDismiss={this.onDismiss}
                                        isShowMessage={isShowMessage}
                                        message="resgister success"
                                        color="success"
                                    /> : ""
                                    
                            }
                        
                            {
                                isLoading ? <Loading /> : ""
                            }
                            <RegisterForm onCreateAccount={this.onCreateAccount} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        register: state.registerReducer
    }
}
export default connect(mapStateToProps)(RegisterPage)