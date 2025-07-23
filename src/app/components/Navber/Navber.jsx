import Link from "next/link";
import LoginButton from "../LoginButton/LoginButton";
import LogOutButton from "../LogOutButton/LogOutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

const Navber = async () => {
    const session = await getServerSession(authOptions);
    // console.log("session-from-Navber",session);
    

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
              session?.user?.role == "Admin" ? 
              <li><Link href="/adminDashboard">Dashboard</Link></li>
              :
              <li><Link href="/userDashboard">Dashboard</Link></li>             
            }
        </ul>
        <div className="dropdown dropdown-end">
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
        </div>
      </div>
    </div>
  );
};

export default Navber;
