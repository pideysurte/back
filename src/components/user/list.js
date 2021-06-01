import React, {Component} from 'react'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import {sha256} from 'js-sha256';
import Const from '../utils/defaultConstant'
import MaterialTable from 'material-table';
import AlertGeneral from '../atoms/AlertGeneral'
import AlertConfirmation from '../atoms/AlertConfirm'
import {alertaGeneral,closeAlertGeneral,alertaConfirm} from '../../assets/js/GeneralScript'
import Roles from './Roles'
import InputCedis from '../atoms/InputCedis'
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
           var close = document.querySelector(".closeConfirm")
           var btnAlertConfirm = document.querySelector("#btnAlertConfirm")

           function formConfirmDelete() {
               var nid = document.getElementById("btnAlertConfirm").getAttribute("data-nid")
               if (nid >= 2) {
                   document.querySelector('#mggAlertConfirm').style.display = 'none'
                   formDelete(nid)
               }else{
                   alertaGeneral("Administrador no se puede eliminar ");
               }
           }
           if (el) {
               el.addEventListener("click", closeAlertGeneral);
           }
           if (close) {
               close.addEventListener("click", closeAlertGeneral);
           }
           if (btnAlertConfirm) {
               btnAlertConfirm.addEventListener("click", formConfirmDelete);
           }
            function formDelete(id) {
                if (id >= 1) {
                    var datos = {
                        id: id
                    }
                    fetch(Const.urlrest + "/api/useradmin/destroy", {
                        headers: Const.myHeaders,
                            method: "DELETE",
                            body: JSON.stringify(datos)
                        })
                        .then(response => response.json())
                        .then(
                            (result) => {
                                alertaGeneral("Registro  Eliminado");
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
            }
            function validarEmail(valor) {
                if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)) {
                    return 1
                } else {
                    alertaGeneral("La dirección de email es incorrecta!.");
                    return 0
                }
            }

            fetch(Const.urlrest +  "/api/useradmin?idCedi=0",{
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


            function updateForm() {
                var datos
                let id = document.getElementById("updid").value
                let name = document.getElementById("updname").value
                let emailAdmin = document.getElementById("updemailAdmin").value
                let password = document.getElementById("updpassword").value
                let valemail = validarEmail(emailAdmin)
                let access = []
                var checkboxes = document.querySelectorAll('.editaccess .checkmodulo:checked')

                for (var i = 0; i < checkboxes.length; i++) {
                    access.push(checkboxes[i].value)
                }
                if (valemail == "1") {
                    if (name.length >= 4) {
                        if (password.length >= 5 || password == "") {
                            if (password == "") {
                                 datos = {
                                    id: id,
                                    name: name,
                                    email: emailAdmin,
                                    access: JSON.stringify(access)
                                }
                            } else {
                                 datos = {
                                    id: id,
                                    name: name,
                                    email: emailAdmin,
                                    access: JSON.stringify(access),
                                    password: sha256(password)
                                }
                            }
                            fetch(Const.urlrest + "/api/useradmin/update", {
                                headers: Const.myHeaders,
                                    method: "PUT",
                                    body: JSON.stringify(datos)
                                })
                                .then(response => response.json())
                                .then(
                                    (result) => {
                                        alertaGeneral("Registro  Actualizado");
                                        window.scrollTo(0, 0);
                                        document.querySelector('.formupdate').style.display = 'none'
                                        document.getElementById("formularioupdate").reset();
                                    },
                                    (error) => {
                                        console.log(error)
                                    }
                                )
                        } else {
                            alertaGeneral("La contraseña es mínimo de 5 caracteres ");
                        }

                    } else {
                        alertaGeneral("Revisa todos los campos");
                    }
                } else {
                    alertaGeneral("Email Invalido");
                }
            }

            var el2 = document.getElementById('btnupdate');
            if (el2) {
                el2.addEventListener("click", updateForm);
            }
    }

    render() {

            function formEdit(id) {
                window.scrollTo(0, 0);
                document.querySelector('.formupdate').style.display = 'block'

                fetch(Const.urlrest + "/api/useradmin/read", {
                        headers: Const.myHeaders,
                        method: "POST",
                        body: JSON.stringify({
                            id: id
                        })
                    })
                    .then(response => response.json())
                    .then(
                        (response) => {
                            console.log(response)
                            document.getElementById("updid").value = response.data.id
                            document.getElementById("updname").value = response.data.name
                            document.getElementById("updemailAdmin").value = response.data.email
                            let access = JSON.parse(response.data.access)
                            
                            var checkboxes = document.querySelectorAll('.editaccess .checkmodulo')
                            for (var i = 0; i < checkboxes.length; i++) {
                                for (var j = 0; j < access.length; j++) {
                                    if (access[j] == checkboxes[i].value){
                                        checkboxes[i].checked = true;
                                    }                                   
                                }                                
                            }
                        },
                        (error) => {
                            this.setState({
                                isLoaded: true,
                                error
                            });
                        }
                    )
            }

     var permisos = []
     let access = JSON.parse(localStorage.getItem('access'))
     access.forEach(function (element) {
         if (element == 32) {
             permisos.push({
                 icon: 'edit',
                 iconProps: {
                     style: {
                         color: "#00569b"
                     }
                 },
                 tooltip: 'Edit',
                 onClick: (event, rowData) => formEdit(rowData.id)
             })
         }
         if (element == 33) {
             permisos.push({
                 icon: 'delete',
                 iconProps: {
                     style: {
                         color: "#ff5722"
                     }
                 },
                 tooltip: 'Delete User',
                 onClick: (event, rowData) => alertaConfirm(rowData.id)
             })
         }

     })


        const {
            items
        } = this.state;
        return ( 
<div>
                <Headerdashboard/>
                <Sidebar />  
                <AlertGeneral /> 
                <AlertConfirmation />
                    <div className="page-wrapper">
                        <div className="row page-titles">
                            <div className="col-md-12 align-self-center">
                                <h3 className="text-primary">Usuarios</h3> </div>
                            
                        </div>
                        <div  className="container-fluid formupdate"  id="formupdate">
                        <div  className="row">
                            <div  className="col-lg-12">
                                <div  className="card">
                                    <div  className="card-title">
                                        <h4>Actualizar </h4>
                                    </div>
                                    <div  className="card-body">
                                        <div  className="horizontal-form">
                                            <div  className="form-horizontal" id="formcreate" >
                                                <form id="formularioupdate">
                                                    <input type="hidden"  className="form-control" placeholder="" name="name" id="updid" required="required"  maxlength="30" />
                                                    <InputCedis />
                                                <div className="row p-t-20">
                                                    <div className="col-md-4">
                                                        <div  className="form-group">                                                    
                                                            <label  className=" control-label">Nombre </label>
                                                            
                                                                <input type="text"  className="form-control" placeholder="" name="name" id="updname" required="required"  maxlength="30" />
                                                            
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className=" control-label">Email  </label>
                                                            <input type="email" className="form-control" placeholder=""  id="updemailAdmin" required="required"  maxlength="50" />
                                                        
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className=" control-label">Password</label>
                                                            <input type="password" className="form-control" placeholder="********"
                                                                id="updpassword" required="required" />
                                                        </div>
                                                    </div>
                                                </div>  
                                                 <div className=" editaccess"> 
                                                <div className="row p-t-20">
                                                            <Roles />
                                                </div>
                                                </div>                                               
                                                <div  className="form-group">
                                                    <div  className="col-sm-offset-2 col-sm-10">
                                                        <button type="button"  className="btn btn-default btnupdate" id="btnupdate">Actualizar</button>
                                                    </div>
                                                </div>
                                            </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                           
                                        
                                            <div className="table-responsive m-t-40">
                                                                                                 
                                            <MaterialTable
                                                    title="Datos"
                                                    columns={[
                                                        { title: 'Id', field: 'id' },
                                                        { title: 'Nombre', field: 'name' },
                                                        { title: 'Email', field: 'email' }
                                                    ]}
                                                    data = {
                                                        items
                                                    }
                                                    options={{
                                                        //exportButton: true,
                                                        headerStyle: {
                                                            backgroundColor: '#251972',
                                                            color: '#FFF'
                                                        },
                                                        actionsColumnIndex: -1,
                                                        filtering: true,
                                                        search: false
                                                    }}
                                                    actions={permisos}
                                                    />
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