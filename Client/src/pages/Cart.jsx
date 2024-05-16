import { useDispatch, useSelector } from "react-redux";
import HorizontalCard from "../components/horizontalCard";
import { useEffect } from "react";
import { fetchOrders } from "../../features/orderSlice";

export default function Cart() {
    const order = useSelector(state => state.order.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders())
    }, [])

    console.log(order)
  return (
    <div className="cart-container">
      <div className="checkout-container">
        <button className="checkout-button">Checkout</button>
      </div>
      <div className="card__container flex">
        {order.OrderDetails && order.OrderDetails.map(e => (<HorizontalCard key={e.id} order={e}/>))}
      </div>
    </div>
  );
}

