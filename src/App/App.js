import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchPresidents } from '../thunks/fetchPresidents';

export class App extends Component {
  componentDidMount() {
    this.props.fetchPresidents();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Presidents</h1>
        </header>
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
