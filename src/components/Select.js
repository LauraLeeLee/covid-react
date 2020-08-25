import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import {countriesData4} from '../data/countries-data.js';
import {statesData4} from '../data/states-data.js';

class SelectComp extends React.Component {
  static propTypes = {
    selectCountry: PropTypes.string,
    handleChange: PropTypes.func
  }

  state = {
      countryList: countriesData4,
      stateList: statesData4,
    }

  render() {
    const {stateList, countryList} = this.state;
    // console.log('original list country', countryList);
    // console.log('original list state', stateList);


    // const optionsCountry = Object.entries(countryList).map((entry, _) => {
    //   let key = entry[0]
    //   let value = entry[1]
    //   return <option key={key}
    //                  value={value}>
    //                    {value}
    //           </option>
    //  });
    const optionsAgain = [{
      label: 'USA',
      value: '1'
    }, {
      label: 'argentina',
      value: '2'
    },{
      label: 'canada',
      value: '3'
    }
  ]

    const countries = countryList.map(country => ({value: country.code, label: country.name}));

    // console.log('countries: ', countries);
    const optionsCountry = countries.map(country => {
      return <option key={country.value}
                      value={country.label}>
                      {country.label}

      </option>
    })
    const optionsState = stateList.map(data => {
      return <option key={data.abbreviation}
              value={data.name}>
                {data.name}
             </option>
    });
 
    let options;
    if(this.props.name === "Country") {
      options = countryList;
      // console.log('options country: ',options);
    } else {
      options = stateList;
      // console.log('options state: ',options);
    }

    // {console.log('countryList:', this.state.countryList)}
    // {console.log('stateList:', this.state.stateList)}
   
    return (
      <div>
        <Select name={`${this.props.name}`} 
              className={`select-options select-${this.props.name}`}
              onChange={this.props.handleChange}
              placeholder= {this.props.name === "Country" ? "Select Country" : "Select State"}
              options={options}
              />  


        {/* <select required
                name={`${this.props.name}`} 
                className={ `select-options select-${this.props.name}` }
                onChange={this.props.handleChange}>
                  <option value=""
                          className="option-placeholder"
                          hidden> Select {this.props.name}</option>
                   {options} 
        </select> */}

      </div>
    )
  }
}

export default SelectComp;

      // state = {
  //   selectCountry: ''
  // }
  // handleChange =(event) => {
  //   console.log(event.currentTarget.value);
  //   this.setState({selectCountry: event.currentTarget.value});

  // }

    // logic to render options when using react-select
    // react-select seems to change the structure of the data lists
    // const optionsCountry = Object.entries(countryList).map((entry) => {
    //   let key = entry[0]
    //   let value = entry[1]
    //   return <option key={key}
    //                  value={value}>
    //                    { value }
    //           </option>
    //  });
    
    //  const optionsState = Object.entries(stateList).map((entry) => {
    //   return <option key={entry.key}
    //             value={entry.key}>
    //             {entry.key}
    //           </option>
    //  });


    // let options;
    // if(this.props.name === "Country") {
    //   options = optionsCountry;
    //   console.log('options country: ',options);
    // } else {
    //   options = optionsState;
    //   console.log('options state: ',options);
    // }