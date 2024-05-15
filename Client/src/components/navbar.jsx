import "./navbar.css";
export default function Navbar() {
  return (
    <div className="drawer rounded-full">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-100">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">Fashionate</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 h-10 md:w-auto"
                />
              </div>
              <li>
                <a>My Orders</a>
              </li>
              <li>
                <a>Cart</a>
              </li>
              <li>
                <button>
                  <a>logout</a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* drawer */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 h-10 md:w-auto"
                />
              </div>
          <li>
            <a>My Orders</a>
          </li>
          <li>
            <a>Cart</a>
          </li>
          <li>
            <button>logout</button>
          </li>
        </ul>
      </div>
       {/* drawer */}
    </div>
  );
}