import React from 'react';
import PropTypes from "prop-types";

const LanguageItem = ({ languageItem }) => {

    return (
            <li className="language-item">
                {languageItem}
            </li>
    );
};

LanguageItem.propTypes = {
    languageItem: PropTypes.string.isRequired
};

export default LanguageItem;

