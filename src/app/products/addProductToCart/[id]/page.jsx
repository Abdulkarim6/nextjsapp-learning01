import AddProductToCartForm from "@/app/products/components/AddProductToCartForm/AddProductToCartForm";
import { getProduct } from "../../[id]/page";

const addProductToCartPage = async ({params}) => {
     const { id } = await params;
    const product = await getProduct(id);
    console.log("addProductToCartPage", product);
    

    return (
      <div>
        <h2>addProductToCart</h2>
        <AddProductToCartForm product={product}></AddProductToCartForm>
      </div>
    );
};

export default addProductToCartPage;