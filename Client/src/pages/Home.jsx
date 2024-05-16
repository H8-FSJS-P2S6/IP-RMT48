import { useDispatch, useSelector } from "react-redux";
import Card from "../components/card";
import { fetchProducts } from "../../features/productSlice";
import { useEffect } from "react";
import '../index.css'

export default function Home(){
    const products = useSelector(state => state.product.list);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    console.log(products, "ini products")
    return (  
        <div className='card__container flex'>
            {products && products.map(e => (<Card key={e.id} product={e}/>))}
        </div>
    )
}