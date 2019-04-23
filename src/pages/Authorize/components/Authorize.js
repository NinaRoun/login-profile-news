import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { getUserInfo } from '../../../actions/loginActions';
import Loading from './Loading';

class Authorize extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',
            password: ''
        };
    }

    resetFields() {
        //console.log('in resetFields');
        this.setState({
            username: "",
            password: ""
        });
    }

    handleClick(e) {
        const { username, password } = this.state;
        //console.log('click from form');
        //console.log('username ' + username + ' password ' + password, this.props.getProfile);
        this.props.getUserInfo({username, password});
        this.resetFields();
        //this.props.isLogged ? console.log('from handleClick, isLogged = true') : console.log('from handleClick, isLogged undefined');
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {

        const { isLoading, error, isLogged } = this.props;
        const { username, password } = this.state;

        return (
            <div className="page-content">

                {isLoading ? <Loading /> :
                    <span>

                        <h1>
                            <div className="form-item">Please, log in!</div>
                        </h1>

                        < form id="validation-form" method="post" name="validationForm">
                            <div className="form-item">
                                <label className="form-label">User Name </label>
                                <input type="text" name="username" id="username" value={ username } onChange={this.handleChange.bind(this)}/>
                            </div>
                            <div className="form-item">
                                <label className="form-label">Password </label>
                                <input type="password" name="password" id="password" value= { password } onChange={this.handleChange.bind(this)}/>
                            </div>
                            <div className="form-item"><input type="button" value="Login" id="submit-form-button" onClick={this.handleClick.bind(this)}/></div>
                        </form>

                        <div>{!!error && error}</div>

                        {isLogged && <Redirect to="/profile"/>}

                    </span>
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLogged: state.validation.isLogged,
    isLoading: state.validation.isLoading,
    error: state.validation.error
});

const mapDispatchToProps = (dispatch) => {
    //console.log('from Authorize, ', ownProps); //sort by number
    return {
        getUserInfo: (data) => dispatch(getUserInfo(data)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Authorize)

//email = 'max@test.com', password = '12345'
//https://mysterious-reef-29460.herokuapp.com/api/v1/validate