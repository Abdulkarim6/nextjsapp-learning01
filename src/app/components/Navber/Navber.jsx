'use client'
import { clearUsers } from "@/app/actions/usersFromHappyShop/clearUsers";
import Link from "next/link";
import { useState } from "react";
// import LoginButton from "../LoginButton/LoginButton";
// import LogOutButton from "../LogOutButton/LogOutButton";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../../../lib/authOptions";

// const Navber = async () => {
const Navber =  () => {
    // const session = await getServerSession(authOptions);
    const handleClear = async() =>{
      const res = await clearUsers();
      console.log(res); 
    }

      const [active, setActive] = useState(false);

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center flex">
        <ul className="menu menu-horizontal space-x-5 px-1">
            <button onClick={()=> handleClear()}>Clear-Users-cache</button>
            <Link
            prefetch={active ? true : true}
            onMouseEnter={() => setActive(true)}
            href="/usersFromHappyShop">UsersFromHappyShop</Link>
            <Link href="/">home</Link>
            {/* <Link href="/products">Products</Link>
            <Link href="/productsBookingCart">ProductsCart</Link>
            <Link href="/about">About</Link>
            <Link href="/users">Users</Link>
            <Link href="/meals">Meals</Link>
            <Link href="/laptops">LaptopsFromDb</Link>
            <Link href="/laptops/addLaptopToCart">AddLaptopToCart</Link> */}
            {/* {
              session?.user?.role == "Admin" ? 
              <Link href="/adminDashboard">Dashboard</Link>
              :
              <Link href="/userDashboard">Dashboard</Link>       
            } */}
        </ul>
        {/* <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-primary m-1">Click</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 text-black rounded-box z-1 w-40 p-2 shadow-sm">
           {
              session?.user?.name ?
              <li><LogOutButton/></li>
              :
              <li><LoginButton/></li>
            }        
              <li><Link href="/register">Register</Link></li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Navber;
