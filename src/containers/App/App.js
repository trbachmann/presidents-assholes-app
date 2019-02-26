import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchPresidents } from '../../thunks/fetchPresidents';
import { Loading } from '../../components/Loading/Loading';
import { Error404 } from '../../components/Error404/Error404';
import CardContain from '../CardContain/CardContain';
import FilterControls from '../FilterControls/FilterControls';

export class App extends Component {
  componentDidMount() {
    this.props.fetchPresidents();
  }

  render() {
    const { isLoading, hasErrored } = this.props;
    return (
      <div className="App">
        <header className="App-header">
        <h1>Presidents and Assholes</h1>
        </header>
        { isLoading && <Loading /> }
        { (hasErrored !== '') && <Error404 /> }
        <FilterControls />
        <CardContain />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPresidents: () => dispatch(fetchPresidents()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
