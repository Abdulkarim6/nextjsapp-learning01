import React from 'react';
import { getProducts } from '../actions/products/getProducts';
import ProductDeleteButton from './components/ProductDeleteButton';
import Link from 'next/link';

const productsBookingCartPage = async () => {
   const data = await getProducts();
  //  data.map((p) => console.log("productsBookingCartPage", p));
   
    return (
      <div className="overflow-x-auto px-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>Address</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((product) => (
              <tr key={product?._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={product?.thumbnail}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product?.title}</div>
                    </div>
                  </div>
                </td>

                <td>{product?.number}</td>
                <td>{product?.address}</td>
                <td>${product?.price}</td>
                <th>
                   <Link href={`/productsBookingCart/bookingUpdate/${product?._id}`}>
                      <button className="btn btn-ghost btn-xs">Update</button>
                   </Link>
                </th>
                <th>
                  <ProductDeleteButton id={product?._id}></ProductDeleteButton>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default productsBookingCartPage;