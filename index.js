var promoProductos = [
    {img:'media/productos/img1.jpg', nombre:"Gotero Royal 10ml", descripcion:"El Aceite Sublingual Calidad Premium Royal Importado 39,9 % de CBD, Disponible tambien en su tamaño de 30ml"},
    {img:'media/productos/img6.jpg', nombre:"Ungüento de Peru 90gr",  descripcion:"Envase de 90 gramos"},
    {img:'media/productos/img8.jpeg', nombre:"Aceite de THC Naranja 10ml", descripcion:"Ratio 1a1: 50% de indica y 50% sativa."},
    {img:'media/productos/img14.jpeg', nombre:"Gummies CBD", descripcion:"Envase de 50 unidades acidas,Contienen 15 mg de CBD, ayuda a aprovechar los numerosos beneficios de salud y bienestar del CBD."},
    {img:'media/productos/img15.jpeg', nombre:"Gummies CBD acidas", descripcion:"Envase de 50 unidades acidas, Contienen 15 mg de CBD"},

]


//  Card de Productos
const promos = document.getElementById(`exibidorProductos`)

promoProductos.forEach((promo) => {
    const div = document.createElement('div')
    div.className = "promos"
    
    div.innerHTML = `
    <div class="card mb-3">
        <h5 class="card-title p-1">${promo.nombre}</h5>
        <img src="${promo.img}" class="card-img-top" alt="${promo.nombre}">
        <div class="card-body type-sm color-black">
            <p class="card-text">${promo.descripcion}</p>
        </div>
    </div>
                    `
    
    promos.appendChild(div)
    
})