const fechaActual = () => {
    const fecha = Date.now();
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'

    }
    return fechaNueva.toLocaleDateString('en-Es', opciones);
}

export default fechaActual