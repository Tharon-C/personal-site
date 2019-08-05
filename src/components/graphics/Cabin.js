import React, { Component, PropTypes } from 'react';
import Trees from './Trees';
import Cottage from './Cottage';
import Dude from './Dude.js';

export default class Cabin extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
    };

    Trees() {

    }

    render() {
        return (
            <div style={this.props.styleWrapper}>
                <svg id="Layer_1" viewBox="0 0 601.37 488.56" data-name="Layer 1">
                    <polygon style={{"fill":"#aee28f"}} points="0 185.54 348.85 185.54 184.72 421.64 0 185.54"/>
                    <polygon style={{"opacity":"0.22"}} points="154.29 255.08 184.72 421.64 348.85 185.54 154.29 255.08"/>
                    <polygon style={{"fill":"#aee28f"}} points="96.33 185.54 601.37 185.54 348.85 488.56 96.33 185.54"/>
                    <polygon style={{"fill":"#b499d1"}} points="154.29 185.54 314.38 41.64 466.71 185.54 154.29 185.54"/>
                    <polygon style={{"opacity":"0.19"}} points="601.37 185.54 416.34 185.54 348.85 488.56 601.37 185.54"/>
                    <polygon style={{"opacity":"0.24"}} points="314.38 41.64 257.73 185.54 466.71 185.54 314.38 41.64"/>
                    <polygon style={{"fill":"#b499d1"}} points="257.73 185.54 419.94 0 601.37 185.54 257.73 185.54"/>
                    <polygon style={{"opacity":"0.16"}} points="419.94 0 416.34 185.54 601.37 185.54 419.94 0"/>
                    <Dude
                        width="20%"
                        y="-105"
                        x="0"
                    />
                    <Trees 
                        width="15%"
                        y="-142"
                        x="150"
                    />
                    <Trees 
                        width="12%"
                        y="-125"
                        x="200"
                    />
                </svg>
            </div>
        );
    }
}
