import React from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

function GraphDropDown (props) {
    let {activeCurrency, cryptoAPI, handleSelectCoin} = props;
    return (
        <MDBDropdown >
            <MDBDropdownToggle caret color="primary">
                {activeCurrency}
            </MDBDropdownToggle>
            <MDBDropdownMenu>
                { Object.keys(cryptoAPI.currencies).map(
                    (currency, ix) =>
                        <MDBDropdownItem
                            key={`graphToolBar-${ix}`}
                            onClick={e => handleSelectCoin(e)}
                            value={currency}
                        >
                            {cryptoAPI.currencies[currency]}
                        </MDBDropdownItem>
                )}
            </MDBDropdownMenu>
        </MDBDropdown>
    );
}

export default GraphDropDown;