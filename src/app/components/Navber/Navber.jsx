import Link from "next/link";
import React from "react";

const Navber = () => {
  const isAdmin = false;
  

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center flex">
        <ul className="menu menu-horizontal px-1">
            <li><Link href="/">home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/users">Users</Link></li>
            <li><Link href="/meals">Meals</Link></li>
            <li><Link href="/carts">CartsFromDb</Link></li>
            <li><Link href="/carts/addToCart">AddToCart</Link></li>
            {
              isAdmin ? 
              <li><Link href="/adminDashboard">Dashboard</Link></li>
              :
              <li><Link href="/userDashboard">Dashboard</Link></li>             
            }
        </ul>
      </div>
    </div>
  );
};

export default Navber;
