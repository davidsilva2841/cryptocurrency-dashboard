import React, { Component } from 'react';

import {
    MDBBadge
} from "mdbreact";
import GraphDropDown from "./GraphDropDown";


class ToolBar extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        let {activeCurrency, cryptoAPI, handleSelectCoin} = this.props;
        return (
            
            <div className="module">
                <div className="tool-bar">
                    <GraphDropDown
                        handleSelectCoin={handleSelectCoin}
                        activeCurrency={activeCurrency}
                        cryptoAPI={cryptoAPI}
                    />
                    {/*<MDBBadge><div className="label">here</div></MDBBadge>*/}
                </div>
            </div>
        );
    }
}


export default ToolBar;