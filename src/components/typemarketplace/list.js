import React, {Component} from 'react'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Const from '../utils/defaultConstant'
import $ from 'jquery';
import MaterialTable from 'material-table';
import AlertGeneral from '../atoms/AlertGeneral'
import AlertConfirmation from '../atoms/AlertConfirm'
import {alertaGeneral,closeAlertGeneral,alertaConfirm} from '../../assets/js/GeneralScript'
document.body.classList.add('fix-sidebar');
//import { getUser, removeUserSession } from '../../Utils/Common';

class typemarketplace extends Component {
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
            if (nid >= 1) {
                document.querySelector('#mggAlertConfirm').style.display = 'none'
                formDelete(nid)
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
                fetch(Const.urlrest + "/api/typemarketplace/destroy", {
                    headers: Const.myHeaders,
                        method: "DELETE",
                        body: JSON.stringify(datos)
                    })
                    .then(response => response.json())
                    .then(
                        (result) => {
                            if(result.data == "1"){
                                alertaGeneral("Registro  Eliminado");
                                window.location.reload(false);
                            }else{
                                alertaGeneral("No se puede eliminar"); 
                            } 
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
        fetch(Const.urlrest + "/api/typemarketplace",{
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
            $(document).off().on('click', '.btnupdate', function () {
                let id = $("#updid").val();
                let name = $("#updname").val();
                let idCedi = $("#formupdate #updcedis").val();
                if (name.length >= 4) {
                    var datos = {
                        id: id,
                        name: name,
                        idCedi: idCedi
                    }
                    fetch(Const.urlrest + "/api/typemarketplace/update", {
                        headers: Const.myHeaders,
                            method: "PUT",
                            body: JSON.stringify(datos)
                        })
                        .then(response => response.json())
                        .then(
                            (result) => {
                                console.log(result)
                                alertaGeneral("Registro  Actualizado");
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
            })
    }

    render() {

        function formEdit(id) {
           window.scrollTo(0, 0);
           document.querySelector('.formupdate').style.display = 'block'
            fetch(Const.urlrest + "/api/typemarketplace/read", {
                headers: Const.myHeaders,
                    method: "POST",
                    body: JSON.stringify({
                        id: id
                    })
                })
                .then(response => response.json())
                .then(
                    (result) => {
                        console.log(result)
                        $("#updid").val(result.data.id)
                        $("#updname").val(result.data.name)
                        $('#formupdate #updcedis  option[value="' + result.data.idCedi + '"]').attr("selected", "selected");

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
    if (element == 8) {
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
    if (element == 9) {
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
                                <h3 className="text-primary">Tipos de marketplace</h3> </div>
                            
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
                                                <div  className="form-group">
                                                    <input type="hidden"  className="form-control" placeholder="" name="name" id="updid" required="required"  maxlength="30" />
                                                    <label  className="col-sm-2 control-label">Nombre </label>
                                                    <div  className="col-sm-4">
                                                        <input type="text"  className="form-control" placeholder="" name="name" id="updname" required="required"  maxlength="30" />
                                                    </div>
                                                </div>
                                                <div  className="form-group">
                                                    <div  className="col-sm-offset-2 col-sm-10">
                                                        <button type="button"  className="btn btn-default btnupdate" >Actualizar</button>
                                                    </div>
                                                </div>
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
                                                        { title: 'Nombre', field: 'name' }
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
                                                    <div  className="col-sm-10">
                                                        <input type="text"  className="form-control" placeholder="" onKeyUp={this.handleLoginKeyUp} name="name" id="b2bname" required="required"  maxlength="30" />
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


export default typemarketplace;