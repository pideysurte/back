import React, {Component} from 'react'

class updateData extends Component {
    render(){
        return  (
            <React.Fragment>                   
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
                                                    <div  className="col-sm-10">
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
            </React.Fragment>          
        )
    }
}

export default updateData