import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SelectedCountry from './SelectedCountry.js';
import SelectedState from './SelectedState.js';
import { apiKey } from '../data/clientInfo.js';

// import {countriesData3} from '../data/countries-data.js';


class Country extends React.Component {
    state = {
      apiData: [],
      selectCountry: '',
      selectedApiData: [],
      // selectState: '',
      // selectedStateApi: []
    }
   
    handleChange =async(event) => {
      console.log(event.value);
      await this.setState({selectCountry: event.value});
      // console.log("selected:", this.state.selectCountry)
      this.selectedCountryFetch(this.state.selectCountry);
    }
  
  fetchCovid = async (country) => {
    // console.log(date);
    // console.log(country);
    // `https://covid-19-data.p.rapidapi.com/report/country/name?date-format=YYYY-MM-DD&format=json&date=08-01-2020&name=Italy`
    const response = await fetch(
      `https://covid-19-data.p.rapidapi.com/country?format=json&name=${country}`,
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
      // console.log("fetchCovd:", data);
      // console.log(data[0].country);
      // console.log('date-', data[0].lastChange);

      this.setState({apiData: [...this.state.apiData, data]});
      // console.log('the-state:', this.state);
      if(this.state.apiData.length > 0) {
      // console.log(this.state.apiData[0][0].confirmed, this.state.apiData[1], this.state.apiData[2]);
      }
      return data;
    })
      .catch(err => {
        // console.log(err);
    });
    // console.log('what country entered:', country);
    // console.log(response);
    // const results = await response.json();
    // console.log(results);
    // return results;
    // const results = await response.json();
    
    // return results; 
  }// end fectchCovid


  // const selectCountry = this.state.selectCountry;
  selectedCountryFetch = async (countryCode) => {
    const response = await fetch(
      `https://covid-19-data.p.rapidapi.com/country/code?format=json&code=${countryCode}`,
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
      console.log("fetchSelected:", data);
      console.log(countryCode);

    this.setState({selectedApiData: data});
      // console.log('selected state:', this.state);
      // if(this.state.apiData.length > 0) {
      // console.log(this.state.apiData[0][0].confirmed, this.state.apiData[1], this.state.apiData[2]);
      // }
      return data;
    })
      .catch(err => {
        console.log(err);
    });
  }

  componentDidMount() {
    this.fetchCovid('italy');
    setTimeout(function() {
      this.fetchCovid('USA')
    }.bind(this), 2000);
    setTimeout(function() {
      this.fetchCovid('Australia')
    }.bind(this), 4000);
  }

  render() {
    // setTimeout(function() {
    //   this.selectedStateFetch('new york')
    // }.bind(this), 3000);
    // console.log('apiData:', this.state.apiData);
    // console.log('country.js selectCountry:', this.state.selectCountry);
    // console.log('selected country api:', this.state.selectedApiData);
    const {apiData, selectedApiData, selectCountry, selectState, selectedStateApi} = this.state;
    // const {} = this.state;

    if(apiData.length> 0) {
      console.log(apiData);
       console.log(apiData[0][0].code);
      const dataDate = apiData[0][0].lastUpdate;
      console.log(dataDate);

      const date = new Date(dataDate);
      const year = date.getFullYear();
      let month = date.getMonth()+1;
      let dt = date.getDate();

      if (dt < 10) {
        dt = '0' + dt;
      }
      if(month < 10) {
        month = '0' + month;
      }
      const reformatted = `${month}/${dt}/${year}`;
      console.log(reformatted);
    }
   

    return (
        <div>
          <h3>CountryComponent</h3>
          {apiData.length > 0 && apiData.map(data => 
          <div key={data[0].code}
               className="data-div">
            <p> <span className="data-titles">Date:</span> {data[0].lastUpdate || "Date not loaded"}</p>
            <p> <span className="data-titles">Country:</span> {data[0].country || "country name not loaded"}</p>
            <p> <span className="data-titles">Confirmed Cases:</span> {data[0].confirmed || "confirmed cases not loaded"}</p>
            <p> <span className="data-titles">Deaths:</span> {data[0].deaths || 0 ||  "total deaths not loaded"}</p>
          </div>
          )}
        <SelectedCountry  selectCountry={selectCountry}
                          handleChange={this.handleChange}
                          selectedApiData={selectedApiData}
                          />
                   {/* {selectedApiData.length > 0 && selectedApiData.map(data =>
             <div key={data.code}
             className="data-div">
          <p> <span className="data-titles">Date:</span> {data.lastUpdate || "Date not loaded"}</p>
          <p> <span className="data-titles">Country:</span> {data.country || "country name not loaded"}</p>
          <p> <span className="data-titles">Confirmed Cases:</span> {data.confirmed || "confirmed cases not loaded"}</p>
          <p> <span className="data-titles">Deaths:</span> {data.deaths || 0 }</p>
        </div>
          )}       
                           */}
     
        </div>  
    )
  }
} 
export default Country;

  // })
    // return (
    //   <React.Fragment> 
    //   <h2>Countries go here</h2>
    //   <li className="countries-list">
    //     <h3 className="date"></h3>
    //     <h3 className="country-name"></h3>
    //     <h3 className="total-cases"></h3>
    //     <h3 className="new-cases"></h3>
    //     <h3 className="perc-increase"></h3>
    //     <h3 className="hew-deaths"></h3>
    //     <h3 className="total-deaths"></h3>
    //     <h3 className="perc-increase-deaths"></h3>

    //   </li>
    //   </React.Fragment>
    // )