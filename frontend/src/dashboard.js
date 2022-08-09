import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function countUnique(iterable) {
    return new Set(iterable).size;
}

function Dashboard(props) {
    const total_machine = countUnique(props.data.map(item => item.m_id))
    const total_machine_online = countUnique(props.data.filter(item => item.stats === "online").map(item => item.m_id))
    const total_machine_offline = countUnique(props.data.filter(item => item.stats === "offline").map(item => item.m_id))
    // console.log(props.data.map(item => (item.filter(item => item.status=="offline"))))

    //console.log(props.data.filter(item => item.status=="online").map(item => item.m_id))

    return (
        <div>
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">

                            <div className="main-body">
                                <div className="page-wrapper">

                                    <div className="row">

                                        <div className="col-md-6 col-xl-4">
                                            <div className="card daily-sales">
                                                <div className="card-block">
                                                    <h6 className="mb-4">Total Machines</h6>
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-9">
                                                            <h3 className="f-w-300 d-flex align-items-center m-b-0">{total_machine}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-md-6 col-xl-4">
                                            <div className="card Monthly-sales">
                                                <div className="card-block">
                                                    <h6 className="mb-4">Total Machines Online</h6>
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-9">
                                                            <h3 className="f-w-300 d-flex align-items-center  m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i>{total_machine_online}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-md-12 col-xl-4">
                                            <div className="card yearly-sales">
                                                <div className="card-block">
                                                    <h6 className="mb-4">Total Machines Offline</h6>
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-9">
                                                            <h3 className="f-w-300 d-flex align-items-center  m-b-0"><i className="feather icon-arrow-down text-c-red f-30 m-r-10"></i>{total_machine_offline}</h3>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-xl-12 col-md-6">
                                            <div className="card Recent-Users">
                                                <div className="card-header">
                                                    <h5>Machine Status</h5>
                                                </div>
                                                <div className="card-block px-0 py-3">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover">
                                                            <tbody>
                                                                {props.data.map(item => (
                                                                    <tr className="unread" key={item.m_id.toString()}>
                                                                        <td>
                                                                            <h6 className="mb-1">{item.m_id}</h6>
                                                                        </td>
                                                                        <td>
                                                                            {item.stats === "online" ? (
                                                                                <h6 className="text-muted"><i className="fas fa-circle text-c-green f-12 m-r-15"></i>{item.last_on}</h6>
                                                                            ) : (
                                                                                <h6 className="text-muted"><i className="fas fa-circle text-c-red f-12 m-r-15"></i>{item.last_on}</h6>
                                                                            )}
                                                                        </td>
                                                                        <td>
                                                                            <input className="input_box" type="number" id="weight" placeholder="Enter feed or temprature"></input>
                                                                            <button type="button" className="btn btn-outline-secondary" title="" data-toggle="tooltip" data-original-title="btn btn-outline-secondary">Set Feed</button>
                                                                            <button type="button" className="btn btn-outline-secondary" title="" data-toggle="tooltip" data-original-title="btn btn-outline-secondary">Set Temprature</button>
                                                                            <NavLink to={`/currentData/${item.m_id}`}>
                                                                                <button type="button" className="btn btn-outline-primary" title="" data-toggle="tooltip" data-original-title="btn btn-outline-primary">Current Data</button>
                                                                            </NavLink>
                                                                            <NavLink to={`/graphData/${item.m_id}`}>
                                                                                <button type="button" className="btn btn-outline-success" title="" data-toggle="tooltip" data-original-title="btn btn-outline-success">Graph Data</button>
                                                                            </NavLink>
                                                                        </td>
                                                                    </tr>
                                                                ))
                                                                }
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
    // <div className="dashboard">
    //     <div className="container">
    //         <div className="row">
    //         <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">

    //             <ul className="nav flex-column">
    //             <li className="nav-item">
    //                 <a className="nav-link active" aria-current="page" href="#">
    //                 <span data-feather="home" className="align-text-bottom"></span>
    //                 Dashboard
    //                 </a>
    //             </li>

    //             <li className="nav-item">
    //                 <a className="nav-link" href="#">
    //                 <span data-feather="bar-chart-2" className="align-text-bottom"></span>
    //                 Reports
    //                 </a>
    //             </li>
    //             </ul>
    //         </nav>
    //         <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    //             <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    //                 <h1 className="h2">Dashboard</h1>
    //             </div>
    //             <div className="row">
    //                 <div className="col-sm-4">
    //                     <div className="card text-bg-primary mb-3">
    //                     <div className="card-body">
    //                         <h5 className="card-title">Total machines:</h5>
    //                         <p className="card-text">{total_machine}</p>
    //                     </div>
    //                     </div>
    //                 </div>
    //                 <div className="col-sm-4">
    //                     <div className="card text-bg-primary mb-3">
    //                     <div className="card-body">
    //                         <h5 className="card-title">Total machines online:</h5>
    //                         <p className="card-text">{total_machine_online}</p>
    //                     </div>
    //                     </div>
    //                 </div>
    //                 <div className="col-sm-4">
    //                     <div className="card text-bg-primary mb-3">
    //                     <div className="card-body">
    //                         <h5 className="card-title">Total machines offline:</h5>
    //                         <p className="card-text">{total_machine_offline}</p>
    //                     </div>
    //                     </div>
    //                 </div>
    //                 <div>
    //                 <label htmlFor="machine_id">Choose a Machine: </label><br></br>
    //                           <select id="machine_id" name="machine_id">
    //                               <option value="101">101</option>
    //                               <option value="102">102</option>
    //                           </select>
    //                 </div>
    //             </div>
    //             <br/>


    //         </main>

    //         </div>
    //         </div>
    //       </div>

}

export default Dashboard;