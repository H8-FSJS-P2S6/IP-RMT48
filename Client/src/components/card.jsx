

export default function Card() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl z-0">
      <figure>
        <img
          src="https://static.zara.net/assets/public/d38e/2a81/196f4d058c21/270dc236b4e0/07563860800-530-p/07563860800-530-p.jpg?ts=1715004744759&w=563"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}
