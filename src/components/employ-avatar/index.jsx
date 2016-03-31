/*
* Dependencies
*/

import React from 'react';

class EmployAvatar extends React.Component{
   //contructor
   /*constructor(){
      super(props);
      this.state = {employIcon: ""};
   }*/

   render(){
      let url = '/img/'+this.props.employIcon;
      return <img className="img-circle"  src = {url}/>
   }
}
//cuando no se envian parametros//
EmployAvatar.defaultProps={ employIcon : 'pikachu.png' };

export default EmployAvatar;