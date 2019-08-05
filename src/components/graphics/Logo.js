import React, { Component, PropTypes } from 'react';
import LogoBlue from "../../assets/logo-blue.svg"

export default class Box extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
    };

    render() {
        const { size = "100px", isBlue } = this.props
        let style = {
            sun: {
                width: size, 
                height: size,
                marginRight: "32px",
                marginLeft: "-85px"
            },
        };

        return (
            <img src={  LogoBlue } style={ style.sun } />
        );
    }
}