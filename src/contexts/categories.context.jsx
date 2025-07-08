// import { getDocs, collection } from 'firebase/firestore';
// import { db } from '../utils/firebase/firebase.utils';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

import { createContext, useState, useEffect } from "react";

// import Button from '../components/button/button-component';

// import SHOP_DATA from '../shop-data';

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({children}) => {
    const[categoriesMap, setCategoriesMap] = useState({})

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap)
            
            // const querySnapshot = await getDocs(collection(db, 'categories'));
            // const productsArray = querySnapshot.docs.map((doc) => doc.data());
            // setProducts(productsArray);
    }

    getCategoriesMap();
}, []);

    const value = {categoriesMap}

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}