/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import SCBLineChart from 'components/SCBLineChart';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <h1>Statistics from SCB</h1>
        <SCBLineChart url="/BE/BE0101/BE0101A/BefolkningNy"/>
      </div>
    );
  }
}
