import { getDocs, collection } from 'firebase/firestore';
import { db } from '../utils/firebase/firebase.utils';

import { createContext, useState, useEffect } from "react";

import Button from '../components/button/button-component';

import SHOP_DATA from '../shop-data';

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
    products: [],
})

export const ProductsProvider = ({children}) => {
    const[products, setProducts] = useState([])
    useEffect(() => {
    const getProducts = async () => {
        const querySnapshot = await getDocs(collection(db, 'categories'));
        const productsArray = querySnapshot.docs.map((doc) => doc.data());
        setProducts(productsArray);
    }

  getProducts();
}, []);
    const value = {products}

    

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}