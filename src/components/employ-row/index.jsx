/*
* Dependencies
*/

import React from 'react';
import EmployAvatar from '../employ-avatar';

class EmployRow extends React.Component {
    render() {
        return <li>
                <EmployAvatar employIcon = {this.props.icon} />
                {this.props.name}
            </li>
    }
}

export default EmployRow;