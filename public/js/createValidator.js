window.addEventListener("load", () => {
    
    function qs(elemento) {
        return document.querySelector(elemento)
    }
   
    let form = qs("#form");

    let nombre = qs("#nombre");
    let errorNombre = qs('#errorNombre')

    let marca = qs("#marca");
    let errorMarca = qs('#errorMarca')

    let imagen = qs("#imagen");
    let errorImagen = qs('#errorImagen')

    let precio = qs("#precio");
    let errorPrecio = qs('#errorPrecio')

    let stock = qs("#stock");
    let errorStock = qs('#errorStock')

    let categoria = qs("#categoria");
    let errorCategoria = qs('#errorCategoria')

    let descripcion = qs("#descripcion");
    let errorDescripcion = qs('#errorDescripcion')

    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    form.addEventListener("submit", (e) => {
        let errors = [];

        if (nombre.value.length < 4) {
            errors.push("El nombre es obligatorio y debe tener al menos 4 caracteres");
            document.getElementById('#errorNombre').innerHTML="El nombre es obligatorio y debe tener al menos 4 caracteres"
        }
        if (marca.value.length<4) {
            errors.push("La marca es obligatoria y debe tener al menos 4 caracteres");
            document.getElementById('#errorMarca').innerHTML="La marca es obligatoria y debe tener al menos 4 caracteres"
        }
        if (imagen.value.length<3) {
            errors.push("Debes cargar al menos 1 imagen");
            document.getElementById('#errorImagen').innerHTML="Debes cargar al menos 1 imagen";
        }
        if (imagen.value.length>150) {
            errors.push("Puedes cargar máximo 5 archivos");
            document.getElementById('#errorImagen').innerHTML="Debes cargar al menos 1 imagen";
        }
        if (precio.value == "") {
            errors.push("Carga el precio");
            document.getElementById('#errorPrecio').innerHTML="Carga el precio";
        }
        if (stock.value == "") {
            errors.push("Debes ingresar el stock disponible");
            document.getElementById('#errorStock').innerHTML="Debes ingresar el stock disponible"
        }
        if (categoria.value == "") {
            errors.push("Debes ingresar una categoría");
            document.getElementById('#errorCategoria').innerHTML="Debes ingresar una categoría"
        }
        if (descripcion.value.length<20) {
            errors.push("Debes describir el producto con al menos 20 caracteres");
            document.getElementById('#errorDescripcion').innerHTML="Debes describir el producto con al menos 20 caracteres";
        }
        
        if(errors.length !== 0) {
            e.preventDefault();
        } console.log(image.value);
    })
});