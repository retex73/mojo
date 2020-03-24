import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Layout from './components/Layout';

class App extends Component {

  render() {
    return (
      <div>
        <h2>Value: {this.props.buildings}</h2>
        <button onClick={this.props.onSomething}>increase buildings</button>
        <Layout buildings={this.props.buildings} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    buildings: state.buildings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSomething: () => dispatch({ type: 'SOMETHING' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);