import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SelectedState from './SelectedState.js';
import { apiKey } from '../data/clientInfo.js';

class StateComp extends React.Component {
  state = {
    apiData2: [],
    apiProvinces: [],
    myProvinces: []
  }

  fetchStateCovid = async (stateName) => {
    const response = await fetch(
      // `https://covid-19-data.p.rapidapi.com/country/code?format=json&code=usa`,
      `https://covid-19-data.p.rapidapi.com/report/country/code?format=json&date-format=YYYY-MM-DD&date=2020-05-20&code=usa`,
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
      // console.log('DATE: ', data[0].date);
      this.setState({apiData2: [...this.state.apiData2, data]});
      this.setState({apiProvinces: data[0].provinces});
      return data;
    })
      .catch(err => {
        console.log(err);
    });
  }


  filterCities = () => {
  if(this.state.apiProvinces.length > 0 ) {   
    const filtered = this.state.apiProvinces.filter(function(province) {
    return province.province ==="New York" || 
           province.province === "Florida" || 
           province.province === "Pennsylvania" || 
           province.province === "North Carolina" || 
           province.province === "Georgia" || 
           province.province === "Texas" || 
           province.province === "Arizona";
  });
    // console.log(filtered);
    this.setState({myProvinces: filtered});
    // console.log(this.state.myProvinces);
  }
}
  

  componentDidMount() {
    setTimeout(function() {
      this.fetchStateCovid()
    }.bind(this), 6000);

    setTimeout(function() {
      this.filterCities()
    }.bind(this), 8000);
  }

  render() {
    const {apiData2, apiProvinces, myProvinces } = this.state;
    console.log(myProvinces);
   
    if(apiData2.length > 0) {
      // console.log(apiData2);
      if(apiProvinces.length >0 ) {
      // console.log('provinces:', apiProvinces);
      // console.log('mycities', myProvinces);
      // console.log(apiData2[0].provinces[0].province);
      }
    }

    return(
      <div>
        <h2>States Component</h2>
        {apiData2.length > 0 && apiData2.map(data => 
          <div key={data[0].country}
               className="data-div">
            <p> <span className="data-titles">Date:</span> {data[0].date || "Date not loaded"}</p>
            <p> <span className="data-titles">Confirmed Cases:</span> {data[0].confirmed || "confirmed cases not loaded"}</p>
            <p> <span className="data-titles">Deaths:</span> {data[0].deaths || 0 ||  "total deaths not loaded"}</p>
          </div>
      )}
      { myProvinces.length > 0 && myProvinces.map(data =>
         <div className="data-div"
              key={data.province}>
          <p> <span className="data-titles">State:</span> {data.province || "State name not loaded"}</p>
          <p> <span className="data-titles">Date:</span> {data.date || "Date not loaded"}</p>
          <p> <span className="data-titles">Confirmed Cases:</span> {data.confirmed || "confirmed <cases></cases> not loaded"}</p>
          <p> <span className="data-titles">Deaths:</span> {data.deaths || 0 ||  "total deaths not loaded"}</p>
         </div>
        )}
   <SelectedState apiData2={apiData2}/>
   </div>
  )}
}

export default StateComp