export const cantidadCarrito = (carrito) => {
    return carrito.reduce((acc, act) => acc + act.cantidad, 0)
}

export const totalProducto = (producto) => {
    return producto.precio * producto.cantidad
}

export const calcularTotal = (total) => {
    let totalCalculado = total.reduce((acc, act) => acc + act.precio * act.cantidad , 0)
    return totalCalculado.toLocaleString()
}