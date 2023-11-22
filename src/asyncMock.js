const productos = [
    {
        id: "1",
        name: "Nvidia RTX 2060",
        price: 350000,
        category: "graficas",
        img: "https://http2.mlstatic.com/D_NQ_NP_969632-MLA44356664871_122020-O.webp",
        stock: 12,
        description: "Placa de video Nvidia RTX 2060 6GB"
    },
    {
        id: "2",
        name: "Nvidia RTX 4060",
        price: 640000,
        category: "graficas",
        img: "https://http2.mlstatic.com/D_NQ_NP_849211-MLU70660224689_072023-O.webp",
        stock: 12,
        description: "Placa de video Nvidia RTX 4060 12GB"
    },
    {
        id: "3",
        name: "Radeon RX 6800",
        price: 550000,
        category: "graficas",
        img: "https://http2.mlstatic.com/D_NQ_NP_766765-MLA54412805580_032023-O.webp",
        stock: 12,
        description: "Placa de video Radeon RX 6800 16GB"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.category === productCategory))
        }, 500)
    })
}