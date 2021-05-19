import React, {Component} from 'react'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Const from '../utils/defaultConstant'
import $ from 'jquery';
import AlertGeneral from '../atoms/AlertGeneral'
import {alertaGeneral,closeAlertGeneral} from '../../assets/js/GeneralScript'
document.body.classList.add('fix-sidebar');
//import { getUser, removeUserSession } from '../../Utils/Common';

class typedocument extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
            var el = document.getElementById('mggAlert');
            if (el) {
                el.addEventListener("click", closeAlertGeneral);
            }
        fetch(Const.urlrest + "/api/typedocument",{
            headers: Const.myHeaders,
        })
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
            $(document).on('click', '.btnadd', function () {
                let name = $("#b2bname").val();

                if (name.length >= 4) {
                    var datos = {
                        name: name
                    }
                    fetch(Const.urlrest + "/api/typedocument", {
                            headers: Const.myHeaders,
                            method: "POST",
                            body: JSON.stringify(datos)
                        })
                        .then(response => response.json())
                        .then(
                            (result) => {
                                console.log(result)
                                alertaGeneral("Registro Ingresado");
                                window.location.reload(false);
                            },
                            (error) => {
                                this.setState({
                                    isLoaded: true,
                                    error
                                });
                            }
                        )
                } else {
                    alertaGeneral("Datos  incorrectos");
                }
            });
    }

    render() { 

        return ( 
<div>
                <Headerdashboard/>
                <Sidebar />  <AlertGeneral /> 
                    <div className="page-wrapper">
                        <div className="row page-titles">
                            <div className="col-md-12 align-self-center">
                                <h3 className="text-primary">Tipos de documento</h3> </div>
                            
                        </div>
                <div  className="container-fluid">
                        <div  className="row">
                            <div  className="col-lg-12">
                                <div  className="card">
                                    <div  className="card-title">
                                        <h4>Crear </h4>
                                    </div>
                                    <div  className="card-body">
                                        <div  className="horizontal-form">
                                            <div  className="form-horizontal" id="formcreate" >
                                                <div  className="form-group">
                                                    <label  className="col-sm-2 control-label">Nombre </label>
                                                    <div  className="col-sm-4">
                                                        <input type="text"  className="form-control" placeholder="" name="name" id="b2bname" required="required"  maxlength="30" />
                                                    </div>
                                                </div>
                                                <div  className="form-group">
                                                    <div  className="col-sm-offset-2 col-sm-10">
                                                        <button type="button"  className="btn btn-default btnadd">Ingresar</button>
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
}


export default typedocument;