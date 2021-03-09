class Carrito {

    // Anadir productos al carrito

    comprarProducto (e) {
        e.preventDefault();
        if(e.target.classList.contains('buttons')) {
            const producto = e.target.parentElement.parentElement;
            this.leerDatos.Producto(producto)
        }
    }

}
