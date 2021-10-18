var promoProductos = [
    {img:'media/info2.jpg', nombre:"Producto", valor: 1800, descripcion:"Descripcion"},
    {img:'media/info2.jpg', nombre:"Producto", valor: 1200, descripcion:"Descripcion"},
    {img:'media/info2.jpg', nombre:"Producto", valor: 950, descripcion:"Descripcion"},
    {img:'media/info2.jpg', nombre:"Producto", valor: 1300, descripcion:"Descripcion"},
    {img:'media/info2.jpg', nombre:"Producto", valor: 950, descripcion:"Descripcion"},

]


//  Card de Productos
const promos = document.getElementById(`exibidorProductos`)

promoProductos.forEach((promo) => {
    const div = document.createElement('div')
    div.className = "promos"
    
    div.innerHTML = `
                    <h2 class="type-bold type-sm text-capitalize pt-2 text-center">${promo.nombre}</h2>
                    <img src=${promo.img} width="200px" class="d-block"  alt="...">
                    <div>	
					    <p class=" type-bold type-md text-center">Precio:${promo.valor}</p>
				    </div>
                    <div class="descripcionProducto text-center">
				    	<p class="type-s"><strong>Descripcion</strong>:${promo.descripcion}</p>
				    </div>
                    `
    
    promos.appendChild(div)
    
})