import React, { Component } from 'react';
import './App.scss';
import {CurrencyDataProvider,} from './components/currencyContext';
import Currencypopulate from './components/currencyPopulate';
import AddCurrency from './components/addCurrency';
import BaseCurrency from './components/baseCurrency';

class App extends Component {
  render() { 
    return (
      <CurrencyDataProvider>
          <BaseCurrency />
          <Currencypopulate />
          <AddCurrency />
      </CurrencyDataProvider>      
    );
  }
}
 
export default App;