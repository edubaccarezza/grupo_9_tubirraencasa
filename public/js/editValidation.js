window.onload = function () {

    console.log('HOLAAAAAAAAA');

    //FORMULARIO
    let form = document.querySelector('#form-register')

    //INPUTS
    let firstName = document.querySelector('#firstName');
    let lastName = document.querySelector('#lastName');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let repassword = document.querySelector('#repassword');

    //SMALLS
    let smallFirtsName = document.querySelector('#small-firstName');
    let smallLastName = document.querySelector('#small-lastName');
    let smallEmail = document.querySelector('#small-email');
    let smallPassword = document.querySelector('#small-password');
    let smallRepassword = document.querySelector('#small-repassword');

    //ERROR
    let errors = {
        firstName: true,
        lastName:true,
        email:true,
        password:true,
        repassword:true
    };
    
    console.log(errors);

    //regEx
    let regExEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
    let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;


    //Validación firstName
    firstName.addEventListener('blur',function(){
        if(firstName.value.length < 2){
            errors.firstName = true;
            smallFirtsName.innerText = 'Debe contener al menos 2 caracteres';
            console.log(errors);
        } else if (firstName.value.length > 20) {
            errors.firstName = true;
            smallFirtsName.innerText = 'Debe contener menos de 20 caracteres';
        } else {
            smallFirtsName.innerText = '';
            errors.firstName = false;
        }
    })

    //Validación lastName
    lastName.addEventListener('blur',function(){
        if(lastName.value.length < 2){
            errors.lastName = true;
            smallLastName.innerText = 'Debe contener al menos 2 caracteres';
        } else if (lastName.value.length > 20) {
            errors.lastName = true;
            smallLastName.innerText = 'Debe contener menos de 20 caracteres';
        }else {
            smallLastName.innerText = '';
            errors.lastName = false;
        }
    })

    //Validacion email
    email.addEventListener('blur',function(){
        if(!regExEmail.test(email.value)){
            errors.email = true;
            smallEmail.innerText = 'Debe ingresar un email valido';
        }else {
            smallEmail.innerText = '';
            errors.email = false;
        }
    })
    
    //Validacion Password
    password.addEventListener('blur',function(){
        if(!regExPassword.test(password.value)){
            errors.password = true;
            smallPassword.innerText = 'La contraseña debe tener como mínimo 1 mayúscula, 1 minúscula, 1 numero, 1 caracter especial' ;
        }else {
            smallPassword.innerText = '';
            errors.password = false;
        }
    })

    //Validacion Repassword
    repassword.addEventListener('blur',function(){
        if(password.value != repassword.value){
            errors.repassword = true;
            smallRepassword.innerText = 'Las contraseñas no coinciden';
        }else {
            smallRepassword.innerText = '';
            errors.repassword = false;
        }
    })


    form.addEventListener('submit',function(event){
       
        console.log(errors);

        event.preventDefault();
        
        let flag = false;
        
        for(let i in errors){
           if(errors[i] == true){
               flag = true;
               break;
           }
        }

        if(flag == false){
            form.submit();
        }

    });


}