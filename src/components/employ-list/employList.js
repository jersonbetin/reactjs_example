/*
* Dependencies
*/

import React from 'react';
import EmployRow from './employ-row';

class EmployList extends React.Component {
    render(){
        return <ul>
                {
                    this.props.employs.map((employ) => {
                        <EmployRow key={employ.number} icon={employ.icon}, name={employ.name} />
                    });
                }
            </ul>
    }
}

exports default EmployList;