import { Product } from "@/types"


const getProduct = async ( id : string ) : Promise<Product> => {
    const URL = `${process.env.PUBLIC_API_URL}/products/${id}`
    console.log(URL);
    
    const res = await fetch(URL)

    return res.json();
} 

export default getProduct