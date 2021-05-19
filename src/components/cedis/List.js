import React, {Component} from 'react'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Const from '../utils/defaultConstant'
import MaterialTable from 'material-table';
import InputFabdist from '../atoms/InputFabdist'
import InputMarketplaceWhite from "../atoms/InputMarketplaceWhite";
import InputStatus from '../atoms/InputStatusCedis'
import InputMarketplaceAso from '../atoms/InputMarketplaceAso'
import langEs from '../utils/langEs'
import $ from 'jquery';
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

                function formDelete(id) {
                    if (id >= 1) {
                        var datos = {
                            id: id
                        }
                        fetch(Const.urlrest + "/api/cedi/destroy", {
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


                fetch(Const.urlrest + "/api/cedi",
                {
                   method: 'GET', 
                   headers: Const.myHeaders  
                })
                .then(response => response.json())
                .then(
                    (result) => {
                        console.log(result)
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
                function validURL(str) {
                    var pattern = new RegExp('^(https?:\\/\\/)?' +
                        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                        '((\\d{1,3}\\.){3}\\d{1,3}))' +
                        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                        '(\\?[;&a-z\\d%_.~+=-]*)?' +
                        '(\\#[-a-z\\d_]*)?$', 'i');
                    return !!pattern.test(str);
                }

                function validarEmail(valor) {
                    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)) {
                        return 1
                    } else {
                        alertaGeneral("La dirección de email es incorrecta!.");
                        return 0
                    }
                }

                function updateForm() {
                    let name = document.getElementById("updname").value;
                    let lat = document.getElementById("updlat").value;
                    let lng = document.getElementById("updlng").value;
                    let radio = parseInt(document.getElementById("updradio").value);
                    let weight = document.getElementById("updweight").value;
                    let width = document.getElementById("updwidth").value
                    let height = document.getElementById("updheight").value
                    let emailAdmin = document.getElementById("updemailAdmin").value
                    let emailServiceClient = document.getElementById("updemailServiceClient").value
                    let emailvalidoClient = validarEmail(emailServiceClient)
                    let emailvalidoAdmin = validarEmail(emailAdmin)
                    let description = document.getElementById("upddescription").value
                    let address = document.getElementById("updaddress").value
                    let color = document.getElementById("updcolor").value
                    let nameAdmin = document.getElementById("updnameAdmin").value
                    let phoneAdmin = document.getElementById("updphoneAdmin").value
                    let numbersImages = parseInt(document.getElementById("updnumbersImages").value)
                    let balanceNotifications = document.getElementById("updbalanceNotifications").value
                    let textTyc = document.getElementById("updtextTyc").value
                    let textPd = document.getElementById("updtextPd").value
                    let cediHide = document.getElementById("updcediHide").value
                    let slogan = document.getElementById("updslogan").value
                    if ($("#updidmarketplaceaso").val() >= 1 || $("#updmarketplace").val() >= 1) {
                            if (emailvalidoClient == "1" && emailvalidoAdmin == "1") {
                                if (lat != "" && lng != "" && radio >= 1) {  
                                    let social = []
                                    let error = 0;
                                    let coordinates = {
                                        'lat': lat,
                                        'lng': lng,
                                        'radio': radio
                                    }
                                    $(".urlsocial").each(function (index) {
                                        if (this.value != "") {
                                            let url = validURL(this.value)
                                            if (url) {
                                                social.push({
                                                    'name': this.id,
                                                    'url': this.value
                                                })
                                            } else {
                                                error = 1;
                                            }
                                        }
                                    })

                                    $("#updsocialRef").val(JSON.stringify(social))
                                    $("#updcoordinates").val(JSON.stringify(coordinates))
                                    if (name.length >= 4 &&
                                            description.length >= 5 &&
                                            address.length >= 5 &&
                                            nameAdmin.length >= 5 &&
                                            phoneAdmin.length >= 5 &&
                                            balanceNotifications.length >= 1 &&
                                            textTyc.length >= 5 &&
                                            numbersImages >= 1 &&
                                            textPd.length >= 1 &&
                                            cediHide.length >= 1 &&
                                            weight.length >= 1 &&
                                            width.length >= 1 &&
                                            height.length >= 1 &&
                                            slogan.length >= 4 &&
                                            color.length >=5
                                    ) {
                                        
                                        const data = new FormData(document.getElementById('formulario'));
                                        fetch(Const.urlrest + "/api/cedi/update", {
                                                method: "PUT",
                                                headers: Const.myHeadersPost,
                                                body: data
                                            })
                                            .then(response => response.json())
                                            .then(
                                                (result) => {
                                                    alertaGeneral("Registro  Actualizado");
                                                    window.scrollTo(0, 0);
                                                    document.querySelector('.formupdate').style.display = 'none'
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
                                    alertaGeneral("Revisa las coordenadas");
                                }
                            } else {
                                alertaGeneral("Por favor ingresa un email valido");
                            }
                        } else {
                            alertaGeneral("Es necesario ingresar si es asociativo o marca blanca");
                        }
                }
                var el2 = document.getElementById('btnupdate');
                if (el2) {
                    el2.addEventListener("click", updateForm);
                }
   }
  render(){
      
    

    function formEdit(id) {
        window.scrollTo(0, 0);
        document.querySelector('.formupdate').style.display = 'block'

        fetch(Const.urlrest + "/api/cedi/read", {
                headers: Const.myHeaders,
                method: "POST",
                body: JSON.stringify({
                    id: id
                })
            })
            .then(response => response.json())
            .then(
                (response) => {
                    document.getElementById("updid").value = response.data.id
                    document.getElementById("updname").value = response.data.name
                    document.getElementById("updcediHide").value = response.data.cediHide                    
                    document.getElementById("updusername").value = response.data.username
                    document.getElementById("updnameAdmin").value = response.data.nameAdmin
                    document.getElementById("updphoneAdmin").value = response.data.phoneAdmin
                    document.getElementById("updemailAdmin").value = response.data.emailAdmin
                    document.getElementById("updmethodEmail").value = response.data.methodEmail
                    document.getElementById("updnumbersImages").value = response.data.numbersImages
                    document.getElementById("updbalanceNotifications").value = response.data.balanceNotifications
                    document.getElementById("updtextTyc").value = response.data.textTyc
                    document.getElementById("updtextPd").value = response.data.textPd
                    document.getElementById("updemailServiceClient").value = response.data.emailServiceClient
                    document.getElementById("updwidth").value = response.data.width
                    document.getElementById("updheight").value = response.data.height
                    document.getElementById("updweight").value = response.data.weight
                    document.getElementById("updaddress").value = response.data.address
                    document.getElementById("upddescription").value = response.data.description
                    document.getElementById("updcolor").value = response.data.color
                    document.getElementById("updslogan").value = response.data.slogan
                    document.getElementById("imgshow").src = response.data.img
                    $("#updstatus option[value=" + response.data.status + "] ").attr('selected', 'selected');
                    $("#updmarketplace option[value=" + response.data.idMarketplace + "] ").attr('selected', 'selected');
                    $(
                      "#updidmarketplaceaso option[value=" +
                        response.data.idMarketplaceASo +
                        "] "
                    ).attr("selected", "selected");
                    $("#updidFabDist option[value=" + response.data.idFabDist + "] ").attr('selected', 'selected');
                    $("#updactCedi option[value=" + response.data.actCedi + "] ").attr('selected', 'selected');
                   
                    if (response.data.socialRef){
                        let socialRef = response.data.socialRef
                        socialRef.forEach(element => {
                            document.getElementById(element.name).value = element.url
                        })
                    }
                   
                    let coordenadas = JSON.parse(response.data.coordinates)
                    for (var clave in coordenadas) {
                        if (coordenadas.hasOwnProperty(clave)) {
                            document.getElementById("upd" + clave).value = coordenadas[clave]
                              console.log("La clave es " + clave + " y el valor es " + coordenadas[clave]);
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
    if (element == 29) {
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
    if (element == 30) {
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


            
      
      const { items } = this.state;
      return (          
            <div>
                <Headerdashboard/>
                <Sidebar />  
                <AlertGeneral /> 
                <AlertConfirmation />
                <div className="page-wrapper">
                    <div className="row page-titles">
                        <div className="col-md-12 align-self-center">
                            <h3 className="text-primary">Cedis</h3> </div>
                        
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
                                                            <form id="formulario">
                                                                <div className="form-group">
                                                                    <input type="hidden" className="form-control" placeholder=""  id="updid" required="required" name="id"  maxlength="30" />
                                                                    <input type="hidden" name="coordinates"  id="updcoordinates" />
                                                                    <input type="hidden" name="socialRef"   id="updsocialRef"  />                                   
                                                                    <div className="row p-t-20">
                                                                        <InputMarketplaceAso />
                                                                        <InputMarketplaceWhite />  
                                                                        <InputStatus />                                              
                                                                    </div>  
                                                                <div className="row p-t-20">                                                
                                                                        <div className="col-md-4">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">{langEs.ACTIVE_CEDI}</label>                                                        
                                                                                <select className="form-control" id="updactCedi" name="actCedi">      
                                                                                    <option value="1" >Activo</option>   
                                                                                    <option value="0" >Inactivo</option>                                                                        
                                                                                </select>   
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">{langEs.NAME} </label>
                                                                                <input type="text" className="form-control" placeholder="" name="name" id="updname" required="required"  maxlength="60" />
                                                                            
                                                                            </div>
                                                                        </div>
                                                                        <InputFabdist />
                                                                    </div> 
                                                                    <div className="row p-t-20">
                                                                        <div className="col-md-4">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">{langEs.ADDRESS} </label>                                                        
                                                                                <input type="text" className="form-control" placeholder="" name="address" id="updaddress" required="required"   />
                                                                                
                                                                            </div>
                                                                        </div>                                                
                                                                        <div className="col-md-4">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">{langEs.ACTIVE_DESCRIP}</label>                                                        
                                                                                <input type="text" className="form-control" placeholder="" name="description"  id="upddescription" required="required"   />
                                                                                
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">Slogan</label>                                                        
                                                                                <input type="text" className="form-control" placeholder="" name="slogan"  id="updslogan" required="required"   />
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>                                                                                        
                                                                    <div className="row p-t-20">
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">Color </label>                                                        
                                                                                <input type="text" className="form-control" placeholder="#000000" name="color" id="updcolor" required="required" maxLength="8"  />
                                                                                
                                                                            </div>
                                                                        </div>                                                
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">Logo</label> 
                                                                                <img src="" id="imgshow" height="50" />                                                        
                                                                                <input type="file" className="form-control" placeholder="" name="img" id="updimg" required="required"   />
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row p-t-20">
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">Nombre Administrador </label>
                                                                                <input type="text" className="form-control" placeholder="" name="nameAdmin" id="updnameAdmin" required="required"  maxlength="60" />
                                                                            
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">Teléfono Administrador</label>                                                        
                                                                                <input type="number" className="form-control" placeholder="" name="phoneAdmin" id="updphoneAdmin" required="required"   />
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row p-t-20">
                                                                        <div className="col-md-3">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">Email Administrador </label>
                                                                                <input type="email" className="form-control" placeholder="" name="emailAdmin"  id="updemailAdmin" required="required"  maxlength="60" />
                                                                            
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">Password</label>
                                                                                <input type="password" className="form-control" placeholder="******"
                                                                                    id="updpassword" required="required" name="password" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">Url cedi</label>
                                                                                <input type="text" className="form-control" placeholder=""
                                                                                    id="updusername" name="username" required="required" maxlength="30" disabled />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">Número de images</label>
                                                                                <input type="number" className="form-control" name="numbersImages" placeholder=""
                                                                                    id="updnumbersImages" required="required"
                                                                                    maxlength="1" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="contBlock">
                                                                            <div className="row p-t-20">
                                                                                <label className="col-md-6 control-label bold">Zona de atención del CEDI</label>
                                                                                <div className="separador"></div>
                                                                                
                                                                                <div className="col-md-4">
                                                                                    <div className="form-group">
                                                                                        <label className=" control-label">Latitud</label>
                                                                                        <input type="text" step="0.01" className="form-control control-coo" name="latitud" placeholder="Latitud"  id="updlat" required="required"  maxlength="30" />
                                                                                    
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-4">
                                                                                    <div className="form-group">
                                                                                        <label className=" control-label">Longitud</label>
                                                                                        <input type="text" step="0.01" className="form-control control-coo" name="longitud" placeholder="Longitud"  id="updlng" required="required"  maxlength="30" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-4">
                                                                                    <div className="form-group">
                                                                                        <label className=" control-label">Radio /metros</label>
                                                                                        <input type="number" step="0.01" className="form-control  control-radio" name="radio" placeholder="Radio"  id="updradio" required="required"  maxlength="30" />
                                                                                    </div>
                                                                                </div>                                                
                                                                            </div>
                                                                    </div>                                            
                                                                    <div className="row p-t-20">
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">Método de Entrega del pedido</label>
                                                                                    <select className="form-control" id="updmethodEmail" name="methodEmail">      
                                                                                        <option value="1" >Email</option>   
                                                                                        <option value="2" >Webservices</option>                                                                        
                                                                                    </select>   
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">Email servicio al Cliente</label>
                                                                                <input type="email" className="form-control" placeholder=""
                                                                                    id="updemailServiceClient" required="required" name="emailServiceClient"
                                                                                    maxlength="60" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row p-t-20">
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">Saldo Notificaciones</label>
                                                                                <input type="number" className="form-control" placeholder=""
                                                                                    id="updbalanceNotifications" required="required" name="balanceNotifications"
                                                                                    maxlength="3" />

                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">                                                        
                                                                                    <label className=" control-label">Texto oculto cedi</label>
                                                                                    <input type="text" className="form-control" placeholder=""
                                                                                    id="updcediHide" required="required" name="cediHide"
                                                                                    />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                        <div className="row p-t-20">
                                                                            <div className="col-md-12">
                                                                                <div className="form-group">
                                                                                    <label className=" control-label">Términos y condiciones</label>
                                                                                    <textarea name="textTyc" id="updtextTyc"></textarea>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12">
                                                                                <div className="form-group">
                                                                                    <label className=" control-label">Política de datos </label>
                                                                                    <textarea name="textPd" id="updtextPd"></textarea>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                                <div className="contBlock">
                                                                        <div className="row p-t-20">
                                                                                    <div className="col-md-12">
                                                                                        <label className=" control-label bold">Redes sociales </label>
                                                                                        <div className="form-group">                                                                    
                                                                                            <div className="groupInputSocial">
                                                                                                    <div className="row">
                                                                                                        <div className="col-md-4">
                                                                                                            <div className="form-group"> 
                                                                                                                <input type="text" className="form-control urlsocial" placeholder="Url Facebook" name="facebook"  id="facebook"  maxlength="120" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="col-md-4">
                                                                                                            <div className="form-group"> 
                                                                                                            <input type="text" className="form-control urlsocial" placeholder="Url Youtube"  name="youtube"  id="youtube"   maxlength="120" />
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        <div className="col-md-4">
                                                                                                            <div className="form-group"> 
                                                                                                        <input type="text" className="form-control urlsocial" placeholder="Url Instagram" name="instagram"  id="instagram" maxlength="120" />
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        <div className="col-md-4">
                                                                                                            <div className="form-group"> 
                                                                                                        <input type="text" className="form-control urlsocial" placeholder="Url Twitter"  name="twitter"  id="twitter"   maxlength="120" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="col-md-4">
                                                                                                            <div className="form-group"> 
                                                                                                        <input type="text" className="form-control urlsocial" placeholder="Url Linkedin"  name ="linkedin" id="linkedin"  maxlength="120" />
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        <div className="col-md-4">
                                                                                                            <div className="form-group"> 
                                                                                                                <input type="text" className="form-control urlsocial" placeholder="Url WhatsApp"  name="whatsapp"  id="whatsapp"  maxlength="120" />     
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                            </div> 
                                                                                        </div>
                                                                                    </div>
                                                                    </div> 
                                                                    </div>
                                                                    <div className="contBlock">
                                                                        <div className="row p-t-20">
                                                                            <label className=" col-md-6 control-label bold">Características de las fotos que puede subir el CEDI</label> 
                                                                                    <div className="separador"></div>
                                                                                    <div className="col-md-4">
                                                                                            <div className="form-group">
                                                                                                <label className=" control-label">Peso en kilobites</label>                                                                
                                                                                                <input type="number" className="form-control" placeholder="" name="weight" id="updweight" required="required"  />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <div className="form-group">
                                                                                                <label className=" control-label">Ancho en pixeles</label>                                                                
                                                                                                <input type="number" className="form-control" placeholder="" name="width" id="updwidth" required="required"  />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <div className="form-group">
                                                                                                <label className=" control-label">Alto pixeles </label>                                                                
                                                                                                <input type="number" className="form-control" placeholder="" name="height" id="updheight" required="required"  />
                                                                                            </div>
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