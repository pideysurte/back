import React, {Component} from 'react'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import {sha256} from 'js-sha256';
import Const from '../utils/defaultConstant'
import AlertGeneral from '../atoms/AlertGeneral'
import InputCedis from '../atoms/InputCedis'

import Roles from './Roles'
import {alertaGeneral,closeAlertGeneral} from '../../assets/js/GeneralScript'
document.body.classList.add('fix-sidebar');

class useradmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }

    }

    componentDidMount() {
                    var el = document.getElementById('mggAlert');
                    if (el) {
                        el.addEventListener("click", closeAlertGeneral);
                    }
            function validarEmail(valor) {
                if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)) {
                    return 1
                } else {
                    alertaGeneral("La dirección de email es incorrecta!.");
                    return 0
                }
            }
            fetch(Const.urlrest + "/api/useradmin",{
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
            function createForm() {
                let name = document.getElementById("crename").value
                let emailAdmin = document.getElementById("creemailAdmin").value
                let password = document.getElementById("crepassword").value
                let valemail = validarEmail(emailAdmin)
                let access = []
                var checkboxes = document.querySelectorAll('.createaccess .checkmodulo:checked')
                for (var i = 0; i < checkboxes.length; i++) {
                    access.push(checkboxes[i].value)
                }
                if (valemail == "1") {
                    if (name.length >= 4) {
                        if (password.length >= 5) {
                            var datos = {
                                name: name,
                                email: emailAdmin,
                                access: JSON.stringify(access),
                                password: sha256(password)
                            }

                            fetch(Const.urlrest + "/api/useradmin", {
                                    headers: Const.myHeaders,
                                    method: "POST",
                                    body: JSON.stringify(datos)
                                })
                                .then(response => response.json())
                                .then(
                                    (result) => {
                                        if (result.code != "403") {
                                            alertaGeneral("Registro  Actualizado");
                                            window.location.reload(false);
                                        } else {
                                            alertaGeneral("usuario ya existe");
                                        }

                                    },
                                    (error) => {
                                        console.log(error)
                                    }
                                )
                        } else {
                           alertaGeneral("Contraseña mínimo 5 caracteres");
                        }
                    } else {
                        alertaGeneral("Nombre muy corto");
                    }
                } else {
                    alertaGeneral("Email Invalido");
                }
            }

            var el = document.getElementById('btnadd');
            if (el) {
                el.addEventListener("click", createForm);
            }

    }

    render() {

        return ( 
        <div>
                <Headerdashboard/>
                <Sidebar />  <AlertGeneral /> 
                    <div className="page-wrapper">
                        <div className="row page-titles">
                            <div className="col-md-12 align-self-center">
                                <h3 className="text-primary">Usuarios</h3> </div>
                        </div>
                        <div  className="container-fluid">
                            <div  className="row">
                                <div  className="col-lg-12">
                                    <div  className="card">
                                        <div  className="card-title">
                                            <h4>Crear </h4>
                                        </div>
                                        <InputCedis />
                                        <div  className="card-body">
                                            <div  className="horizontal-form">
                                                <div  className="form-horizontal" id="formcreate" >
                                                    <div className="row p-t-20">
                                                        <div  className="col-sm-4">
                                                            <div  className="form-group">
                                                                <label  className=" control-label">Nombre </label>
                                                                <input type="text"  className="form-control" placeholder="" onKeyUp={this.handleLoginKeyUp} name="name" id="crename" required="required"  maxlength="30" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label className=" control-label">Email  </label>
                                                                <input type="email" className="form-control" placeholder=""  id="creemailAdmin" required="required"  maxlength="50" />
                                                            
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label className=" control-label">Password</label>
                                                                <input type="password" className="form-control" placeholder="********"
                                                                    id="crepassword" required="required" />
                                                            </div>
                                                        </div>
                                                    </div>  
                                                    <div className="createaccess"> 
                                                        <div className="row p-t-20">
                                                            <Roles />
                                                         </div>     
                                                    </div> 
                                                    <div  className="form-group">
                                                        <div  className="col-sm-offset-2 col-sm-10">
                                                            <button type="button"  className="btn btn-default btnadd" id="btnadd">Ingresar</button>
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


export default useradmin;