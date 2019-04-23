import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Modal from "react-modal";

class Authorize extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',
            password: ''
        };
    }

    handleClick(e) {
        console.log('click from Modal');
    }

    render() {

        // const { isLoading, error, isLogged } = this.props;
        // const { username, password } = this.state;

        return (
            <div className="page-content">

                <button onClick={this.handleClick.bind(this)}>close</button>
                <div>Are you sure you want to log out?</div>
                <button onClick={this.handleClick.bind(this)}>Yes, I'm sure!</button>

            </div>
        );
    }
}

// const mapStateToProps = (state) => ({
//     isLogged: state.validation.isLogged,
//     isLoading: state.validation.isLoading,
//     error: state.validation.error
// });
//
// const mapDispatchToProps = (dispatch) => {
//     //console.log('from Authorize, ', ownProps); //sort by number
//     return {
//         getUserInfo: (data) => dispatch(getUserInfo(data)),
//     }
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Authorize)

export default Modal;