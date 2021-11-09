const productos = [
    {id: 1, name: 'Producto Nro abc'},
    {id: 2, name: 'Producto Nro 2'},
    {id: 3, name: 'Salsa qwe'},
    {id: 5, name: 'Producto Nro 5'},
]

const all = () => {
    return productos
}

const find = (id) => {
    return productos.find(producto => producto.id == id)
}

module.exports = {
    all,
    find
}