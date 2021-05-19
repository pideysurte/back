import React, {Component} from 'react'
import '../../assets/css/Admin.css'
import $ from 'jquery';
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import InputMarketplaceWhite from '../atoms/InputMarketplaceWhite'
import InputFabdist from '../atoms/InputFabdist'
import InputStatus from '../atoms/InputStatusCedis'
import InputMarketplaceAso from '../atoms/InputMarketplaceAso'
import Const from '../utils/defaultConstant'
import langEs from '../utils/langEs'
import AlertGeneral from '../atoms/AlertGeneral'
import {alertaGeneral,closeAlertGeneral} from '../../assets/js/GeneralScript'

document.body.classList.add('fix-sidebar');


class Cedis extends Component {
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

        function validarEmail(valor) {
            if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)) {
                return 1
            } else {
                alertaGeneral("La dirección de email es incorrecta!.");
                return 0
            }
        }

            $(document).on('click', '.btnupdate', function () {                
                let name = $("#updname").val();
                let lat = $("#updlat").val();
                let lng = $("#updlng").val();
                let radio =parseInt($("#updradio").val());
                let weight = $("#updweight").val()
                let width = $("#updwidth").val()
                let height = $("#updheight").val()
                let emailAdmin = $("#updemailAdmin").val()
                let emailServiceClient = $("#updemailServiceClient").val()
                let emailvalidoClient = validarEmail(emailServiceClient)
                let emailvalidoAdmin = validarEmail(emailAdmin)
                let description = $("#upddescription").val()
                let address = $("#updaddress").val()
                let color = $("#updcolor").val()
                let slogan = $("#updslogan").val()
                let nameAdmin = $("#updnameAdmin").val()
                let phoneAdmin = $("#updphoneAdmin").val()
                let password = $("#updpassword").val()
                let numbersImages = parseInt($("#updnumbersImages").val())
                let balanceNotifications = $("#updbalanceNotifications").val()
                let textTyc = $("#updtextTyc").val()
                let textPd = $("#updtextPd").val()
                let cediHide = $("#updcediHide").val()
                
                if ($("#updidmarketplaceaso").val() >= 1 || $("#updmarketplace").val() >= 1){
                    if ($("#updimg").val()!=""){                
                        if (password.length >= 5) {
                            if (emailvalidoClient == "1" &&
                                emailvalidoAdmin == "1") {
                                if (lat != "" && lng != "" && radio >= 1 ) {
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
                                        fetch(Const.urlrest + "/api/cedi/", {
                                                method: "POST",
                                                headers: Const.myHeadersPost,
                                                body: data
                                            })
                                            .then(response => response.json())
                                            .then(
                                                (result) => {
                                                    console.log(result)
                                                    if (result.data != null) {
                                                        alertaGeneral("Registro Ingresado");
                                                        document.getElementById("formulario").reset();
                                                    } else {
                                                        alertaGeneral("Verifica los campos");
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
                                        alertaGeneral("Revisa los campos, todos son obligatorios");
                                    }
                                } else {
                                    alertaGeneral("Revisa las coordenadas");
                                }
                            } else {
                                alertaGeneral("Por favor ingresa un email valido");
                            }
                        } else {
                            alertaGeneral("Por favor ingresa una contraseña con más de 5 caracteres");
                        }
                    } else {
                        alertaGeneral("la imagen del cedi es obligatoria");
                    }
                 } else {
                     alertaGeneral("Es necesario ingresar si es asociativo o marca blanca");
                 }
            });




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
                            <h3 className="text-primary">Cedis</h3> </div>
                        
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
                                        <div className="form-group">
                                            <input type="hidden" className="form-control" placeholder=""  id="updid" required="required" name="id"  maxlength="30" />
                                               <input type="hidden" name="coordinates"  id="updcoordinates" />
                                               <input type="hidden" name="socialRef"   id="updsocialRef"  />    
                                               <input type="hidden" name="username"    />                                
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
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label className=" control-label">Email Administrador </label>
                                                        <input type="email" className="form-control" placeholder="" name="emailAdmin"  id="updemailAdmin" required="required"  maxlength="60" />
                                                      
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label className=" control-label">Password</label>
                                                        <input type="password" className="form-control" placeholder="******"
                                                             id="updpassword" required="required" name="password" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
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
                                                                <input type="text" min="0" step="0.01" className="form-control control-coo" name="latitud" placeholder="Latitud"  id="updlat" required="required"  maxlength="30" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label className=" control-label">Longitud</label>
                                                                <input type="text" min="0" step="0.01" className="form-control control-coo" name="longitud" placeholder="Longitud"  id="updlng" required="required"  maxlength="30" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label className=" control-label">Radio /Metros</label>
                                                                <input type="number" className="form-control  control-radio" name="radio" placeholder="Radio"  id="updradio" required="required"  maxlength="30" />
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
                                                <button type="button" className="btn btn-default btnupdate"  id="btnupdate">Actualizar</button>
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

                </div>
            </div>
      )
  }
}

export default Cedis;