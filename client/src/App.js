import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Layout.css';



// Components
import Sidebar from './components/Sidebar/Sidebar';
import Spinner from './components/Spinner/Spinner';
import Buildings from './components/Buildings/Buildings';
import Map from './components/Maps/Map';

class App extends Component {

  state = {
    buildings: []
  }



  componentDidMount() {
    const url = 'http://192.168.1.13:8080/buildings'
    axios.get(url)
      .then(response => {
        const { data } = response;

        this.setState({
          buildings: data
        })
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  render() {
    let buildingsComp = (<Spinner />);

    if (this.state.buildings.length) {
      buildingsComp = (
        <Buildings buildings={this.state.buildings} />
      )
    }

    return (
      <div className="PageWrapper">

        <div className="Row">
          <div className="Column-1">
            <Sidebar />
          </div>

          <div className="Column-1">
            {buildingsComp}
          </div>

          <div className="Column-1">
            <Map />
          </div>

        </div>


      </div >
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