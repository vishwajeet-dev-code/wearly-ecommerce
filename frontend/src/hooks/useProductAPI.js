import axios from 'axios'
import { useEffect } from 'react';

const useProductAPI = () =>{
    useEffect(() => {
    (async () => {
        let response = await axios.get("https://dummyjson.com/products");
        console.log(response.data);
    })();
    }, []);
}
export default useProductAPI