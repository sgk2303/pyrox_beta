import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-luxon';
import StreamingPlugin from 'chartjs-plugin-streaming';
import { Chart, registerables } from 'chart.js';
import { withRouter } from "react-router";


Chart.register(...registerables);
Chart.register(StreamingPlugin);

class Reactor_Temprature extends Component {

  render() {
    const searchParams = new URLSearchParams(this.props.match.params).toString();

    return (
      <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
          <div className="pcoded-content">
            <div className="pcoded-inner-content">
              <div className="main-body">
                <div className="page-wrapper">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="card">
                        <div className="card-header">
                          <h5>Current Reactor Temprature</h5>
                        </div>
                        <div className="card-block">
                          <Line
                            data={{
                              datasets: [{
                                label: 'Reactor Temprature',
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                borderColor: 'rgb(255, 99, 132)',
                                borderDash: [8, 4],
                                fill: true,
                                data: []
                              }]
                            }}
                            options={{
                              scales: {
                                x: {
                                  type: 'realtime',
                                  realtime: {
                                    duration: 60000,
                                    refresh: 2000,
                                    delay: 2000,
                                    onRefresh: chart => {
                                      fetch('http://localhost:2303/current_reactor_temp?' + searchParams)
                                        .then(res => res.json())
                                        .then(res => {
                                          chart.data.datasets[0].data.push({
                                            x: new Date(res.date),
                                            y: res.temperture
                                          });
                                        }).catch(err => {
                                          console.error(err);
                                        });
                                    }
                                  }
                                }
                              }
                            }}
                            height={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="card">
                        <div className="card-header">
                          <h5>Current Catalyst Temprature</h5>
                        </div>
                        <div className="card-block">
                          <Line
                            data={{
                              datasets: [{
                                label: 'Catalyst Temperature',
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                borderColor: 'rgb(255, 99, 132)',
                                borderDash: [8, 4],
                                fill: true,
                                data: []
                              }]
                            }}
                            options={{
                              scales: {
                                x: {
                                  type: 'realtime',
                                  realtime: {
                                    duration: 60000,
                                    refresh: 2000,
                                    delay: 2000,
                                    onRefresh: chart => {
                                      fetch('http://localhost:2303/current_catalyst_temp?' + searchParams)
                                        .then(res => res.json())
                                        .then(res => {
                                          chart.data.datasets.forEach(dataset => {
                                            dataset.data.push({
                                              x: new Date(res.date),
                                              y: res.temperture
                                            });
                                          });
                                        })
                                        .catch(err => console.error(err));
                                    }
                                  }
                                }
                              }
                            }}
                            height={100}

                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="card">
                        <div className="card-header">
                          <h5>Current Catalyst Pressure</h5>
                        </div>
                        <div className="card-block">
                          <Line
                            data={{
                              datasets: [{
                                label: 'Catalyst Pressure',
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                borderColor: 'rgb(255, 99, 132)',
                                borderDash: [8, 4],
                                fill: true,
                                data: []
                              }]
                            }}
                            options={{
                              scales: {
                                x: {
                                  type: 'realtime',
                                  realtime: {
                                    duration: 60000,
                                    refresh: 2000,
                                    delay: 2000,
                                    onRefresh: chart => {
                                      fetch('http://localhost:2303/current_catalyst_pressure?' + searchParams)
                                        .then(res => res.json())
                                        .then(res => {
                                          chart.data.datasets.forEach(dataset => {
                                            dataset.data.push({
                                              x: new Date(res.date),
                                              y: res.pressure
                                            });
                                          });
                                        })
                                        .catch(err => console.error(err));
                                    }
                                  }
                                }
                              }
                            }}
                            height={70}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Reactor_Temprature);