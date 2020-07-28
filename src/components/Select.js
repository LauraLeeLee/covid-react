import React from 'react';
// import Select from 'react-select';
import PropTypes from 'prop-types';
import {countriesData1} from '../data/countries-data.js';
import {stateData1} from '../data/states-data.js';

// const options = countriesData3;
// console.log('options:', options);

// const options2 = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

// const SelectComp = () => (
//   <Select options={options} />
// )

class SelectComp extends React.Component {
  static propTypes = {
    selectCountry: PropTypes.string,
    handleChange: PropTypes.func
  }

  // state = {
  //   selectCountry: ''
  // }
  // handleChange =(event) => {
  //   console.log(event.currentTarget.value);
  //   this.setState({selectCountry: event.currentTarget.value});

  // }
  constructor(props) {
    super(props);
    this.state = {
      countryList: countriesData1,
      stateList: stateData1,
    }
  }

  render() {
    const optionsCountry = Object.entries(this.state.countryList).map((entry, _) => {
      let key = entry[0]
      let value = entry[1]
      return <option key={key}
                     value={key}>
                       {value}
              </option>
     });

     const optionsState = Object.entries(this.state.stateList).map((entry, _) => {
      let key = entry[0]
      let value = entry[1]
      return <option key={key}
                     value={key}>
                       {value}
              </option>
     });

    let options;
    if(this.props.label === "Country") {
      options = optionsCountry;
    } else {
      options = optionsState;
    }

    // {console.log('countryList:', this.state.countryList)}
    // {console.log('stateList:', this.state.stateList)}
   
    return (
      <div>
        <select name={`${this.props.label}`} 
              className="select-options {`select-${props.label}`}"
              onChange={this.props.handleChange}
              // select-value={this.props.selectCountry}
              >
                {options} 
        </select>
       <p></p>
      </div>
    )
  }
}

export default SelectComp;