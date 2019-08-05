import React, { Component } from 'react';

import Cloud from './Cloud';

export default class Clouds extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            clouds: {
                height: 200,
                width: '100%',
            },
        }
        return (
            <div style={{ ...style.clouds, ...this.props.style }}>
                <Cloud
                    styleWrapper={{
                        width: "10%",
                        top: 20,
                        left: "60%",
                    }}
                />
                <Cloud
                    styleWrapper={{
                        width: "5%",
                        top: 120,
                        left: "70%",
                    }}
                />
            </div>
        )
    }
}

