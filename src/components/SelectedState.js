import React from 'react';
import PropTypes from 'prop-types';
import SelectComp from './Select.js';
import { apiKey } from '../data/clientInfo.js';


class SelectedState extends React.Component {
  static propTypes = {
    apiData2: PropTypes.array,
    fetchStateCovid: PropTypes.func
  } 

  state = {
    selectState: '',
    selectedStateApi: []
  }

  handleChange = async(event) => {
    console.log(event.label);
    await this.setState({selectState: event.label});
    // console.log("state selected: ", this.state.selectState);

    // this.selectedStateFetch(this.state.selectState);
    this.findSelected(this.state.selectState);  
    this.props.fetchStateCovid(this.state.selectState);
  }

  findSelected = async(pickedState) => {
    // console.log(this.props.apiData2);
    let apiProvinces;
    if(this.props.apiData2.length > 0) {
      // console.log("api states in selectedState:", this.props.apiData2);
      // console.log(this.props.apiData2[0][0].country);
      // console.log(this.props.apiData2[0][0].date);
      // console.log(this.props.apiData2[0][0].provinces);
       apiProvinces = this.props.apiData2[0][0].provinces;
    }
    // console.log(apiProvinces);

      if(apiProvinces.length > 0) {
       let find = apiProvinces.find(function(result) {
         console.log(result.province === pickedState);
          return result.province === pickedState;
        });
         this.setState({selectedStateApi: find});
        // console.log("find: ", this.state.selectedStateApi); 
     }
  }
 
  render() {
    const {apiData2} = this.props;
    const {selectedStateApi} = this.state;
    // console.log("selected state api: ", selectedStateApi);
    const entries = selectedStateApi.confirmed;

    if(apiData2.length > 0) {
      // console.log("apiData2: ", apiData2);
      const apiDate = apiData2[0][0].date;
      // console.log("apiDate: ", apiDate);
    }
   
   let stateDataRender;
   if(Object.keys(selectedStateApi).length > 0 && apiData2.length > 0 ) {
     stateDataRender =   <div className="data-div">
     <p><span className="data-name">State: {selectedStateApi.province || "Name not loaded" }</span></p>
     <p> <span className="data-titles">Date:</span> { apiData2[0][0].date || "Date not loaded"}</p>
     <p> <span className="data-titles">Confirmed Cases:</span>{selectedStateApi.confirmed || "confirmed cases not loaded"}</p>
     <p> <span className="data-titles">Deaths:</span> {selectedStateApi.deaths || 0 }</p>
   </div>
   } else {
     stateDataRender = '';
   }
   
    return (
      <div>
        <h2>User Selected State</h2>
        <SelectComp name="State" 
                    handleChange={this.handleChange}
          />
        {stateDataRender}     
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

                 {/* {selectedStateApi.length > 0 && Object.entries(selectedStateApi).map(data => 
            <div className="data-div">
              <p><span className="data-name">State: {data.province || "Name not loaded" }</span></p>
              <p> <span className="data-titles">Date:</span> {data.lastUpdate || "Date not loaded"}</p>
              <p> <span className="data-titles">Confirmed Cases:</span> {data.confirmed || "confirmed cases not loaded"}</p>
              <p> <span className="data-titles">Deaths:</span> {data.deaths || 0 }</p>
            </div>
           ) 
          } */}
          {/* {selectedStateApi && apiData2.length > 0 &&
            <div className="data-div">
            <p><span className="data-name">State: {selectedStateApi.province || "Name not loaded" }</span></p>
            <p> <span className="data-titles">Date:</span> { apiData2[0].date || "Date not loaded"}</p>
            <p> <span className="data-titles">Confirmed Cases:</span>{selectedStateApi.confirmed || "confirmed cases not loaded"}</p>
            <p> <span className="data-titles">Deaths:</span> {selectedStateApi.deaths || 0 }</p>
          </div>
          } */}