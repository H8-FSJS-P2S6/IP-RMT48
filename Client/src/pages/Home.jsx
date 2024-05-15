import { useDispatch, useSelector } from "react-redux";
import Card from "../components/card";
import axios from "axios";
import { setFetchProducts } from "../../features/productSlice";
import { useEffect } from "react";

export default function Home(){
    const productRedux = useSelector(state => state.product.list);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        try {
            const {data} = await axios({
                method: 'get',
                url: 'http://localhost:3000/products',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzE1Nzk3NTU0fQ.gTtKAF-l-FIZPPlnUULHke5QufM73NrB7ZOSjGm3u_M'
                }
            })
            dispatch(setFetchProducts(data))
        } catch (error) {
            console.log(error)
        }
    }
    
    
    useEffect(() => {
        fetchProducts();
    }, [])

    console.log(productRedux)
    return (
        <div className='card__container flex'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    )
}