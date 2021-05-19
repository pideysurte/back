import React, {Component} from 'react'
import $ from 'jquery';
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import InputMarketplaceAso from '../atoms/InputMarketplaceAso'
import Const from '../utils/defaultConstant'
import AlertGeneral from '../atoms/AlertGeneral'
import AlertConfirmation from '../atoms/AlertConfirm'
import {alertaGeneral,closeAlertGeneral,alertaConfirm} from '../../assets/js/GeneralScript'
import MaterialTable from 'material-table';
document.body.classList.add('fix-sidebar');
class advertisingmarket extends Component {
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
                    if ( nid>=1){
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
                        fetch(Const.urlrest + "/api/advertisingmarket/destroy", {
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
                function validURL(str) {
                    var pattern = new RegExp('^(https?:\\/\\/)?' +
                        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                        '((\\d{1,3}\\.){3}\\d{1,3}))' +
                        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                        '(\\?[;&a-z\\d%_.~+=-]*)?' +
                        '(\\#[-a-z\\d_]*)?$', 'i');
                    return !!pattern.test(str);
                }

               fetch(Const.urlrest + "/api/advertisingmarket",{
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
/*
            const selectElement = document.querySelector('#creimg');
            selectElement.addEventListener('change', (event) => {
                var sizeByte = selectElement.files[0].size;
                if (sizeByte >= 500000) {
                    alertaGeneral("La imagen supera los 500Kb permitidos")
                }
                const resultado = document.querySelector('.resultado');
                resultado.textContent = `Peso de la imagen  ${sizeByte} kb`;
            })
*/

            var dtToday = new Date();
            var month = dtToday.getMonth() + 1;
            var day = dtToday.getDate();
            var year = dtToday.getFullYear();
            if (month < 10)
                month = '0' + month.toString();
            if (day < 10)
                day = '0' + day.toString();
            var minDate = year + '-' + month + '-' + day;
            var creschedule = document.getElementById('updschedule');
            creschedule.setAttribute("min", minDate);

        function updateForm() {
            let valUrl = validURL(document.querySelector("#updlink").value)
            let schedule = document.querySelector("#updschedule").value

            let description = document.querySelector("#upddescription").value
            let idMarketplace = document.querySelector("#formupdate #updidmarketplaceaso").value
                if (valUrl) {
                    if (description.length >= 5 && schedule.length >= 4  && idMarketplace.length >= 1) {
                        const data = new FormData(document.getElementById('formularioupdate'))
                      
                        fetch(Const.urlrest + "/api/advertisingmarket/update", {
                                method: "PUT",
                                headers: Const.myHeadersPost,
                                body: data
                            })
                            .then(response => response.json())
                            .then(
                                (result) => {
                                   alertaGeneral("Registro  Actualizado");
                                    document.querySelector('.formupdate').style.display = 'none'
                                    document.getElementById("formularioupdate").reset();
                                },
                                (error) => {
                                    alertaGeneral("Revisar conexión");
                                }
                            )
                    } else {
                        alertaGeneral("Revisa los campos, todos son obligatorios");
                    }
            } else {
                alertaGeneral("EL campo link debe ser una url correcta");
            }
        }

        function addForm(){
                let valUrl = validURL(document.querySelector("#updlink").value)
                let schedule = document.querySelector("#updschedule").value   
                let idMarketplace = document.querySelector("#formupdate #updidmarketplaceaso").value
                if (valUrl) {
                    if (schedule.length >= 4  && idMarketplace.length >= 1) {
                        const data = new FormData(document.getElementById('formulario'))
                        console.log(data)
                        fetch(Const.urlrest + "/api/advertisingmarket", {
                                method: "POST",
                                headers: Const.myHeaders,
                                body: data
                            })
                            .then(response => response.json())
                            .then(
                                (result) => {                                    
                                    alertaGeneral("Registro Ingresado");
                                    window.scrollTo(0, 0);
                                    document.getElementById("formulario").reset();
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
                        alertaGeneral("Revisa los campos, todos son obligatorios");
                    }
            } else {
                alertaGeneral("EL campo link debe ser una url correcta");
            }
        }
        
            var elupd = document.getElementById('btnupdate');
            if (elupd) {
                elupd.addEventListener("click", updateForm);
            }
            var elcre = document.getElementById('btncreate');
            if (elcre) {
                elcre.addEventListener("click", addForm);
            }  
    }

    render() {  
        


        function formEdit(id) {
            window.scrollTo(0, 0);
            document.querySelector('.formupdate').style.display = 'block'
            fetch(Const.urlrest + "/api/advertisingmarket/read", {
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
                        document.getElementById("updid").value = result.data.id
                        document.getElementById("updlink").value = result.data.link
                        document.getElementById("updschedule").value = result.data.schedule
          
                        document.getElementById("imgshow").src = result.data.img
                        document.getElementById("upddescription").value = result.data.description
                        document.getElementById("updimgDescription").value = result.data.imgDescription
                        $("#updidmarketplaceaso option[value=" + result.data.idMarketplaceASo + "] ").attr('selected', 'selected');
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
    if (element == 23) {
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
    if (element == 24) {
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
    
      const { error, isLoaded, items } = this.state;
      return (          
            <div>
                <Headerdashboard/>
                <Sidebar />  
                <AlertGeneral /> 
                <AlertConfirmation />
                    <div className="page-wrapper">
                        <div className="row page-titles">
                            <div className="col-md-12 align-self-center">
                                <h3 className="text-primary">Publicidad Asociativos</h3> </div>
                            
                        </div>
                        <div className="container-fluid formupdate" id="formupdate">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-title">
                                            <h4>Actualizar </h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="horizontal-form">
                                                <div className="form-horizontal" id="formcreate" >
                                                    <form id="formularioupdate">
                                                    <input type="hidden" className="form-control" placeholder="" name="id" id="updid" required="required"   />
                                                        
                                                    
                                                    <div className="row p-t-20">
                                                                    <InputMarketplaceAso  />
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label className=" control-label">Link </label>                                                                
                                                                            <input type="text" className="form-control" placeholder="" name="link" id="updlink" required="required"  />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label className=" control-label">Fecha caducidad </label>                                                                
                                                                            <input type="date" className="form-control" placeholder="dd/mm/yyyy" name="schedule" id="updschedule" required="required"  />
                                                                        </div>
                                                                    </div>
                                                    </div>
                                                    <div className="row p-t-20">                                                                
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">Imagen </label>    
                                                                                <img src="" id="imgshow" height="50" />        
                                                                                <input type="file" className="form-control"  placeholder="" name="img" id="updimg" required="required"  />
                                                                            </div>
                                                                        </div> 
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">Descripción Imagen </label>                                                                
                                                                                <input type="text" className="form-control" maxLength="60" placeholder="" name="imgDescription" id="updimgDescription" required="required"  />                                                             
                                                                                <label class="msglabel">Mínimo 60 caracteres</label>
                                                                            </div>
                                                                        </div>  
                                                    </div>
                                                    
                                                <div className="row p-t-20">
                                                                <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <label className=" control-label">Descripción Campaña  </label>   
                                                                            <textarea className="form-control" placeholder="" name="description" id="upddescription" ></textarea>                                                             
                                                                        
                                                                        </div>
                                                                    </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="col-sm-offset-2 col-sm-10">
                                                            <button type="button" className="btn btn-default btnupdate" id="btnupdate">Actualizar</button>
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
                                                        { title: 'id', field: 'id' },                                                        
                                                        { title: 'Fecha caducidad', field: 'schedule' },
                                                        { title: 'Descripción', field: 'description' }
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

export default advertisingmarket;