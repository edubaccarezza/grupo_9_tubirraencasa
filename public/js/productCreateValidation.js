let qs = function(element) {
    return document.querySelector(element)
}

window.onload = function() {
    
    //FORM
    let form = document.querySelector("#formCreate");
    
    //Inputs
    let nombre = qs("#nombre");
    let marca = qs("#marca");
    let imagen = qs("#imagen");
    let precio = qs("#precio");
    let stock = qs("#stock");
    let categoria = qs("#categorias");
    let descripcion = qs("#descripcion");
        
    //Errors    
    let errorNombre = qs('#errorNombre')
    let errorMarca = qs('#errorMarca')
    let errorImagen = qs('#errorImagen')
    let errorPrecio = qs('#errorPrecio')
    let errorStock = qs('#errorStock')
    let errorCategoria = qs('#errorCategoria')
    let errorDescripcion = qs('#errorDescripcion')
       
    let errors = {
        nombre: true,
        marca: true,
        precio: true,
        stock: true,
        descripcion: true
    };

    console.log(errors);

             
    // Validacion Nombre
    nombre.addEventListener('blur', function (){
        if(nombre.value.length == 0){
            errors.nombre = true,
            errorNombre.innerText = "Este campo no puede estar vacio"
            console.log(errors)
        } else if (nombre.value.length < 4) {
            errors.nombre = true,
            errorNombre.innerText = "Debe contener al menos 4 caracteres"
            console.log(errors)
        } else {
            errorNombre.innerText = ""
            errors.nombre = false
        }
    })

    //Validacion Marca
    marca.addEventListener('blur', function(){
        if(marca.value.length == 0){
            errors.marca = true,
            errorMarca.innerText = "Este campo no puede estar vacio"
            console.log(errors)
        } else if (marca.value.length < 4) {
            errors.marca = true
            errorMarca.innerText = "Debe contener al menos 4 caracteres"
            console.log(errors)
        } else {
            errorMarca.innerText = ""
            errors.marca = false
        }        
    })

    //Validacion Precio
    precio.addEventListener('blur', function() {
        if(precio.value.length == 0){
            errors.precio = true
            errorPrecio.innerText = "El producto debe tener un precio"
            console.log(errors)
        // } else if (precio.value < 0) {
        //     errors.precio = "El precio debe ser un valor mayor a 0"
        //     errorPrecio.innerText = errors.precio
        } else {
            errorPrecio.innerText = ""
            errors.precio = false
        } 
    })  
        
    //Validacion Stock
    stock.addEventListener('blur', function(){
        if(stock.value.length == 0){
            errors.stock = true,
            errorStock.innerText = "El producto debe tener un stock"
            console.log(errors)
        // } else if (stock.value < 0) {
        //     errors.stock = "El precio debe ser un valor mayor a 0"
        //     errorStock.innerText = errors.stock
        } else {
            errorStock.innerText = ""
            errors.stock = false
        } 
    })

    //Validacion Descripcion
    descripcion.addEventListener('blur', function (){
        if(descripcion.value.length == 0){
            errors.descripcion = true
            errorDescripcion.innerText = "Este campo no puede estar vacio"
            console.log(errors)
        } else if (descripcion.value.length < 10) {
            errors.descripcion = true;
            errorDescripcion.innerText =  "Debe contener al menos 10 caracteres"
            console.log(errors)
        } else if (descripcion.value.length > 500) {
            errors.descripcion = true;
            errorDescripcion.innerText = "Debe contener como maximo 500 caracteres"
            console.log(errors)
        } else {
            errorDescripcion.innerText = ""
            errors.descripcion = false
        }
    })

        // console.log(errors)
    
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

