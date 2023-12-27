import { query, where, getDocs, collection, doc, getDoc } from 'firebase/firestore'
import {db} from './services/firebase/firebaseConfig'

const products = [
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
        price: 640000,
        category: "graficas",
        img: "https://http2.mlstatic.com/D_NQ_NP_849211-MLU70660224689_072023-O.webp",
        stock: 12,
        description: "Placa de video Nvidia RTX 4060 12GB"
    },
    {
        id: "3",
        price: 550000,
        category: "graficas",
        img: "https://http2.mlstatic.com/D_NQ_NP_766765-MLA54412805580_032023-O.webp",
        stock: 12,
        description: "Placa de video Radeon RX 6800 16GB"
    },
    {
        id: "4",
        name: "Kumara K552",
        price: 55000,
        category: "teclados",
        img: "https://mla-s1-p.mlstatic.com/883405-MLA50985089014_082022-F.jpg",
        stock: 5,
        description: "Red Dragon Kumara K552 (White) Purple Switch"
    },
    {
        id: "5",
        name: "Razer Huntsman",
        price: 95000,
        category: "teclados",
        img: "https://http2.mlstatic.com/D_NQ_NP_673991-MLA51163754164_082022-O.webp",
        stock: 4,
        description: "Razer Huntsman V2 QWERTY (Ingles US)"
    },
    {
        id: "6",
        name: "Samsung Odyssey",
        price: 330000,
        category: "monitores",
        img: "https://mla-s1-p.mlstatic.com/834906-MLA52555960227_112022-F.jpg",
        stock: 15,
        description: "Samsung Odyssey 27'' 240hz"
    },
    {
        id: "7",
        name: "AOC G2790VX",
        price: 275000,
        category: "monitores",
        img: "https://gorilagames.com/img/Public/1019-producto-1-9993.jpg",
        stock: 7,
        description: "AOC 27'' 1ms 144hz"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductsById = async (productId) => {
    const productRef = doc(db, 'items', productId)
    const productSnap = await getDoc(productRef)
    return productSnap.data()
}

export const getProductsByCategory = async (productsCategory) => {
    try {
        const q = query(collection(db, 'items'), where('category', '==', productsCategory));
        const querySnapshot = await getDocs(q);

        const productsData = [];

        querySnapshot.forEach((doc) => {
            productsData.push({ id: doc.id, ...doc.data() });
        });

        return productsData;
    } catch (error) {
        console.error('Error fetching products by category:', error);
        throw error;
    }
};