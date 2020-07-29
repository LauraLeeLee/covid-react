import React from 'react';
import PropTypes from 'prop-types';
import SelectComp from './Select.js';
import { apiKey } from '../data/clientInfo.js';


class SelectedState extends React.Component {
  static propTypes = {
    apiData2: PropTypes.array
  } 

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

  findSelected = (selectState) => {
    let apiProvinces;
    if(this.props.apiData2.length > 0) {
      console.log("api states in selectedState:", this.props.apiData2);
      console.log(this.props.apiData2[0][0].country);
      console.log(this.props.apiData2[0][0].date);
      console.log(this.props.apiData2[0][0].provinces);
       apiProvinces = this.props.apiData2[0][0].provinces;
      console.log(apiProvinces);  
      }

      if(apiProvinces.length > 0) {
        let find = apiProvinces.filter(function(result) {
          return result.province === selectState;
        });
        this.setState({selectedStateApi: find});
      }
  }
  componentDidMount() {
    this.findSelected();
  }

  // selectedStateFetch = async (stateName) => {
  //   const response = await fetch(
  //     `https://covid-19-data.p.rapidapi.com/country/code?format=json&code=usa`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
  //         'x-rapidapi-key': apiKey,
  //       }
  //     }
  //   )
  //   .then(response => response.json()
  //   ).then(data => {
  //     console.log("fetchSelectedState:", data);
  //     console.log(stateName);
  //     this.setState({selectedStateApi: data});
  //     return data;
  //   })
  //     .catch(err => {
  //       console.log(err);
  //   });
  // }

  render() {
    const {apiData2} = this.props;
    const {selectedStateApi} = this.state;
    console.log("selected state api: ", selectedStateApi);

    // let apiProvinces; 
    // if(apiData2.length > 0) {
    // console.log("api states in selectedState:", apiData2);
    // console.log(apiData2[0][0].country);
    // console.log(apiData2[0][0].date);
    // console.log(apiData2[0][0].provinces);
    // apiProvinces = apiData2[0][0].provinces;
    
    // }
    // console.log(apiProvinces);

    return (
      <div>
        <h2>User Selected State</h2>
        <SelectComp label="State" 
          handleChange={this.handleChange}
          />
          {/* {apiProvinces.length > 0 && apiProvinces.map(data => {
            <div className="data-div">
              <p><span className="data-name">State: {data.province}</span></p>
              <p> <span className="data-titles">Date:</span> {data.lastUpdate || "Date not loaded"}</p>
              <p> <span className="data-titles">Confirmed Cases:</span> {data.confirmed || "confirmed cases not loaded"}</p>
              <p> <span className="data-titles">Deaths:</span> {data.deaths || 0 }</p>
            </div>
           }) 
          } */}
      </div>
    )
  }
}

export default SelectedState;

 {/* {selectedStateApi.length > 0 && selectedStateApi.map(data =>
             <div key={data.code}
             className="data-div">
          <p> <span className="data-titles">Date:</span> {data.lastUpdate || "Date not loaded"}</p>
          <p> <span className="data-titles">Confirmed Cases:</span> {data.confirmed || "confirmed cases not loaded"}</p>
          <p> <span className="data-titles">Deaths:</span> {data.deaths || 0 }</p>
        </div>
          )}  */}