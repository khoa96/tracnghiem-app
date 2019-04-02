import React, { Component } from 'react';
import { Alert } from 'reactstrap';
export default class ErrorMessage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      this.onDismiss = this.onDismiss.bind(this)
    }
    
    onDismiss() {
        this.props.onDismiss();
    }

    render() {
        const { isShowMessage, message, color } = this.props;
        return (
            <Alert color={color} isOpen={isShowMessage} toggle={this.onDismiss}>
                {message}
            </Alert>
        )
    }
}
