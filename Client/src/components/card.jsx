import { Link } from "react-router-dom";


export default function Card({product}) {
  return (
    <div className="card v__card w-96 bg-base-100 shadow-xl z-0 rounded-lg">
      <Link>
      <figure>
        <img
          src={product.imgUrl}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.name}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{product.Category.name}</div>
          {/* <div className="badge badge-outline">Products</div> */}
        </div>
      </div>
      </Link>
    </div>
  );
}
