import React, {Component} from 'react'
import InputFabdist from '../atoms/InputFabdist'
import InputMarketplace from '../atoms/InputMarketplace'
import InputStatus from '../atoms/InputStatus'
import InputMarketplaceAso from '../atoms/InputMarketplaceAso'
import langEs from '../utils/langEs'
class updateData extends Component {
    render(){
        return  (
            <React.Fragment>                   
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
                                                <input type="hidden" className="form-control" placeholder="" name="name" id="updid" required="required"   />
                                              <div className="row p-t-20">
                                                <InputMarketplaceAso />
                                                <InputMarketplace />                                                
                                            </div>  
                                           <div className="row p-t-20">
                                                <InputStatus />
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className=" control-label">{langEs.ACTIVE_CEDI}</label>                                                        
                                                        <select className="form-control" id="updactCedi">      
                                                            <option value="1" >Activo</option>   
                                                            <option value="0" >Inactivo</option>                                                                        
                                                        </select>   
                                                    </div>
                                                </div>
                                            </div>                                                  
                                               
                                                <div className="row p-t-20">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className=" control-label">{langEs.ADDRESS} </label>                                                        
                                                                <input type="text" className="form-control" placeholder=""  id="updaddress" required="required"   />
                                                                
                                                            </div>
                                                        </div>
                                                        <InputFabdist />
                                                    </div>                                             
                                                    <div className="row p-t-20">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className=" control-label">{langEs.NAME}  </label>
                                                                <input type="text" className="form-control" placeholder=""  id="updname" required="required"  maxlength="30" />
                                                            
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className=" control-label">{langEs.ACTIVE_DESCRIP}</label>                                                        
                                                                <input type="text" className="form-control" placeholder=""  id="upddescription" required="required"   />
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row p-t-20">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className=" control-label">Nombre Administrador </label>
                                                                <input type="text" className="form-control" placeholder=""  id="updnameAdmin" required="required"  maxlength="30" />
                                                            
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className=" control-label">Teléfono Administrador</label>                                                        
                                                                <input type="text" className="form-control" placeholder=""  id="updphoneAdmin" required="required"   />
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row p-t-20">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className=" control-label">Email Administrador </label>
                                                                <input type="email" className="form-control" placeholder=""  id="updemailAdmin" required="required"  maxlength="30" />
                                                            
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                             <label className=" control-label">Número de images</label>
                                                                <input type="number" className="form-control" placeholder=""
                                                                    id="updnumbersImages" required="required"
                                                                    maxlength="1" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row p-t-20">
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label className=" control-label">Latitud</label>
                                                                <input type="text" className="form-control control-coo" placeholder="Latitud"  id="updlat" required="required"  maxlength="30" />
                                                               
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                               <label className=" control-label">Longitud</label>
                                                                <input type="text" className="form-control control-coo" placeholder="Longitud"  id="updlng" required="required"  maxlength="30" />
                                                               
                                                              
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                               <label className=" control-label">Radio /km</label>
                                                                <input type="text" className="form-control  control-radio" placeholder="Radio"  id="updradio" required="required"  maxlength="30" />
                                                            
                                                            </div>
                                                        </div>                                                        
                                                    </div>
                                                    <div className="row p-t-20">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className=" control-label">Método de Entrega del pedido</label>
                                                                <select className="form-control" id="updmethodEmail">      
                                                                    <option value="1" >Email</option>   
                                                                    <option value="2" >Webservices</option>                                                                        
                                                                </select>  

                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className=" control-label">Email servicio al Cliente</label>
                                                                <input type="email" className="form-control" placeholder=""
                                                                    id="updemailServiceClient" required="required"
                                                                    maxlength="50" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row p-t-20">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className=" control-label">Notificaciones</label>
                                                                <input type="text" className="form-control" placeholder=""
                                                                    id="updbalanceNotifications" required="required"
                                                                    maxlength="30" value="" />

                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">                                                                
                                                                    <label className=" control-label">Texto oculto cedi</label>
                                                                    <select className="form-control" id="updcediHide">      
                                                                        <option value="1" >Activo</option>   
                                                                        <option value="0" >Inactivo</option>                                                                        
                                                                    </select> 
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
                                                        <div className="row p-t-20">
                                                                        <div className="col-md-4">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">Peso en kilobites </label>                                                                
                                                                                <input type="number" className="form-control" placeholder="" name="name" id="updweight" required="required"  />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">Ancho en pixeles </label>                                                                
                                                                                <input type="number" className="form-control" placeholder="" name="name" id="updwidth" required="required"  />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <div className="form-group">
                                                                                <label className=" control-label">Alto en pixeles </label>                                                                
                                                                                <input type="number" className="form-control" placeholder="" name="name" id="updheight" required="required"  />
                                                                            </div>
                                                                        </div>
                                                        </div>


                                                <div className="form-group">
                                                    <div className="col-sm-offset-2 col-sm-10">
                                                        <button type="button" id="btnupdate" className="btn btn-default btnupdate">Actualizar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>          
        )
    }
}

export default updateData