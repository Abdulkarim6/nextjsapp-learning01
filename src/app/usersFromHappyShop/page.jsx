export const dynamic="force-dynamic"
import UsersFromHappyShop from '../happyShopComponents/UsersFromHappyShop/UsersFromHappyShop';
import { Suspense } from 'react';

const page = () => {
    
    return (
        <div>
         <Suspense fallback={<div className="bg-green-500 p-5 h-10"></div>}> 
             <UsersFromHappyShop/>
         </Suspense>

         <h2 className="text-red-500 font-semibold text-4xl p-5 h-5">I am calls from out of suspense</h2>
        </div>
    );
};

export default page;