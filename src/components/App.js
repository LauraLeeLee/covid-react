import React from 'react';
import Country from './Country';


class App extends React.Component {
state = {
  countries: {},
  states: {},
}
  stat
  render() {
    return (
      <div className="covid-wrap">
        <h1>Covid Data Wrapper</h1>
        <Country />
      </div>
    )
  }  

}

export default App;