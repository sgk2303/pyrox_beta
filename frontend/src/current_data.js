import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';


function CurrentData() {
    const params = useParams();
    const [current_feed, set_feed] = useState([]);
    const [current_temp, set_temp] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
            let searchParams = new URLSearchParams(params);
            await fetch('http://localhost:2303/previous_feed_set?' + searchParams.toString(), {
                method: 'GET',
                headers: new Headers({ 'content-type': 'application/json' }),
                async: true
            }).then(function (response) {
                return response.text();
            }).then(function (text) {
                set_feed(JSON.parse(text));
            });
    
            await fetch('http://localhost:2303/previous_temp_set?' + searchParams.toString(), {
                method: 'GET',
                headers: new Headers({ 'content-type': 'application/json' }),
                async: true
            }).then(function (response) {
                return response.text();
            }).then(function (text) {
                set_temp(JSON.parse(text));
            });
        }

        fetchMyAPI();
        setInterval(() => {
            fetchMyAPI()
          }, 50000);

        // set_last_feed(current_feed[0].set_feed);
        // set_last_temp(current_temp[0].set_temp);
    });
// console.log(current_feed);
console.log(current_temp);
    return (
        <div>
            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">
                    <div class="pcoded-content">
                        <div class="pcoded-inner-content">
                            <div class="main-body">
                                <div class="page-wrapper">
                                    <div class="row">
                                        <div class="col-md-12 col-xl-4">
                                            <div class="card card-social">
                                                <div class="card-block border-bottom">
                                                    <div class="row align-items-center justify-content-center">
                                                        <div class="col-auto">
                                                            <i class="feather icon-sun text-primary f-36"></i>
                                                        </div>
                                                        <div class="col text-right">
                                                            <h3>Reactor Temprature</h3>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-block">
                                                    <div class="row align-items-center justify-content-center card-active">
                                                        <div class="col-6">
                                                            <h6 class="text-center m-b-10"><span class="text-muted m-r-5">Current tempraure:</span>350  &#8451; </h6>
                                                            <div class="progress">
                                                                <div class="progress-bar progress-c-theme" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-xl-4">
                                            <div class="card card-social">
                                                <div class="card-block border-bottom">
                                                    <div class="row align-items-center justify-content-center">
                                                        <div class="col-auto">
                                                            <i class="feather icon-sun text-c-blue f-36"></i>
                                                        </div>
                                                        <div class="col text-right">
                                                            <h3>Catalyst Temprature</h3>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-block">
                                                    <div class="row align-items-center justify-content-center card-active">
                                                        <div class="col-6">
                                                            <h6 class="text-center m-b-10"><span class="text-muted m-r-5">Current Temprature:</span>{} </h6>
                                                            <div class="progress">
                                                                <div class="progress-bar progress-c-green" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-xl-4">
                                            <div class="card card-social">
                                                <div class="card-block border-bottom">
                                                    <div class="row align-items-center justify-content-center">
                                                        <div class="col-auto">
                                                            <i class="feather icon-maximize-2 text-c-red f-36"></i>
                                                        </div>
                                                        <div class="col text-right">
                                                            <h3>Catalyst Pressure:</h3>
                                                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-block">
                                                    <div class="row align-items-center justify-content-center card-active">
                                                        <div class="col-6">
                                                            <h6 class="text-center m-b-10"><span class="text-muted m-r-5">Current Pressure:</span>0.04 Bar</h6>
                                                            <div class="progress">
                                                                <div class="progress-bar progress-c-theme" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div class="card">
                                                <div class="card-block table-border-style">
                                                    <div class="table-responsive">
                                                        <table class="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>S. No.</th>
                                                                    <th>Feed</th>
                                                                    <th>Last set on</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {current_feed.map((item, index) => (
                                                                    <tr>
                                                                        <th scope="row">{index + 1}</th>
                                                                        <td>{item.set_feed}</td>
                                                                        <td>{item.on}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div class="card">
                                                <div class="card-block table-border-style">
                                                    <div class="table-responsive">
                                                        <table class="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>S. No.</th>
                                                                    <th>Temperature</th>
                                                                    <th>Last set on</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {current_temp.map((item, index) => (
                                                                    <tr>
                                                                        <th scope="row">{index + 1}</th>
                                                                        <td>{item.set_temp}</td>
                                                                        <td>{item.set_on}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
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
            </div>
        </div>
    )
}

export default CurrentData;