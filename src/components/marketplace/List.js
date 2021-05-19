import React, {Component} from 'react'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import UpdateData from './updateData'
import Const from '../utils/defaultConstant'
import $ from 'jquery';
import MaterialTable from 'material-table';
import AlertGeneral from '../atoms/AlertGeneral'
import AlertConfirmation from '../atoms/AlertConfirm'
import {alertaGeneral,closeAlertGeneral,alertaConfirm} from '../../assets/js/GeneralScript'

document.body.classList.add('fix-sidebar');
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
   componentDidMount() { 
                   var el = document.getElementById('mggAlert');
                   var close = document.querySelector(".closeConfirm")
                   var btnAlertConfirm = document.querySelector("#btnAlertConfirm")

                   function formConfirmDelete() {
                       var nid = document.getElementById("btnAlertConfirm").getAttribute("data-nid")
                       if (nid >= 1) {
                           document.querySelector('#mggAlertConfirm').style.display = 'none'
                           formDelete(nid)
                       }
                   }
                   if (el) {
                       el.addEventListener("click", closeAlertGeneral);
                   }
                   if (close) {
                       close.addEventListener("click", closeAlertGeneral);
                   }
                   if (btnAlertConfirm) {
                       btnAlertConfirm.addEventListener("click", formConfirmDelete);
                   }
                   function formDelete(id) {
                       if (id >= 1) {
                           var datos = {
                               id: id
                           }
                           fetch(Const.urlrest + "/api/marketplace/destroy", {
                                   headers: Const.myHeaders,
                                   method: "DELETE",
                                   body: JSON.stringify(datos)
                               })
                               .then(response => response.json())
                               .then(
                                   (result) => {
                                    if(result.data == "1"){
                                        alertaGeneral("Registro  Eliminado");
                                        window.location.reload(false);
                                    }else{
                                        alertaGeneral("No se puede eliminar"); 
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
                           alertaGeneral("Datos  incorrectos");
                       }
                   }



                        fetch(Const.urlrest + "/api/marketplace",{
                            headers: Const.myHeaders
                        })
                            .then(response => response.json())
                            .then(
                                (result) => {
                                    console.log(result)
                                    result.data.forEach(function (element){
                                            
                                            if (element.ActMarketplaceAso == "1") {
                                                    element.ActMarketplaceAso = "Activo"
                                                    element.status = 1
                                                }else{
                                                    element.ActMarketplaceAso = "Inactivo"
                                                    element.status = 2
                                                }
                                    })
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
                  function validURL(str) {
                      var pattern = new RegExp('^(https?:\\/\\/)?' +
                          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                          '((\\d{1,3}\\.){3}\\d{1,3}))' +
                          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                          '(\\?[;&a-z\\d%_.~+=-]*)?' +
                          '(\\#[-a-z\\d_]*)?$', 'i');
                      return !!pattern.test(str);
                  }
                  $(document).off().on('click', '.btnupdate', function () {
                      let id = $("#updid").val();
                      let name = $("#updname").val();
                      let ActMarketplaceAso = $("#activomarket").val()
                      let nameClient = $("#updnameClient").val()
                      let status = $("#updstatus").val()
                      let weight = parseInt($("#updweight").val())
                      let width = parseInt($("#updwidth").val())
                      let height = parseInt($("#updheight").val())
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
                      let faqs = []
                      let social = []
                      $(".urlsocial").each(function (index) {
                          if (this.value != "") {
                              let url = validURL(this.value)
                              if (url) {
                                  social.push({
                                      "name": this.id,
                                      "url": this.value
                                  })
                              }
                          }
                      });
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
                      })
                     
                      if (name.length >= 4 &&
                          numberDocument.length >= 6 &&
                          phone.length >= 7 &&
                          note.length >= 5 &&
                          address.length >= 4 &&
                          textScreenCedi.length >= 4 &&
                          versMarketplace.length >= 2 &&
                          textTyc.length >= 4 &&
                          textPd.length >= 4 &&
                          weight >= 1 &&
                          width >= 1 &&
                          height >= 1
                          ) {
                          var datos = {
                              id: id,
                              name: name,
                              ActMarketplaceAso: ActMarketplaceAso,
                              typeSolution: typeSolution,
                              typeDocument: typeDocument,
                              typeMarketplace: typeMarketplace,
                              nameClient: nameClient,
                              status: status,
                              numberDocument: numberDocument,
                              phone: phone,
                              note: note,
                              address: address,
                              socialRef: JSON.stringify(social),
                              faqs: JSON.stringify(faqs),
                              textScreenCedi: textScreenCedi,
                              versMarketplace: versMarketplace,
                              textTyc: textTyc,
                              textPd: textPd,
                              weight : weight,
                              width : width,
                              height : height
                          }

                          fetch(Const.urlrest + "/api/marketplace/update", {
                                  headers: Const.myHeaders,
                                  method: "PUT",
                                  body: JSON.stringify(datos)
                              })
                              .then(response => response.json())
                              .then(
                                  (result) => {
                                      alertaGeneral("Registro  Actualizado");
                                      window.scrollTo(0, 0);
                                      document.querySelector('.formupdate').style.display = 'none'
                                      window.location.reload(false);

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

    function formEdit(id) {
        window.scrollTo(0, 0);
        document.querySelector('.formupdate').style.display = 'block'
        fetch(Const.urlrest + "/api/marketplace/read", {
                headers: Const.myHeaders,
                method: "POST",
                body: JSON.stringify({
                    id: id
                })
            })
            .then(response => response.json())
            .then(
                (response) => {
                    $("#updid").val(response.data.id)
                    $("#updname").val(response.data.name)
                    $("#updnameClient").val(response.data.nameClient)
                    $("#updphone").val(response.data.phone)
                    $("#updweight").val(response.data.weight)
                    $("#updwidth").val(response.data.width)
                    $("#updheight").val(response.data.height)
                    $("#updnote").val(response.data.note)
                    $("#updaddress").val(response.data.address)
                    $("#updsocialRef").val(response.data.socialRef)
                    $("#updtextScreenCedi").val(response.data.textScreenCedi)
                    $("#updversMarketplace").val(response.data.versMarketplace)
                    $("#updtextTyc").val(response.data.textTyc)
                    $("#updtextPd").val(response.data.textPd)
                    $("#updnumberDocument").val(response.data.numberDocument)
                    $("#updsolution option[value=" + response.data.typeSolution + "] ").attr('selected', 'selected');
                    $("#activomarket option[value=" + response.data.ActMarketplaceAso + "] ").attr('selected', 'selected');
                    $("#updtypeMarketplace option[value=" + response.data.typeMarketplace + "] ").attr('selected', 'selected');
                    $("#updtypeDocument option[value=" + response.data.typeDocument + "] ").attr('selected', 'selected');
                    let socialRef = JSON.parse(response.data.socialRef)
                    socialRef.forEach(element => {
                        $("#" + element.name).val(element.url)
                    })
                    let faqs = JSON.parse(response.data.faqs)
                    faqs.forEach(element => {
                        let respuestas = element.respuestas
                        let itemfaqs = ' <div class="itemfaqs">' +
                            '<button class="addCatFaqsmenosppal">-</button>' +
                            '<input type="text" class="form-control tfaqs" placeholder="Nombre categoría"  value="' + element.categoria + '"  id="tpreguntas"  maxlength="120" /> ' +
                            '<a href="#nogo" class="addCatFaqsmas">Agregar Pregunta y respuesta</a><div class="separador"></div>';
                            
                        respuestas.forEach(resp => {
                            itemfaqs += '<div class="groupInputFaqs">' +
                                '<button class="addCatFaqsmenos">-</button>' +
                                '<input type="text" class="form-control qfaqs" value="' + resp.pregunta + '" placeholder="Pregunta"   id="pregunta"  maxlength="120" /> ' +
                                '<input type="text" class="form-control rfaqs" placeholder="Respuesta"  value="' + resp.respuesta + '"  id="respuesta"  maxlength="255" />' +
                                '</div>';
                        })
                        itemfaqs += '</div> ';
                        $(".form-group-faqs").append(itemfaqs)
                    })


                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )



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

                    let itemquestion = '<div class="groupInputFaqs">' +
                        '<button class="addCatFaqsmenos">-</button>' +
                        '<input type="text" class="form-control qfaqs" placeholder="Pregunta"   id="pregunta"  maxlength="120" /> ' +
                        '<input type="text" class="form-control rfaqs" placeholder="Respuesta"   id="respuesta"  maxlength="255" />' +
                        '</div>';


                    $(document).on('click', '.addCatFaqs', function () {
                        $(".form-group-faqs").append(itemfaqs)
                    });
                    $(document).on('click', '.addCatFaqsmenosppal', function () {
                        $(this).parent(".itemfaqs").remove()
                    });
                    $(document).on('click', '.addCatFaqsmas', function () {
                        $(this).parent(".itemfaqs").append(itemquestion)
                        return false
                    });
                    $(document).on('click', '.addCatFaqsmenos', function () {
                        $(this).parent(".groupInputFaqs").remove()
                        return false
                    });
      }
var permisos = []
let access = JSON.parse(localStorage.getItem('access'))
access.forEach(function (element) {
    if (element == 20) {
        permisos.push({
            icon: 'edit',
            iconProps: {
                style: {
                    color: "#00569b"
                }
            },
            tooltip: 'Edit',
            onClick: (event, rowData) => formEdit(rowData.id)
        })
    }
    if (element == 21) {
        permisos.push({
            icon: 'delete',
            iconProps: {
                style: {
                    color: "#ff5722"
                }
            },
            tooltip: 'Delete User',
            onClick: (event, rowData) => alertaConfirm(rowData.id)
        })
    }

})


      const {
          items
      } = this.state;
      return (          
            <div>
                <Headerdashboard/>
                <Sidebar />  
                <AlertGeneral /> 
                <AlertConfirmation />
                <div className="page-wrapper">
                    <div className="row page-titles">
                        <div className="col-md-12 align-self-center">
                            <h3 className="text-primary">MarketPlace</h3> </div>
                        
                    </div>
                     <UpdateData />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                    
                                        <div className="table-responsive m-t-40">                                            
                                            <MaterialTable
                                                    title="Datos"
                                                    columns={[
                                                        { title: 'Id', field: 'id' },
                                                        { title: 'Nombre', field: 'name' },
                                                        { title: 'Tipo Marketplace', field: 'b2bTypeMarketplace.name' },
                                                        { title: 'Estado', field: 'ActMarketplaceAso' }
                                                        
                                                        
                                                    ]}
                                                    data = {
                                                        items
                                                    }
                                                    options={{
                                                        //exportButton: true,
                                                        headerStyle: {
                                                            backgroundColor: '#251972',
                                                            color: '#FFF'
                                                        },
                                                        actionsColumnIndex: -1,
                                                        filtering: true,
                                                        search: false
                                                    }}
                                                    actions={permisos}
                                                    />
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

export default Category;