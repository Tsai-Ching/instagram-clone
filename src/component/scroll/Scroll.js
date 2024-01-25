import React from 'react';
import './Scroll.css';
import PropTypes from 'prop-types';

function Scroll({ children }) {
    return <div className="scroll">{children}</div>;
}

Scroll.propTypes = {
    children: PropTypes.node,
};

export default Scroll;
