import React, {Component} from 'react'
import '../../assets/css/Admin.css'
import Const from '../utils/defaultConstant'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import $ from 'jquery';
import AlertGeneral from '../atoms/AlertGeneral'
import {alertaGeneral,closeAlertGeneral} from '../../assets/js/GeneralScript'
import InputTypeMarketplace from '../atoms/InputTypeMarketplace'
import InputTypeDocument from '../atoms/InputTypeDocument'
import InputStatusMarket from '../atoms/InputStatusMarket'
import InpuSolution from '../atoms/InputSolution'
import langEs from '../utils/langEs'
document.body.classList.add('fix-sidebar');

class Marketplace extends Component {
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
        let itemfaqs = ' <div class="itemfaqs">' +
                        '<button class="addCatFaqsmenosppal">-</button>' +
                        '<input type="text" class="form-control tfaqs" placeholder="Nombre categoría"   id="tpreguntas"  maxlength="120" /> ' +
                        '<a href="#nogo" class="addCatFaqsmas">Agregar Pregunta y respuesta</a><div class="separador"></div>' +
                        '<div class="groupInputFaqs">' +
                        '<button class="addCatFaqsmenos">-</button>' +
                        '<input type="text" class="form-control qfaqs" placeholder="Pregunta"   id="pregunta"  maxlength="120" /> ' +
                        '<input type="text" class="form-control rfaqs" placeholder="Respuesta"   id="respuesta"  maxlength="255" />' +
                        '</div>' +
                        '</div> ';

        let itemquestion =  '<div class="groupInputFaqs">' +
                            '<button class="addCatFaqsmenos">-</button>' +
                            '<input type="text" class="form-control qfaqs" placeholder="Pregunta"   id="pregunta"  maxlength="120" /> ' +
                            '<input type="text" class="form-control rfaqs" placeholder="Respuesta"   id="respuesta"  maxlength="255" />' +
                            '</div>';
        document.querySelector('.addCatFaqs').addEventListener("click", function (e) {            
            document.querySelector('.form-group-faqs').insertAdjacentHTML("afterend", itemfaqs)
            return false
        });

        document.querySelector('.addCatFaqsmenosppal').addEventListener("click", function (e) {
            e.parentElement.querySelector('.itemfaqs').remove();
             return false
        });

        $(document).on('click', '.addCatFaqsmas', function () {
            $(this).parent(".itemfaqs").append(itemquestion)
            return false
        });
        $(document).on('click', '.addCatFaqsmenos', function () {
            $(this).parent(".groupInputFaqs").remove()
            return false
        });

