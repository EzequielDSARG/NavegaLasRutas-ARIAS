// Creamos una promesa que simula 
// la resolucion de un array de productos
// luego de un segundo

const products = [
    {
        id: "1",
        title : "Cocodrilo sin lagrimas",
        text: "cocodrilo",
        price: 20,
        img: "/assets/imagen1a.png",
        stock: 5,
        category: "Libros"
    }, 
     {
        id: "2",
        title : "Bichitos",
        text: "bichos",
        price: 10,
        img: "/assets/imagen2a.png",
        stock: 55,
        category: "Libros"
    }, 
     {
        id: "3",
        title : "Equipo Ciber",
        text: "ciber",
        price: 25,
        img: "/assets/imagen3a.png",
        stock: 15,
        category: "Libros",
    },     
]

function getProducts(){
    return new Promise( (resolve, reject) => {  
    //reject("No encontramos los productos")
    setTimeout( () => {
      resolve(products)
    }, 3000)
  })
}

export default getProducts;