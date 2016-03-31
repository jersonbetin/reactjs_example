/*
* Dependencies
*/

import React from 'react';

class EmployAvatar extends React.Component{
    render(){
        let url = ´/images/{this.props.employIcon}´;
        return <images  className="img-circle" style="width:50px;" src =url></images>
    }
}

exports default EmployAvatar;