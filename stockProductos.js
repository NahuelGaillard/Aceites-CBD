let Productos = [
    {img:'media/productos/img1.jpeg', nombre:"Gotero Royal 10ml", valor: 2200, descripcion:"39.99% de CBD"},
    {img:'media/productos/img2.jpeg', nombre:"Gotero Royal 30ml", valor: 4350, descripcion:"39.99% de CBD"},
    {img:'media/productos/img3.jpeg', nombre:"Gotero Royal 10ml Red", valor: 1550, descripcion:"Fortalece el sistema inmunológico 10% CBD"},
    {img:'media/productos/img4.jpeg', nombre:"Crema Royal 50gr", valor: 2000, descripcion:"39.9% cbd"},
    {img:'media/productos/img5.jpeg', nombre:"Royal extra fuerte con THC", valor: 2900 , descripcion:"Envase de 50 gramos"},
    {img:'media/productos/img6.jpeg', nombre:"Ungüento de Peru 90gr", valor: 950, descripcion:"Envase de 90 gramos"},
    {img:'media/productos/img7.jpeg', nombre:"Harina sativa", valor: 300, descripcion:"Paquete de 100 gramos"},
    {img:'media/productos/img8.jpeg', nombre:"Aceite de THC Naranja 10ml", valor: 3950, descripcion:"Ratio 1a1: 50% de indica y 50% sativa."},
    {img:'media/productos/img9.jpeg', nombre:"Aceite de THC Amarillo 10ml", valor: 3950, descripcion:"Ratio 3a1: 80% indica y 20% sativa."},
    {img:'media/productos/img10.jpeg', nombre:"Aceite de THC Verde 10ml", valor: 3950, descripcion:"Ratio 2a1: 70% de sativa y 30% indica"},
    {img:'media/productos/img11.jpeg', nombre:"Serum facial 20gr", valor: 2800, descripcion:"Acido hialurónico"},
    {img:'media/productos/img12.jpeg', nombre:"Serum facial vitamica C 20gr", valor: 2800, descripcion:"Vitamina C y Acido hialirónico"},
    {img:'media/productos/img13.jpeg', nombre:"Fish CBD oil", valor: 4800, descripcion:"Envase 60 cápsulas blandas"},
    {img:'media/productos/img14.jpeg', nombre:"Gummies CBD", valor: 4000, descripcion:"Envase de 50 unidades, 15mg de CBD por unidad"},
    {img:'media/productos/img15.jpeg', nombre:"Gummies CBD acidas", valor: 4000, descripcion:"Envase de 50 unidades acidas, 15mg de CBD por unidad"},
    {img:'media/productos/img16.jpeg', nombre:"Royal PET 10ml", valor: 2200, descripcion:"Gotero de 10 ml, sabor carne."},
    {img:'media/productos/img17.jpeg', nombre:"Royal PET 30ml", valor: 4350, descripcion:"Gotero de 30 ml, sabor carne."},
    {img:'media/productos/img18.jpeg', nombre:"Jabon Royal 110gr", valor: 500, descripcion:"39.9% CBD"},
    {img:'media/productos/img19.jpeg', nombre:"CAFE+CBD", valor: 1250, descripcion:"#"},
    {img:'media/productos/img20.jpeg', nombre:"CAFE+LIQUIDO DE VAPEO", valor: 4500, descripcion:"#"},
    {img:'media/productos/img21.jpeg', nombre:"LINEA ROOT", valor: 3950, descripcion:"#"},

]

//  Card de Productos
const cardProductos = document.getElementById(`exibidorProductos`)

Productos.forEach((prod) => {
    const div = document.createElement('div')
    div.className = "promos, m-1"
    
    div.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img src="${prod.img}" class="card-img-top" alt="${prod.nombre}">
                    <div class="card-body">
                        <h5 class="card-title type-bold">${prod.nombre}</h5>
                        <hr>
					    <p class="card-text text-center">Precio: $${prod.valor}</p>
                        <hr>
                        <p class="card-text">${prod.descripcion}</p>
                    </div>
                </div>
                    `
    
    cardProductos.appendChild(div)
    
})