import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {getProfile} from "../../../actions/profileActions";
import LanguageItem from "./LanguageItem";
import SocialItem from "./SocialItem";

class Profile extends Component {

    componentWillMount() {
        const { userId } = this.props;
        this.props.getProfile(userId);
        console.log('getProfile was sent ');
    }

    render() {

        const { userId, info } = this.props;

        const languageItems = info.languages && info.languages
            .map(
                (languageItem, index) => <LanguageItem key={index} languageItem={languageItem}/>
            );

        const socialItems = info.social && info.social
            .map(
                (socialItem, index) => <SocialItem key={index} socialItem={socialItem}/>
            );

        return (
            <div className="page-content">
                {userId ?
                    <div className="userInfo">
                        <p>City: {info.city}</p>
                        <p>Languages: {languageItems}</p>
                        <p>Links: {socialItems}</p>
                    </div>
                    : <h3>Please, log in to get your profile information!</h3>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userId: state.validation.userId,
    isLogged: state.validation.isLogged,
    info: state.userProfile.info,
});

// const mapStateToProps = (state) => {
//     console.log('info in component profile' , state.userProfile.info);  //works
// };

const mapDispatchToProps = (dispatch) => {
    //console.log('from Authorize, ', ownProps); //sort by number
    return {
        getProfile: (userId) => dispatch(getProfile(userId)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)

/*

{ userId && <h1>Welcome to your Profile!</h1> }

                <div className="userInfo">
                    <p>City: {info.city}</p>
                    <p>Languages: {languageItems}</p>
                    <p>Links: {socialItems}</p>
                </div>
 */