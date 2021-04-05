import React, {Component} from 'react'
import InputTypeMarketplace from '../atoms/InputTypeMarketplace'
import InputMarketplaceAso from '../atoms/InputMarketplaceAso'
import InputTypeDocument from '../atoms/InputTypeDocument'
import InputStatusMarket from '../atoms/InputStatusMarket'
import InputStatus from '../atoms/InputStatus'
import InpuSolution from '../atoms/InputSolution'
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
                                            <form id="formulario">
                                            <div className="form-horizontal" id="formcreate" >
                                                <input type="hidden" className="form-control" placeholder="" name="name" id="updid"    />
                                                    
                                                     <div className="row p-t-20">
                                                        <InputStatusMarket />
                                                        <InpuSolution />
                                                        <InputTypeMarketplace /> 
                                                    </div>                                           
                                                      <div className="row p-t-20">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className=" control-label">{langEs.NAME_MARKETPLACE} </label>
                                                                    <input type="text" className="form-control" placeholder=""  id="updname"   maxlength="30" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                                        <div className="form-group">
                                                                                            <label className="control-label">Versión </label>                                                        
                                                                                            <input type="text" className="form-control" placeholder="" name="versMarketplace" id="updversMarketplace"   step="0.01"  maxlength="30" />
                                                                                        </div>                                                            
                                                                </div>
                                                    </div>
                                                        
                                                    <div className="row p-t-20">
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label className=" control-label">{langEs.NAME_CLIENT} </label>
                                                                    <input type="text" className="form-control" placeholder=""  id="updnameClient"   maxlength="30"  />
                                                                </div>
                                                            </div>
                                                            <InputTypeDocument />
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                <label className=" control-label">Documento </label>
                                                                <input type="number" className="form-control" placeholder="" name="numberDocument" id="updnumberDocument"   maxlength="30" />
                                                                </div>
                                                            </div>
                                                    </div> 
                                                        <div className="row p-t-20">
                                                            <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className="control-label">Teléfono </label>
                                                                
                                                                        <input type="number" className="form-control" placeholder="" name="updphone" id="updphone"   maxlength="30"   />
                                                                    </div>
                                                                </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label className=" control-label">Dirección </label>
                                                                    <input type="text" className="form-control" placeholder="" name="address" id="updaddress"   maxlength="60" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label className=" control-label">Texto pantalla </label>
                                                                    <input type="text" className="form-control" placeholder="" name="textScreenCedi" id="updtextScreenCedi"   maxlength="60" />

                                                                </div>
                                                            </div>
                                                            
                                                        </div> 
                                                        <div className="row p-t-20">
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <label className=" control-label">Política de datos </label>
                                                                    <textarea name="textPd" id="updtextPd"></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="form-group">                                                                    
                                                                    <label className=" control-label">Notas Comerciales</label>
                                                                    <textarea name="note" id="updnote"></textarea>                                                                 
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

                                                        </div>   
                                                        <div class="contBlock">
                                                    <div className="row p-t-20">
                                                        <label class=" col-md-12 control-label bold">Características de las fotos publicitarias para las App's</label>
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label className=" control-label">Peso en kilobites </label>                                                                
                                                                            <input type="number" className="form-control" placeholder="" name="weight" id="updweight" required="required"  maxLength="10" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label className=" control-label">Ancho en pixeles</label>                                                                
                                                                            <input type="number" className="form-control" placeholder="" name="width" id="updwidth" required="required"  maxLength="10"  />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label className=" control-label">Alto  en pixeles </label>                                                                
                                                                            <input type="number" className="form-control" placeholder="" name="height" id="updheight" required="required" maxLength="10" />
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
                                                        <div className="row p-t-20">
                                                            <div className="col-md-12">
                                                                <div className="form-group form-group-faqs">                                                                    
                                                                   <label className=" control-label bold">Preguntas frecuentas </label>
                                                                   <a href="#nogo" className="addCatFaqs">Agregar Categoría pregunta</a>
                                                                                                                                
                                                                </div>
                                                            </div>
                                                        </div>  
                                                <div className="form-group">
                                                    <div className="col-sm-offset-2 col-sm-10">
                                                        <button type="button" className="btn btn-default btnupdate">Actualizar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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