import React from 'react';
import BookingUpdateForm from '../../components/BookingUpdateForm';
import { getProduct } from '@/app/actions/products/getProduct';

const bookingUpdatePage = async ({params}) => {
    const { id } = await params;

   const product = await getProduct(id);
//    console.log("bookingUpdatePage",product);
   
    
    return (
      <div>
        <BookingUpdateForm product={product}></BookingUpdateForm>
      </div>
    );
};

export default bookingUpdatePage;