window.addEventListener("load",function(){

    console.log('HOLAAAA');

    //Formulario
    let formulario = document.querySelector("#formulario"); 

    //Inputs
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");

    //Small
    let smallEmail = document.querySelector('#errorEmail');
    let smallPassword = document.querySelector('#errorPassword');

    //Errors
    let errors = {
        email:true,
        password:true
    };

    //regEx
    let regExEmail =  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
    let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

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

    formulario.addEventListener('submit',function(event){
       
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


})