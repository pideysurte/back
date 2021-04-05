import React, {Component} from 'react'
class alertGeneral extends Component {
                
    render(){
        return  (
            <React.Fragment>         
                    <div className="mggAlert" id="mggAlert">
                        <div className="form-group">
                            <label className="control-label msglabel">La dirección de email es incorrecta!.La dirección de email es incorrecta!.</label>
                            <button id="closeAlertGeneral">Cerrar</button>                                                            
                        </div>
                    </div>
            </React.Fragment>          
        )
    }
}

export default alertGeneral