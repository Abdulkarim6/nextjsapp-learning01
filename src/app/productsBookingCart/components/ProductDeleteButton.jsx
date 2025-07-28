"use client"

import { deleteProduct } from "@/app/actions/products/deleteProduct";
import { useRouter } from "next/navigation";

const ProductDeleteButton = ({id}) => {
  const router = useRouter();

    const handleDelete = async (id) => {
      const res = await deleteProduct(id);
      if( res?.acknowledged){
        alert("deleted successfully")      
        router.refresh();
      }
    }
    
  return (
    <button onClick={() => handleDelete(id)} className="btn btn-ghost btn-xs">
      delete
    </button>
  );
  // return <></>;
};

export default ProductDeleteButton;