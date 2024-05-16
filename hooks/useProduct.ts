import {Product} from "@/types/product";
import {config} from "@/constants/url"
import { useEffect, useState } from "react";

interface ProductGroup{
    [key:string]: Product[];
}

function useProduct(){
    const [products, setProduct] = useState<Product[]>([]);
    const [categories, setCategories] =useState<string[]>([]);
    const [productGroup, setProductGroup] = useState<ProductGroup>();
    
    useEffect (() =>{
        const fetchData = async () => {
            const response = await fetch (config.BASE_URL+config.endpoints.products);
            const data = await response.json() as Product[];

            const uniqueCategories = new Set (data.map(product => product.category));
            const categoriesArray = Array.from(uniqueCategories);
            const groupData:ProductGroup ={};

            console.log("Raw data: ", data);
            console.log("Categories: ", categoriesArray);

            categoriesArray.forEach(category => {
                const currentCategoryProducts = data.filter(product => product.category === category)
                groupData[category] = currentCategoryProducts;                
            });
            setProductGroup(groupData);
            setCategories(categoriesArray);
            setProduct(data);
        }
        fetchData();
    },[])

    return{products, productGroup, categories}
}

 export default useProduct;