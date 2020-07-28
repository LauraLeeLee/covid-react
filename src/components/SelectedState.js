import React from 'react';
import PropTypes from 'prop-types';
import SelectComp from './Select.js';
import { apiKey } from '../data/clientInfo.js';


class SelectedState extends React.Component {
  // static propTypes = {
  //   selectState: PropTypes.string,
  //   handleChange2: PropTypes.func,
  //   selectedStateApi: PropTypes.array
  // } 

  state = {
    selectState: '',
    selectedStateApi: []
  }

  handleChange = async(event) => {
    console.log(event.currentTarget.value);
    await this.setState({selectState: event.currentTarget.value});
    console.log("state selected: ", this.state.selectState);
    this.selectedStateFetch(this.state.selectState)
  
  }

  selectedStateFetch = async (stateName) => {
    const response = await fetch(
      `https://covid-19-data.p.rapidapi.com/country/code?format=json&code=usa`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
          'x-rapidapi-key': apiKey,
        }
      }
    )
    .then(response => response.json()
    ).then(data => {
      console.log("fetchSelectedState:", data);
      console.log(stateName);
      this.setState({selectedStateApi: data});
      return data;
    })
      .catch(err => {
        console.log(err);
    });
  }

  render() {
   const {selectedStateApi} = this.state;
    return (
      <div>
        <h2>User Selected State</h2>
        <SelectComp label="State" 
          handleChange={this.handleChange}
          />
           <p> <span className="data-titles">State:</span> {this.state.selectState}</p>
          {selectedStateApi.length > 0 && selectedStateApi.map(data =>
             <div key={data.code}
             className="data-div">
          <p> <span className="data-titles">Date:</span> {data.lastUpdate || "Date not loaded"}</p>
          <p> <span className="data-titles">Confirmed Cases:</span> {data.confirmed || "confirmed cases not loaded"}</p>
          <p> <span className="data-titles">Deaths:</span> {data.deaths || 0 }</p>
        </div>
          )} 
      </div>
    )
  }
}

export default SelectedState;