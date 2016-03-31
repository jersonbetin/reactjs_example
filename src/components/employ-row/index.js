/*
* Dependencies
*/

import React from 'react';
import EmployAvatar from './employ-avatar';

class EmployRow extends React.Component {
    render(){
        return <li>
                <EmployAvatar {this.props.icon}/>
                {this.props.name}
            </li>
    }
}

exports default EmployRow;