/*
* Dependencies
*/

import React from 'react';

class EmployAvatar extends React.Component{
    render(){
         let url = '/img/'+this.props.employIcon;
        return <img className="img-circle"  src = {url}/>
    }
}

export default EmployAvatar;