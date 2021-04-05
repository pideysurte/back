import React, {Component} from 'react'
import InputTypeDocument from '../atoms/InputTypeDocument'
import InputStatus from '../atoms/InputStatus'
import langEs from '../utils/langEs'
class createData extends Component{    
    render(){
        return  (
            <React.Fragment>
                    <div className="container-fluid">
                        <AlertGeneral /> 
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
                                                                <input type="number" className="form-control" placeholder="" name="crenumberDocument" id="updnumberDocument" required="required"  maxlength="30" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label className=" control-label">{langEs.ADDRESS} </label>
                                                                    <input type="text" className="form-control" placeholder=""  id="creaddress" required="required"  maxlength="30" />
                                                                
                                                                </div>
                                                            </div>
                                            </div> 
                                            <div className="row p-t-20">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className=" control-label">{langEs.ADDRESS} </label>
                                                        <input type="text" className="form-control" placeholder=""  id="creaddress" required="required"  maxlength="30" />
                                                      
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className=" control-label">{langEs.PHONE_CONTRATOR}</label>                                                        
                                                        <input type="number" className="form-control" placeholder=""  id="crephoneContractor" required="required"   />
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                                <div className="row p-t-20">
                                                     <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className=" control-label">Notas</label>
                                                            <textarea name="textTyc" id="crenote"></textarea>
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
                        <button type="button" className="btn btn-default btnadd">Ingresar</button>
                    </div>               
            </React.Fragment>          
        )
    }
}

export default createData