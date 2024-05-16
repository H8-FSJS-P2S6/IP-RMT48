import { useDispatch, useSelector } from "react-redux";
import HorizontalCard from "../components/horizontalCard";
import { useEffect } from "react";
import { deleteProductFromCart, fetchOrders, updateProductFromCart } from "../../features/orderSlice";

export default function Cart() {
    const order = useSelector(state => state.order.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders())
    }, [])

    const handleDelete = async (id) => {
        dispatch(deleteProductFromCart(id));
    }

    const handleSubmit = async (id, size) => {
      dispatch(updateProductFromCart(id, size))
    }

  return (
    <div className="cart-container">
      <div className="checkout-container">
        <button className="checkout-button">Checkout</button>
      </div>
      <div className="card__container flex">
        {order.OrderDetails && order.OrderDetails.map(e => (<HorizontalCard onDelete={handleDelete} onUpdate={handleSubmit} key={e.id} order={e}/>))}
      </div>
    </div>
  );
}

