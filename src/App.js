import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './pages/Home/components/Home';
import Profile from './pages/Profile/components/Profile';
import News from './pages/News/components/News';
import Authorize from './pages/Authorize/components/Authorize';
import Logout from './pages/Authorize/components/Logout';
import './App.css';
import connect from "react-redux/es/connect/connect";

const history = createBrowserHistory();

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    handleClick(e) {
        e.preventDefault();
        console.log('click from app');
    }

    render() {

        const {userId} = this.props;

        return (
            <BrowserRouter history={history}>
                <div className="flex-container">

                    <div className="flex-container-item">
                        <NavLink exact to="/" activeClassName="selected" className="link">Home</NavLink></div>
                    <div className="flex-container-item">
                        <NavLink to="/profile" activeClassName="selected" className={userId ? "link" : "disabled-link link"}>Profile</NavLink>
                    </div>
                    <div className="flex-container-item">
                        <NavLink to="/news" activeClassName="selected" className="link">News</NavLink>
                    </div>
                    {!userId && <div className="flex-container-item">
                        <NavLink to="/login" activeClassName="selected" className="link">Log in</NavLink>
                    </div>}
                    {userId && <div className="flex-container-item" onClick={this.handleClick.bind(this)}>
                        <NavLink to="/logout" className="link">Log out</NavLink>
                    </div>}

                </div>

                <Route exact path="/" component={Home}></Route>
                <Route exact path="/profile" component={Profile}></Route>
                <Route exact path="/news" component={News}></Route>
                <Route exact path="/login" component={Authorize}></Route>
                <Route exact path="/logout" component={Logout}></Route>

            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => ({
    userId: state.validation.userId,

});

export default connect(
    mapStateToProps,
)(App);

