import React, { Fragment } from 'react';

class Country extends React.Component {

  render() {
    return (
      <React.Fragment> 
      <h2>Countries go here</h2>
      <li className="countries-list">
        <h3 className="date"></h3>
        <h3 className="country-name"></h3>
        <h3 className="total-cases"></h3>
        <h3 className="new-cases"></h3>
        <h3 className="perc-increase"></h3>
        <h3 className="hew-deaths"></h3>
        <h3 className="total-deaths"></h3>
        <h3 className="perc-increase-deaths"></h3>

      </li>
      </React.Fragment>
    )
  }

}


export default Country;