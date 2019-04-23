import React, { Component } from 'react';
import Modal from "react-modal";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { openModal , closeModal } from '../../../actions/modalActions';
import { logOut } from '../../../actions/loginActions';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('body');

class Logout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirectStayLogged: false,
            redirectToHomepage: false
        };
    }

    componentWillMount() {
        this.props.openModal();
        console.log('openModal was sent from Logout')
    }

    closeModal() {
        this.props.closeModal();
        this.setState(prevState => ({ redirectStayLogged: !prevState.redirectStayLogged }))
    }

    confirmLogout(e) {
        console.log('click from Modal');
        this.props.logOut();
        this.setState(prevState => ({ redirectToHomepage: !prevState.redirectToHomepage }))
    }

    render() {

        return (
            <div className="page-content">

                <Modal
                    isOpen={this.props.modalIsOpen}
                    //onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button id="close-modal-button" onClick={this.closeModal.bind(this)}>X</button>
                    <div>Are you sure you want to log out?</div>
                    <button id="confirm-modal-button" onClick={this.confirmLogout.bind(this)}>Yes, I'm sure!</button>
                </Modal>

                {this.state.redirectStayLogged &&  <Redirect to="/profile"/>}
                {this.state.redirectToHomepage &&  <Redirect to="/"/>}

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    modalIsOpen: state.logoutModal.modalIsOpen,
    userId: state.validation.userId,
});

// const mapStateToProps = (state) => {
//     console.log("!!!!! " + state.logoutModal.modalIsOpen)
//     return {modalIsOpen: state.logoutModal.modalIsOpen}
// };

const mapDispatchToProps = (dispatch) => {
    //console.log('from Authorize, ', ownProps); //sort by number
    return {
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal()),
        logOut: () => dispatch(logOut()),

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Logout)

// const Logout = () => {
//
//     return (
//         <div className="page-content">
//             logout page
//             <Modal isOpen={isOpen} style={customStyles}/>
//         </div>
//     );
// };

// SocialItem.propTypes = {
//     socialItem: PropTypes.object.isRequired
// };

//export default Logout;