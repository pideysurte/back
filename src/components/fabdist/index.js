import React, {Component} from 'react'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import $ from 'jquery';
import langEs from '../utils/langEs'
import Const from '../utils/defaultConstant'
import InputTypeDocument from '../atoms/InputTypeDocument'
import InputStatus from '../atoms/InputStatus'
import AlertGeneral from '../atoms/AlertGeneral'
import {alertaGeneral,closeAlertGeneral} from '../../assets/js/GeneralScript'
document.body.classList.add('fix-sidebar');

class Cedis extends Component {
    componentDidMount() {
                    var el = document.getElementById('mggAlert');
                    if (el) {
                        el.addEventListener("click", closeAlertGeneral);
                    }
            function createForm(){
                let name = $("#updname").val()
                let contractor = $("#updcontractor").val()
                let address = $("#updaddress").val()
                let numberDocument = $("#updnumberDocument").val()
                let phoneContractor = $("#updphoneContractor").val()
                let note = $("#updnote").val()
                if (name.length >= 4 && contractor.length >= 4 && numberDocument.length >= 6 && address.length >= 6 && contractor.length >= 4 && phoneContractor.length >= 7 ) {
                    var datos = {
                        name: name,
                        contractor: $("#updcontractor").val(),
                        numberDocument: $("#updnumberDocument").val(),
                        address: $("#updaddress").val(),
                        phoneContractor: $("#updphoneContractor").val(),
                        note: $("#updnote").val(),
                        status: $('#updstatus').val(),
                        typeDocument: $("#updtypeDocument").val()
                    }
                    fetch(Const.urlrest + "/api/fabdist", {
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
                     alertaGeneral("Por favor valida la información todos los campos son obligatorios");
                }
            }
            document.getElementById("btnupdate").addEventListener("click", createForm);
    }
  render(){



      return (
            <div>
            <Headerdashboard/>
            <Sidebar />
            <AlertGeneral /> 
                <div className="page-wrapper">
                    <div className="row page-titles">
                        <div className="col-md-12 align-self-center">
                           <h3 className="text-primary">Fabricantes distribuidor </h3> </div>
                        
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
                                               <div className="row p-t-20">
                                                   <InputStatus />
                                               
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label className=" control-label">Nombre </label>
                                                        <input type="text" className="form-control" placeholder=""  id="updname" required="required"  maxlength="60" />
                                                      
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label className=" control-label">{langEs.CONTRATOR}</label>                                                        
                                                        <input type="text" className="form-control" placeholder=""  id="updcontractor" required="required"   />
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                                    <div className="row p-t-20">
                                                            <InputTypeDocument />
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                <label className=" control-label">{langEs.DOCUMENT_NUMBER} </label>
                                                                <input type="number" className="form-control" placeholder="" name="updnumberDocument" id="updnumberDocument" required="required"  maxlength="30" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label className=" control-label">{langEs.ADDRESS} </label>
                                                                    <input type="text" className="form-control" placeholder=""  id="updaddress" required="required"  maxlength="60" />
                                                                
                                                                </div>
                                                            </div>
                                                    </div> 
                                            <div className="row p-t-20">                                                
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className=" control-label">{langEs.PHONE_CONTRATOR}</label>                                                        
                                                            <input type="number" className="form-control" placeholder=""  id="updphoneContractor" required="required"   />
                                                            
                                                        </div>
                                                    </div>
                                                     <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className=" control-label">{langEs.NOTE}</label>
                                                            <textarea name="textTyc" id="updnote"></textarea>
                                                        </div>
                                                    </div>
                                                </div>  





                                                <div className="form-group">
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="button" id="btnupdate" className="btn btn-default btnadd">Ingresar</button>
                    </div>  

                </div>
            </div>
      )
  }
}

export default Cedis;