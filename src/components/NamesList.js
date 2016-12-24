import React, { Component } from 'react';

class NamesList extends Component {

   render(){
     const {data} = this.props;
     console.log('we should see the data here', data)
     const nameList = data.map(name => {
       return (
         <li key={name.id} className={name.sex}>{name.name}</li>
       )
       // console.log(name.name, name.sex)

     })

     return (
       <div>
       <p>
       filterText value is: {this.props.filterText}
       </p>
       <ul>
         {nameList}
       </ul>
       </div>

     );

   }
}
 export default NamesList;
