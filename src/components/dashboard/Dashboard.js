import React from 'react';
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'

document.body.classList.add('fix-sidebar');

function Dashboard(props) {
 
  return (
    <div>
      <Headerdashboard/>
      <Sidebar />
      <div  className="page-wrapper">
                    <div  className="row page-titles">
                        <div  className="col-md-8 align-self-center">
                            <h3  className="text-primary">Escritorio</h3>
                        </div>
                        <div  className="col-md-4 align-self-center">
                            <ol  className="breadcrumb">
                                < li className = "breadcrumb-item" > < a href="./dashboard" > Home </a></li >
                                <li  className="breadcrumb-item active">Escritorio</li>
                            </ol>
                        </div>
                    </div>
                    <div  className="container-fluid homeicons">
                        <div  className="row">
                            <div  className="col-md-3">
                                <div  className="card p-30">
                                    <div  className="media">
                                        <div  className="media-left meida media-middle">
                                            <span><i  className="fa  fa-dollar-sign f-s-40 color-primary"></i></span>
                                        </div>
                                        <div  className="media-body media-text-right">
                                            <h2>0</h2>
                                            <p  className="m-b-0"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="col-md-3">
                                <div  className="card p-30">
                                    <div  className="media">
                                        <div  className="media-left meida media-middle">
                                            <span><i  className="fa fa-shopping-cart f-s-40 color-success"></i></span>
                                        </div>
                                        <div  className="media-body media-text-right">
                                            <h2>0</h2>
                                            <p  className="m-b-0"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="col-md-3">
                                <div  className="card p-30">
                                    <div  className="media">
                                        <div  className="media-left meida media-middle">
                                            <span><i  className="fa fa-archive f-s-40 color-warning"></i></span>
                                        </div>
                                        <div  className="media-body media-text-right">
                                            <h2>0</h2>
                                            <p  className="m-b-0"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="col-md-3">
                                <div  className="card p-30">
                                    <div  className="media">
                                        <div  className="media-left meida media-middle">
                                            <span><i  className="fa fa-user f-s-40 color-danger"></i></span>
                                        </div>
                                        <div  className="media-body media-text-right">
                                            <h2>2</h2>
                                            <p  className="m-b-0"></p>
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

export default Dashboard;