        $(document).on('click', '.btnupdate', function () {
            let social = []
            let error = 0;
            $(".urlsocial").each(function (index) {
                if (this.value != "") {
                    let url = validURL(this.value)
                    if (url) {
                        social.push({
                            "name": this.id,
                            "url": this.value
                        })
                    } else {
                        error = 1;
                    }
                }
            });
            let faqs = []
            $(".itemfaqs").each(function (index) {
                if ($(this).find(".tfaqs").value != "") {
                    let Questions = []
                    let titlefaqs = $(this).find(".tfaqs").val()
                    let groupQuestions = $(this).find(".groupInputFaqs")
                    $(groupQuestions).each(function (index) {
                        if ($(this).find(".qfaqs").val() != "" &&
                            $(this).find(".rfaqs").val() != "") {
                            Questions.push({
                                "pregunta": $(this).find(".qfaqs").val(),
                                "respuesta": $(this).find(".rfaqs").val()
                            })
                        }                        
                    })
                    if (Questions.length >= 1) {
                        faqs.push({
                            "categoria": titlefaqs,
                            "respuestas": Questions
                        })
                    }
                }
            });
                 

           
                    let ActMarketplaceAso = $("#activomarket").val()
                    let name = $("#updname").val();
                    let nameClient = $("#updnameClient").val()
                    let status = $("#updstatus").val()
                    let typeDocument = $("#updtypeDocument").val()
                    let typeSolution = $("#updsolution").val()
                    let typeMarketplace = $("#updtypeMarketplace").val()
                    let numberDocument = $("#updnumberDocument").val()
                    let phone = $("#updphone").val()
                    let note = $("#updnote").val()
                    let address = $("#updaddress").val()
                    let textScreenCedi = $("#updtextScreenCedi").val()
                    let versMarketplace = $("#updversMarketplace").val()
                    let textTyc = $("#updtextTyc").val()
                    let textPd = $("#updtextPd").val()

                    if (name.length >= 4 &&
                        numberDocument.length >= 6 &&
                        phone.length >= 7 &&
                        note.length >= 5 &&
                        address.length >= 4 &&
                        textScreenCedi.length >= 4 &&
                        versMarketplace.length >= 2 &&
                        textTyc.length >= 4 &&
                        textPd.length >= 4) {
                        var datos = {
                            name: name,
                            ActMarketplaceAso: ActMarketplaceAso,
                            typeSolution: typeSolution,
                            nameClient: nameClient,
                            status: status,
                            numberDocument: numberDocument,
                            typeDocument: typeDocument,
                            typeMarketplace: typeMarketplace,
                            phone: phone,
                            note: note,
                            address: address,
                            socialRef: JSON.stringify(social),
                            faqs: JSON.stringify(faqs),
                            textScreenCedi: textScreenCedi,
                            versMarketplace: versMarketplace,
                            textTyc: textTyc,
                            textPd: textPd
                        }

                        fetch(Const.urlrest + "/api/marketplace/", {
                                headers: Const.myHeaders,
                                method: "POST",
                                body: JSON.stringify(datos)
                            })
                            .then(response => response.json())
                            .then(
                                (result) => {
                                    if (result.data){
                                        alertaGeneral("Registro Ingresado");
                                        window.scrollTo(0, 0);
                                        document.getElementById("formulario").reset();
                                    }else{
                                        alertaGeneral("Revisa la conexión a internet");
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
            

        })



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
                            <h3 className="text-primary">MarketPlace</h3> </div>
                        
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
                                            <form id="formulario" >
                                                <div className="form-group">
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
                                                                                            <label className="control-label">{langEs.VERSION} </label>                                                        
                                                                                            <input type="text" className="form-control" placeholder="" name="versMarketplace" id="updversMarketplace"   step="0.01" maxlength="30" />
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
                                                                <label className=" control-label">{langEs.DOCUMENT_NUMBER} </label>
                                                                <input type="number" className="form-control" placeholder="" name="numberDocument" id="updnumberDocument"   maxlength="30" />
                                                                </div>
                                                            </div>
                                                    </div> 
                                                        <div className="row p-t-20">
                                                            <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className="control-label">{langEs.PHONE} </label>
                                                                
                                                                        <input type="number" className="form-control" placeholder="" name="updphone" id="updphone"   maxlength="30"   />
                                                                    </div>
                                                                </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label className=" control-label">{langEs.ADDRESS} </label>
                                                                    <input type="text" className="form-control" placeholder="" name="address" id="updaddress"   maxlength="90" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label className=" control-label">{langEs.TEXT_SCREEN} </label>
                                                                    <input type="text" className="form-control" placeholder="" name="textScreenCedi" id="updtextScreenCedi"   maxlength="60" />

                                                                </div>
                                                            </div>
                                                            
                                                        </div> 
                                                        <div className="row p-t-20">
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <label className=" control-label">{langEs.TEXT_PD}  </label>
                                                                    <textarea name="textPd" id="updtextPd"></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="form-group">                                                                    
                                                                    <label className=" control-label">{langEs.TEXT_NOTE}</label>
                                                                    <textarea name="note" id="updnote"></textarea>                                                                 
                                                                </div>
                                                            </div>
                                                            
                                                        </div>    
                                                        <div className="row p-t-20">
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <label className=" control-label">{langEs.TEXT_TC}</label>
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
                                                </div>
                                                        <div className="row p-t-20">                                                          
                                                            
                                                            <div className="col-md-12">
                                                                <div className="form-group form-group-faqs ">                                                                    
                                                                   <label className=" control-label bold">Preguntas frecuentas </label>
                                                                   <a href="#nogo" className="addCatFaqs">Agregar Categoría pregunta</a>
                                                                   <div className="itemfaqs">
                                                                        <button class="addCatFaqsmenosppal">-</button>
                                                                        <div className="col-md-6">
                                                                           <input type="text" className="form-control tfaqs" placeholder="Nombre categoría"    maxlength="120" />                                                                    
                                                                        </div>
                                                                        <button className="addCatFaqsmas">Agregar Pregunta y respuesta</button>
                                                                        <div className="separador"></div>
                                                                        <div className="groupInputFaqs"> 
                                                                            <button class="addCatFaqsmenos">-</button>                                                                   
                                                                            <input type="text" className="form-control qfaqs" placeholder="Pregunta"     maxlength="120" /> 
                                                                            <input type="text" className="form-control rfaqs" placeholder="Respuesta"    maxlength="255" />    
                                                                        </div>   
                                                                    </div>                                                               
                                                                </div>
                                                            </div>
                                                        </div>   
                                                
                                                <div className="form-group">
                                                    <div className="col-sm-offset-2 col-sm-10">
                                                        <button type="button" className="btn btn-default btnupdate">Ingresar</button>
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

export default Marketplace;