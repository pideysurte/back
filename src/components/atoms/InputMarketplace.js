import React, {Component} from 'react'
import Const from '../utils/defaultConstant'
class inputMarketplace extends Component {
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            items:[]
        }
    }
    componentDidMount(){
        fetch(Const.urlrest + "/api/marketplace", {
            headers: Const.myHeaders
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
    }
    render(){
                const {
                    items
                } = this.state;
        return  (
            <React.Fragment>                
                <div className="col-md-4">
                    <div className="form-group">
                        <label className=" control-label">Marketplace Marca Blanca</label>
                            <select className="form-control" id="updmarketplace" name="idMarketplace">      
                            <option value="0">Seleccionar</option> 
                            {items.map(item => (
                                <option value={item.id} >{item.name}</option>
                            ))}                                          
                            </select>                                                              
                        </div>
                </div>
            </React.Fragment>          
        )
    }
}

export default inputMarketplace