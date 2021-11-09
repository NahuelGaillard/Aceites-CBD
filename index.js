var promoProductos = [
    {img:'media/productos/promo1.jpeg', nombre:"Promo 1", valor: "$4000 c/u", descripcion:"Llevando 2 aceites de 30 ML (vale pet)"},
    {img:'media/productos/promo2.jpeg', nombre:"Promo 2", valor: "700 c/u", descripcion:"Llevando 2 ungüentos"},
    {img:'media/productos/promo3.jpeg', nombre:"Promo 3", valor: "2000 c/u", descripcion:"Llevando 2 aceies de 10ml"},
    {img:'media/productos/promo4.jpeg', nombre:"Promo 4", valor: "4500 c/u", descripcion:"Llevando 2 fish CBD oil"},
    {img:'media/productos/promo5.jpeg', nombre:"Promo 5", valor: "3750 c/u", descripcion:"Llevando 2 Gummies CBD"},

]


//  Card de Productos
const promos = document.getElementById(`exibidorProductos`)

promoProductos.forEach((promo) => {
    const div = document.createElement('div')
    div.className = "promos"
    
    div.innerHTML = `
    <div class="card mb-3">
        <h5 class="card-title type-bold">${promo.nombre}</h5>
        <img src="${promo.img}" class="card-img-top" alt="${promo.nombre}">
        <div class="card-body color-black ">
            <p class="card-text text-center type-bold">Precio: $${promo.valor}</p>
            <p class="card-text">${promo.descripcion}</p>
        </div>
    </div>
                    `
    
    promos.appendChild(div)
    
})