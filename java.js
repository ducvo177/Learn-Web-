var emailInput=document.getElementById('Email');
var nameInput=document.getElementById('Name');
var passwordInput=document.getElementById('Password');

var emailBlock=document.getElementById('email-container')
var btnSubmit=document.querySelector('.btn-submit')
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btnSubmit.onclick=function(){
    var formOutput={
        email:emailInput.value,
        name:nameInput.value,
        password:passwordInput.value
    }
    if(mailformat.test(emailInput.value)){
        emailBlock.innerHTML+= `<h2>Email nhập đúng định dạng</h2>`
        
        console.log(formOutput)
    }else{
        
        emailBlock.innerHTML+= `<h2>Vui lòng kiểm tra lại email !!!</h2>`
    }


}
