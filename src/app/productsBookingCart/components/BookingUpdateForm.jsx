"use client";
import { postProduct } from '@/app/actions/products/postProduct';
import { updateBooking } from '@/app/actions/products/updateBooking';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const BookingUpdateForm = ({product}) => {
    console.log(product);
     const { data } = useSession();
     const router = useRouter();
     console.log("BookingUpdateForm", product);
     
     const handleSubmit = async (e) => {
       e.preventDefault();
       const form = e.target;
       const date = form?.date?.value;
       const address = form?.address?.value;
       const number = form?.number?.value;

       const payload = {
        // send for load specific product
         _id : product?._id,

         //user input
         date,
         address,
         number,
       };
    //    console.log("payload", payload);
       const updatedres = await updateBooking(payload);
       console.log("updatedres", updatedres);
       
    //    const res = await postProduct(payload);
       if (updatedres?.acknowledged) {
         router.push("/productsBookingCart");
       }
       
     };
    return (
        <section>
            <h1 className='text-center font-semibold text-xl'>Product Name: {product?.title}</h1>
        <form onSubmit={handleSubmit} className="flex w-full bg-base-200 mt-5">
      <div className="card bg-base-100 w-[800px] shrink-0 shadow-2xl mx-auto">
        <div className="card-body flex-row">
              <div className="w-full flex flex-col px-10">
                <label className="label">Name</label>
                <input type="text" defaultValue={data?.user?.name} readOnly name="userName" className="input" placeholder="Your Name" />
                <label className="label">Email</label>
                <input type="email" defaultValue={data?.user?.email} readOnly name="email" className="input" placeholder="Email" />
                 <label className="label">price:$</label>
                <input type="number" defaultValue={product?.price} readOnly name="price" className="input" placeholder="Price" />
              </div>
              <div className="w-full flex flex-col">
                <label className="label">Date</label>
                <input type="date" defaultValue={product?.date} name="date" className="input" placeholder="Date" />
                <label className="label">Address</label>
                <input type="text" defaultValue={product?.address} name="address" className="input" placeholder="Address" />
                <label className="label">Phone</label>
                <input type="number" defaultValue={product?.number} name="number" className="input" placeholder="Number" />
               
              </div>

        </div>
            <button className="btn btn-neutral mt-4">update booking</button>
      </div>
    </form>
    </section>
    );
};

export default BookingUpdateForm;