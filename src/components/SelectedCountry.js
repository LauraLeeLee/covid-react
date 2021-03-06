import React from 'react';
import PropTypes from 'prop-types';
import SelectComp from './Select.js';


class SelectedCountry extends React.Component {
  static propTypes = {
    selectCountry: PropTypes.string,
    handleChange: PropTypes.func,
    selectedApiData: PropTypes.array
  } 
 
  render() {
    const {selectedApiData} = this.props;
    // console.log('selectedCountryApi: ', selectedApiData);
    return(
      <div>
        <h2>User Selected Country</h2>
        <SelectComp name="Country" 
        handleChange={this.props.handleChange}
        selectCountry={this.props.selectCountry}
        />
         {selectedApiData.length > 0 && selectedApiData.map(data =>
             <div key={data.code}
             className="data-div">
          <p> <span className="data-titles">Date:</span> {data.lastUpdate || "Date not loaded"}</p>
          <p> <span className="data-titles">Country:</span> {data.country || "country name not loaded"}</p>
          <p> <span className="data-titles">Confirmed Cases:</span> {data.confirmed || "confirmed cases not loaded"}</p>
          <p> <span className="data-titles">Deaths:</span> {data.deaths || 0 }</p>
        </div>
          )}  
          {/* {selectedApiData && 
             <div key={selectedApiData[0].code}
             className="data-div">
          <p> <span className="data-titles">Date:</span> {selectedApiData[0].lastUpdate || "Date not loaded"}</p>
          <p> <span className="data-titles">Country:</span> {selectedApiData[0].country || "country name not loaded"}</p>
          <p> <span className="data-titles">Confirmed Cases:</span> {selectedApiData[0].confirmed || "confirmed cases not loaded"}</p>
          <p> <span className="data-titles">Deaths:</span> {selectedApiData[0].deaths || 0 }</p>
        </div>} */}
      </div>
    )


  }
}

export default SelectedCountry;