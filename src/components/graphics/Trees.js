import React, { Component, PropTypes } from 'react';
import {AnimationGroup, Animatable} from 'react-web-animation';

export default class Trees extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
    };

    getTiming( duration ) {
        return {
            duration,
            iterations: Infinity,
        };
    }

    getKeyFrames() {
        return [
            { transform: 'rotate(1deg)' },
            { transform: 'rotate(2deg)' },
            { transform: 'rotate(3deg)' },
            { transform: 'rotate(3deg)' },
            { transform: 'rotate(3deg)' },
            { transform: 'rotate(2deg)' },
            { transform: 'rotate(2deg)' },
            { transform: 'rotate(2deg)' },
            { transform: 'rotate(3deg)' },
            { transform: 'rotate(1deg)' },
        ];
    }

    render() {
        return (
            <svg
                y={ this.props.y }
                x={ this.props.x }
                width={ this.props.width }
                viewBox="0 0 100 185" 
            >
  
                    <ellipse
                        style={{ 
                            transformOrigin: "bottom",
                            fill:"#aee28f",
                            stroke:"#7ea977",
                            strokeMiterlimit:"10",
                            strokeWidth:"2px"
                        }}
                        cx="30"
                        cy="73"
                        rx="20.58"
                        ry="69.23"
                    />
                <line
                    style={{
                        fill:"none",
                        stroke:"#ce4a00",
                        strokeMiterlimit:"10",
                        strokeWidth:"2px"}}
                    x1="30"
                    x2="30"
                    y1="185"
                    y2="72"
                />
            </svg>
        )
    }
}
