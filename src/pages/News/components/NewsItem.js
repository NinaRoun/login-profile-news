import React from 'react';
import PropTypes from "prop-types";

const NewsItem = ({ newsItem }) => {

    return (
            <span>
                <h3>{newsItem.title}</h3>
                <p>{newsItem.text}</p>
            </span>
    );
};

NewsItem.propTypes = {
    newsItem: PropTypes.object.isRequired
};

export default NewsItem;

