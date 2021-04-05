import React, {Component} from 'react'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import UpdateData from './updateData'
import Const from '../utils/defaultConstant'
import $ from 'jquery';
import MaterialTable from 'material-table';
import AlertGeneral from '../atoms/AlertGeneral'
import AlertConfirmation from '../atoms/AlertConfirm'
import {alertaGeneral,closeAlertGeneral,alertaConfirm} from '../../assets/js/GeneralScript'
document.body.classList.add('fix-sidebar');
class Category extends Component {
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
                    fetch(Const.urlrest + "/api/fabdist",{
                        headers: Const.myHeaders
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
                        function formDelete(id) {
                            if (id >= 1) {
                                var datos = {
                                    id: id
                                }
                                fetch(Const.urlrest + "/api/fabdist/destroy", {
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
    }
    render() {
            

            function formEdit(id) {
                window.scrollTo(0, 0);
                document.querySelector('.formupdate').style.display = 'block'
                fetch(Const.urlrest + "/api/fabdist/read", {
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
                            $("#updid").val(response.data.id)
                            $("#updname").val(response.data.name)
                            $("#updcontractor").val(response.data.contractor)
                            $("#updnumberDocument").val(response.data.numberDocument)
                            $("#updaddress").val(response.data.address)
                            $("#updphoneContractor").val(response.data.phoneContractor)
                            $("#updnote").val(response.data.note)
                            $("#updstatus option[value=" + response.data.status + "] ").attr('selected', 'selected');
                            $("#updtypeDocument option[value=" + response.data.typeDocument + "] ").attr('selected', 'selected');
                        
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
                    let name = $("#updname").val()
                    let contractor = $("#updcontractor").val()
                    let address = $("#updaddress").val()
                    let numberDocument = $("#updnumberDocument").val()
                    let phoneContractor = $("#updphoneContractor").val()
                    let note = $("#updnote").val()
                    if (name.length >= 4 && contractor.length >= 4 && numberDocument.length >= 6 && address.length >= 6 && contractor.length >= 4 && phoneContractor.length >= 7) {
                        var datos = {
                            id: id,
                            name: name,
                            contractor: $("#updcontractor").val(),
                            numberDocument: $("#updnumberDocument").val(),
                            address: $("#updaddress").val(),
                            phoneContractor: $("#updphoneContractor").val(),
                            note: note,
                            status: $('#updstatus').val(),
                            typeDocument: $("#updtypeDocument").val()

                        }

                        fetch(Const.urlrest + "/api/fabdist/update", {
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
                                   /// document.getElementById("formulario").reset();
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
                        alertaGeneral("Por favor valida la información todos los campos son obligatorios");
                    }
                })
            }
var permisos = []
let access = JSON.parse(localStorage.getItem('access'))
access.forEach(function (element) {
    if (element == 26) {
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
    if (element == 27) {
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
      const {  items } = this.state;
      return (          
            <div>
                <Headerdashboard/>
                <Sidebar />  
                <AlertGeneral /> 
                <AlertConfirmation />
                <div className="page-wrapper">
                    <div className="row page-titles">
                        <div className="col-md-12 align-self-center">
                            <h3 className="text-primary">Fabricante distribuidor</h3> 
                        </div>                        
                    </div>
                     <UpdateData />
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
                                                        { title: 'Estado', field: 'b2bStatus.name' },
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
              

                </div>
            </div>
      )
  }
}

export default Category;