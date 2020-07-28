import React from 'react';
import Header from './Header.js';
import Country from './Country.js';
import StateComp from './State.js';
import { apiKey } from '../data/clientInfo.js';
// import {countriesData3} from '../data/countries-data.js';

class App extends React.Component {
state = {
  // apiData: [],
  countries: {},
  // countriesList: countriesData3,
  states: {},
  selectValue: ""
}

componentDidMount() {

}


  render() {
    // console.log('apiData:', this.state.apiData);
    return (
      <div className="covid-wrap">
        <Header />
        <Country data={this.state.apiData}/>
        <StateComp />
       
        {/* <SelectComp label="State"
                   selectValue={this.selectValue}/>  */}
      </div>
    )
  }  

}

export default App;