import React, { Component } from 'react';
import NamesList from './components/NamesList';
class App extends Component {
  render() {
    return (
      <div>
        <NamesList data={this.props.data}/>
        //footer
        <credit/>React app by Brionna White
      </div>
    )
  }
}

export default App;
