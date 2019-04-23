import React from 'react';
import PropTypes from "prop-types";

const SocialItem = ({ socialItem }) => {

    //const imgSrc = "./" + `${socialItem.label}` + ".png";

    return (
            <li>
                <span>{socialItem.label} </span>

            </li>
    );
};

SocialItem.propTypes = {
    socialItem: PropTypes.object.isRequired
};

export default SocialItem;

//`${API_ROOT}/${endPoint}`
//                <span><a href={socialItem.link}><img src={imgSrc} width="30" height="30" /></a></span>