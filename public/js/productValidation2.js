//ESTE ARCHIVO TIENE PROBLEMAS CON EL SUBMIT, NO ENVIA EL FORMULARIO. LO DEJO PARA SEGUIR PROBANDO.

let qs = function(element) {
    return document.querySelector(element)
}

window.addEventListener("load", function() {
    
    let form = document.querySelector("#formCreate");
    
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        
        let nombre = qs("#nombre");
        let marca = qs("#marca");
        let imagen = qs("#imagen");
        let precio = qs("#precio");
        let stock = qs("#stock");
        let categoria = qs("#categoria");
        let descripcion = qs("#descripcion");
        
        
        let errorNombre = qs('#errorNombre')
        let errorMarca = qs('#errorMarca')
        let errorImagen = qs('#errorImagen')
        let errorPrecio = qs('#errorPrecio')
        let errorStock = qs('#errorStock')
        let errorCategoria = qs('#errorCategoria')
        let errorDescripcion = qs('#errorDescripcion')
        
        let errors = {};
             
        //Nombre
        if(nombre.value.length == 0){
            errors.nombre = "Este campo no puede estar vacio"
            errorNombre.innerText = errors.nombre
        } else if (nombre.value.length < 4) {
            errors.nombre = "Debe contener al menos 4 caracteres"
            errorNombre.innerText = errors.nombre
        } else {
            delete errors.nombre
            errorNombre.innerText = ""
        }

        //Marca
        if(marca.value.length == 0){
            errors.marca = "Este campo no puede estar vacio"
            errorMarca.innerText = errors.marca
        } else if (marca.value.length < 4) {
            errors.marca = "Debe contener al menos 4 caracteres"
            errorMarca.innerText = errors.marca
        } else {
            delete errors.marca
            errorMarca.innerText = ""
        }        

        //Precio
        if(precio.value.length == 0){
            errors.precio = "El producto debe tener un precio"
            errorPrecio.innerText = errors.precio
        // } else if (precio.value < 0) {
        //     errors.precio = "El precio debe ser un valor mayor a 0"
        //     errorPrecio.innerText = errors.precio
        } else {
            delete errors.precio
            errorPrecio.innerText = ""
        }   
        
        //Stock
        if(stock.value.length == 0){
            errors.stock = "El producto debe tener un stock"
            errorStock.innerText = errors.stock
        // } else if (stock.value < 0) {
        //     errors.stock = "El precio debe ser un valor mayor a 0"
        //     errorStock.innerText = errors.stock
        } else {
            delete errors.stock
            errorStock.innerText = ""
        } 

        //Descripcion
        if(descripcion.value.length == 0){
            errors.descripcion = "Este campo no puede estar vacio"
            errorDescripcion.innerText = errors.descripcion
        } else if (descripcion.value.length < 10) {
            errors.descripcion = "Debe contener al menos 10 caracteres"
            errorDescripcion.innerText = errors.descripcion
        } else if (descripcion.value.length > 500) {
            errors.descripcion = "Debe contener como maximo 500 caracteres"
            errorDescripcion.innerText = errors.descripcion
        } else {
            delete errors.descripcion
            errorDescripcion.innerText = ""
        }
    
        console.log(errors)
    
        if(Object.keys(errors).length !== 0) {
            form.submit
        }       

    })    

})