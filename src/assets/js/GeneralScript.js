export function alertaGeneral(msg){
    document.querySelector('.msglabel').innerText=msg
    document.querySelector('.mggAlert').style.display = 'block'
    setTimeout(function () {
         document.querySelector('.mggAlert').style.display = 'none'
    }, 4000);
}
export function closeAlertGeneral() {  
    var mggAlertConfirm = document.querySelector('#mggAlertConfirm')
    if (mggAlertConfirm){
        mggAlertConfirm.style.display = 'none'
    }

    document.querySelector('.mggAlert').style.display = 'none'
     var b = document.querySelector("#btnAlertConfirm")
     if (b){
           b.setAttribute("data-nid", "")            
     }
     
}
export function alertaConfirm(nid) {
    document.querySelector('.mggAlertConfirm').style.display = 'block'
    var b = document.querySelector("#btnAlertConfirm")
    b.setAttribute("data-nid", nid)
    setTimeout(function () {
        document.querySelector('.mggAlert').style.display = 'none'
    }, 3000);
}