/*
* Dependencies
*/

import React from 'react';
import EmployAvatar from '../employ-avatar';

class EmployRow extends React.Component {

   onClick(e){
      alert(this.props.name);
   }

   render() {
      return <li onClick={this.onClick.bind(this)}>
            <EmployAvatar employIcon = {this.props.icon} />
            {this.props.name}
         </li>
   }
}

export default EmployRow;