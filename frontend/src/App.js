import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './dashboard';
import Navbar from './navbar';
import './assets/fonts/fontawesome/css/fontawesome-all.min.css'
import './assets/plugins/animation/css/animate.min.css'
import './assets/css/style.css'
import CurrentData from './current_data';
import { Redirect, Route } from 'react-router-dom';
import Reactor_Temprature from './graph';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:2303/current_stats', {
      method: 'GET',
      headers: new Headers({ 'content-type': 'application/json' }),
      async: true
    })
      .then(function (response) {
        return response.text();
      }).then(function (text) {
        setData(JSON.parse(text));
      });
  }
    , []);

  return (
    <div className="App">
{/* <Mqtt_Connector></Mqtt_Connector> */}
      <Navbar></Navbar>
      <Route path="/">
        <Redirect to="/dashboard" />
      </Route>
      <Route path="/dashboard">
        <Dashboard data={data}></Dashboard>
      </Route>
      <Route path="/currentData/:m_id">
        <CurrentData></CurrentData>
      </Route>
      <Route path="/graphData/:m_id">
        <Reactor_Temprature></Reactor_Temprature>
      </Route>

    </div>
  );
}

export default App;
