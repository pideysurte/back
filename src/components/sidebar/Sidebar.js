import React, {Component} from 'react'
import $ from 'jquery';
class Sidebar extends Component{
    componentDidMount() {

         $(".sidebar-nav li").hide()
         let access = JSON.parse(localStorage.getItem('access'))
         access.forEach(function (element) {
             if (element >= 1 && element <= 21) {
                document.querySelector('#modAdmin').style.display = 'block'
                if (element >= 1 && element <= 3){                
                    document.querySelector('#ModUsuarioMp').style.display = 'block'
                     if (element == "1") {
                         document.querySelector('#ModUsuarioMpC').style.display = 'block'
                     }
                     if (element >= 2 && element <= 3) {
                         document.querySelector('#ModUsuarioMpl').style.display = 'block'
                     }
                }
                if (element >= 4 && element <= 6) {
                    document.querySelector('#ModUsuarioTp').style.display = 'block'
                     if (element == "4") {
                         document.querySelector('#ModUsuarioTpC').style.display = 'block'
                     }
                     if (element >= 5 && element <= 6) {
                         document.querySelector('#ModUsuarioTpl').style.display = 'block'
                     }
                }
                if (element >= 7 && element <= 9) {
                    document.querySelector('#ModUsuarioTe').style.display = 'block'
                     if (element == "7") {
                         document.querySelector('#ModUsuarioTeC').style.display = 'block'
                     }
                     if (element >= 8 && element <= 9) {
                         document.querySelector('#ModUsuarioTel').style.display = 'block'
                     }
                }
                if (element >= 10 && element <= 12) {
                    document.querySelector('#ModUsuarioTf').style.display = 'block'
                     if (element == "10") {
                         document.querySelector('#ModUsuarioTfC').style.display = 'block'
                     }
                     if (element >= 11 && element <= 12) {
                         document.querySelector('#ModUsuarioTfl').style.display = 'block'
                     }
                }
                if (element >= 13 && element <= 15) {
                    document.querySelector('#ModUsuarioTm').style.display = 'block'
                     if (element == "13") {
                         document.querySelector('#ModUsuarioTmC').style.display = 'block'
                     }
                     if (element >= 14 && element <= 15) {
                         document.querySelector('#ModUsuarioTml').style.display = 'block'
                     }
                }
                if (element >= 16 && element <= 18) {
                    document.querySelector('#ModUsuarioSt').style.display = 'block'
                     if (element == "16") {
                         document.querySelector('#ModUsuarioStaC').style.display = 'block'
                     }
                     if (element >= 17 && element <= 18) {
                         document.querySelector('#ModUsuarioStal').style.display = 'block'
                     }
                }                
             }

             if (element >= 19 && element <= 24) {
                 document.querySelector('#modMarket').style.display = 'block'
                 if (element == "19") {
                     document.querySelector('#ModUsuarioMc').style.display = 'block'
                 }
                 if (element >= 20 && element <= 21) {
                     document.querySelector('#ModUsuarioMt').style.display = 'block'
                 }
                 if (element >= 22 && element <= 24) {
                     document.querySelector('#ModUsuarioPa').style.display = 'block'
                    if (element == "22") {
                         document.querySelector('#ModUsuarioPaC').style.display = 'block'
                     }
                     if (element >= 23 && element <= 24) {
                         document.querySelector('#ModUsuarioPal').style.display = 'block'
                     }
                 }
             }
             if (element >= 25 && element <= 27) {
                 document.querySelector('#modFabdist').style.display = 'block'
                 if (element == "25") {
                     document.querySelector('#ModUsuarioFdl').style.display = 'block'
                 }
                 if (element >= 26 && element <= 27) {
                     document.querySelector('#ModUsuarioFdc').style.display = 'block'
                 }
             }
             if (element >= 28 && element <= 30) {
                 document.querySelector('#modCedis').style.display = 'block'
                 if (element == "28") {
                     document.querySelector('#ModUsuarioCec').style.display = 'block'
                 }
                 if (element >= 29 && element <= 30) {
                     document.querySelector('#ModUsuarioCel').style.display = 'block'
                 }
             }
            if (element >= 31 && element <= 33) {
                document.querySelector('#ModUsuario').style.display = 'block'
                 if (element == "31") {
                     document.querySelector('#ModUsuarioUserc').style.display = 'block'
                 }
                if (element >= 32 && element <= 33) {
                     document.querySelector('#ModUsuarioUserl').style.display = 'block'
                 } 
             }
         })

 
          
                $(".itemparent").click(function () {
                    $(this).next("ul").toggle();
                });
                $(".itemSubparent").click(function () {
                     $(this).next("ul").toggle();
                });
        
    }
    render(){
       // document.querySelector('.sidebarnav li').style.display = 'none'
        // let access = localStorage.getItem('access')
        return  (
            
            <React.Fragment>
                <div  className="left-sidebar">
                    <div  className="scroll-sidebar">
                        <nav  className="sidebar-nav">
                            <ul id="sidebarnav" className="sidebarnav">
                                <li  className="nav-devider"></li>
                                <li> <a  className="" href="./dashboard" aria-expanded="false"><i  className="fa fa-desktop"></i><span  className="hide-menu">Escritorio</span></a>
                                </li>
                                <li id="modAdmin" > <a   className="has-arrow itemparent " href="#nogo" aria-expanded="false"><i  className="fa fa-book"></i><span  className="hide-menu">Administración </span></a>
                                    <ul aria-expanded="false"  className="collapse">                                      
                                                <li id="ModUsuarioMp"><a  className="has-arrow itemSubparent " href="#nogo" aria-expanded="false">Métodos de Pago</a>
                                                    <ul aria-expanded="false"  className="collapse">  
                                                        <li id="ModUsuarioMpl"><a href="./paymentmethodslist">Listar</a></li>
                                                        <li id="ModUsuarioMpC"><a href="./paymentmethods">Crear</a></li>
                                                    </ul>
                                                </li>
                                                <li id="ModUsuarioTp"><a  className="has-arrow itemSubparent " href="#nogo" aria-expanded="false">Tipos de documento</a>
                                                    <ul aria-expanded="false"  className="collapse">  
                                                        <li id="ModUsuarioTpl"><a href="./typedocumentlist">Listar</a></li>
                                                        <li id="ModUsuarioTpC"><a href="./typedocument">Crear</a></li>
                                                    </ul>
                                                </li>
                                                <li id="ModUsuarioTe"><a  className="has-arrow itemSubparent " href="#nogo" aria-expanded="false">Tipos de envío</a>
                                                     <ul aria-expanded="false"  className="collapse">  
                                                        <li id="ModUsuarioTel"><a href="./typeshippinglist">Listar</a></li>
                                                        <li id="ModUsuarioTeC"><a href="./typeshipping">Crear</a></li>
                                                    </ul>
                                                </li>
                                                <li id="ModUsuarioTf"><a  className="has-arrow itemSubparent " href="#nogo" aria-expanded="false">Tipo de Flete</a>
                                                    <ul aria-expanded="false"  className="collapse">  
                                                        <li id="ModUsuarioTfl"><a href="./typetaxeslist">Listar</a></li>
                                                        <li id="ModUsuarioTfC"><a href="./typetaxes">Crear</a></li>
                                                    </ul>
                                                </li>
                                                <li id="ModUsuarioTm"><a  className="has-arrow itemSubparent " href="#nogo" aria-expanded="false">Tipos de marketplace</a>
                                                    <ul aria-expanded="false"  className="collapse">  
                                                        <li id="ModUsuarioTml"><a href="./typemarketplacelist">Listar</a></li>
                                                        <li id="ModUsuarioTmC"><a href="./typemarketplace">Crear</a></li>
                                                    </ul>
                                                </li>                                        
                                                <li id="ModUsuarioSt"  >
                                                    <a  className="has-arrow itemSubparent " href="#nogo" aria-expanded="false">
                                                        Estados conceptos
                                                    </a>
                                                    <ul aria-expanded="false"  className="collapse">  
                                                        <li id="ModUsuarioStal"><a href="./statuslist">Listar</a></li>
                                                        <li id="ModUsuarioStaC"><a href="./status">Crear</a></li>
                                                    </ul>
                                                </li>
                                    </ul>
                                </li >
                                        <li  id="modMarket"> <a  className="has-arrow itemparent " href="#nogo" aria-expanded="false"><i  className="fa fa-book"></i><span  className="hide-menu">MarketPlace</span></a>
                                            <ul aria-expanded="false"  className="collapse">
                                                <li id="ModUsuarioMt"><a href="./marketlist">Listar</a></li>
                                                <li id="ModUsuarioMc"><a href="./marketcreate">Crear</a></li>
                                                <li id="ModUsuarioPa"><a  className="has-arrow itemSubparent " href="#nogo" aria-expanded="false">Publicidad Asociativos</a>
                                                    <ul aria-expanded="false"  className="collapse">  
                                                        <li id="ModUsuarioPal"><a href="./advertisinglist">Listar</a></li>
                                                        <li id="ModUsuarioPaC"><a href="./advertising">Crear</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li  id="modFabdist"> <a  className="has-arrow itemparent " href="#nogo" aria-expanded="false"><i  className="fa fa-book"></i><span  className="hide-menu">Fabricante distribuidor</span></a>
                                            <ul aria-expanded="false"  className="collapse">
                                                <li id="ModUsuarioFdc"><a href="./fabdistlist">Listar</a></li>
                                                <li id="ModUsuarioFdl"><a href="./fabdistcreate">Crear</a></li>
                                            </ul>
                                        </li>
                                        <li   id="modCedis"> <a  className="has-arrow itemparent " href="#nogo" aria-expanded="false"><i  className="fa fa-book"></i><span  className="hide-menu">Cedis</span></a>
                                            <ul aria-expanded="false"  className="collapse">
                                                <li id="ModUsuarioCel"><a href="./cedislist">Listar</a></li>
                                               <li id="ModUsuarioCec"><a href="./cediscreate">Crear</a></li>
                                            </ul>
                                        </li>  
                                        <li id="ModUsuario"> <a  className="has-arrow itemparent " href="#nogo" aria-expanded="false"><i  className="fa fa-book"></i><span  className="hide-menu">Usuarios</span></a>
                                            <ul aria-expanded="false"  className="collapse">
                                                <li id="ModUsuarioUserl"><a href="./userlist">Listar</a></li>
                                                <li id="ModUsuarioUserc"><a href="./usercreate">Crear</a></li>
                                                
                                            </ul>
                                        </li>                                   
                            </ul>
                        </nav>
                    </div>
                </div>                
            </React.Fragment>          
        )
    }
}

export default Sidebar