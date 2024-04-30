import { Category } from "@/types"


const getCategory = async ( id : string ) : Promise<Category> => {
    const URL = `${process.env.PUBLIC_API_URL}/categories/${id}`;
    console.log(URL);
    
    const res = await fetch(URL);

    return res.json();
} 

export default getCategory;