import React, {Component} from 'react'
import InputMarketplaceAso from '../atoms/InputMarketplaceAso'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Const from '../utils/defaultConstant'
import AlertGeneral from '../atoms/AlertGeneral'
import {alertaGeneral,closeAlertGeneral} from '../../assets/js/GeneralScript'
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
            if (el) {
                el.addEventListener("click", closeAlertGeneral);
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
            const selectElement = document.querySelector('#updimg');
            selectElement.addEventListener('change', (event) => {
                var sizeByte = selectElement.files[0].size;
                if (sizeByte >= 500000) {
                    alertaGeneral("La imagen supera los 500Kb permitidos")
                }
                const resultado = document.querySelector('.resultado');
                resultado.textContent = `Peso de la imagen  ${sizeByte} kb`;
            });
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
           /* let weight = document.querySelector("#updweight").value
            let width = document.querySelector("#updwidth").value
            let height = document.querySelector("#updheight").value*/
            let description = document.querySelector("#upddescription").value
            let idMarketplace = document.querySelector("#formupdate #updidmarketplaceaso").value
                if (valUrl) {
                    if (description.length >= 5 && schedule.length >= 4 &&  idMarketplace.length >= 1) {
                        const data = new FormData(document.getElementById('formularioupdate'))
                        fetch(Const.urlrest + "/api/advertisingmarket/update", {
                                method: "PUT",
                                headers: Const.myHeaders,
                                body: data
                            })
                            .then(response => response.json())
                            .then(
                                (result) => {
                                    console.log(result)
                                    alertaGeneral("Registro  Actualizado");
                                    document.querySelector('.formupdate').style.display = 'none'
                                    document.getElementById("formularioupdate").reset();
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

        function addForm(){
                let valUrl = validURL(document.querySelector("#updlink").value)
                let schedule = document.querySelector("#updschedule").value
                let img = document.querySelector("#updimg").value
                let idMarketplace = document.querySelector("#updidmarketplaceaso").value
                if(img !=""){
                    if (valUrl) {
                        if (schedule.length >= 4  && idMarketplace.length >= 1) {
                            const data = new FormData(document.getElementById('formulario'))
                    
                            fetch(Const.urlrest + "/api/advertisingmarket", {
                                    method: "POST",
                                    headers: Const.myHeaders,
                                    body: data
                                })
                                .then(response => response.json())
                                .then(
                                    (result) => {   
                                        console.log(result)                                 
                                    alertaGeneral("Registro Ingresado");
                                    //   window.scrollTo(0, 0);
                                    //   document.getElementById("formulario").reset();
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
                } else {
                    alertaGeneral("EL campo imagen es obligatorio");
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
      
      return (          
            <div>
                <Headerdashboard/>
                <Sidebar />  
                <AlertGeneral /> 
                    <div className="page-wrapper">
                        <div className="row page-titles">
                            <div className="col-md-12 align-self-center">
                                <h3 className="text-primary">Publicidad Asociativos</h3> </div>
                            
                        </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-title">
                                        <h4>Crear </h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="horizontal-form">
                                            <div className="form-horizontal" id="formcreate" >
                                            <form id="formulario">
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
                                                                        <input type="file" className="form-control" placeholder="" name="img" id="updimg" required="required"  />
                                                                        <label className="resultado"></label>
                                                                    </div>
                                                                </div> 
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Descripción Imagen</label>                                                                
                                                                        <input type="text" className="form-control" maxLength="60" name="imgDescription" id="updlink" required="required"  />                                                             
                                                                        <label class="msglabel">Mínimo 60 caracteres</label>
                                                                    </div>
                                                                </div> 
                                                </div>
                                                
                                                <div className="row p-t-20">                                                
                                                              <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Descripción Campaña </label>                                                                
                                                                        <textarea className="form-control" placeholder="" name="description" id="upddescription" ></textarea>                                                             
                                                                       
                                                                    </div>
                                                                </div>
                                                </div>

                                                <div className="form-group">
                                                </div>
                                            </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="button" className="btn btn-default btnadd" id="btncreate">Ingresar</button>
                    </div>   
                </div>
            </div>
      )
  }
}

export default advertisingmarket;