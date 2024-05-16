export default function HorizontalCard({order}){

    return (
        <div className="card h__card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={order.Product.imgUrl}
            alt="Album"
            className=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{order.Product.name}</h2>
          <p>Price: {order.Product.description}</p>
          <p>Price: {order.Product.price}</p>
          <p>Size: {order.size}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Update</button>
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    )
}