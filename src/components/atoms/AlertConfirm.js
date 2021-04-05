import React, {Component} from 'react'
class alertConfirm extends Component {                
    render(){
        return  (
            <React.Fragment>         
                    <div className="mggAlert mggAlertConfirm" id="mggAlertConfirm">
                        <div className="form-group">
                            <a href="#nogo" className="closeConfirm">x</a>
                            <label className="control-label msglabel">Confirmas eliminar el registro</label>
                            <button id="btnAlertConfirm" data-nid="" >Confirmar</button>                                                            
                        </div>
                    </div>
            </React.Fragment>          
        )
    }
}

export default alertConfirm