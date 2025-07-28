import Link from "next/link";

// [id routes]
export async function generateMetadata({ params}) {
 const { id } = await params;
 
 const product = await getProduct(id);
 const titleSplit = product?.title.split(" ", 1)
  return {
    title: titleSplit[0],
    description: "product fetching dynamically",
  }
}

export const getProduct = async (id) =>{
      const res = await fetch (`https://dummyjson.com/products/${id}`)
      const data = res.json()
      return data;
}

const ProductPage = async ({ params }) => {
 const { id } = await params;
 const product = await getProduct(id);

  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img src={product?.thumbnail} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.title}</h2>
        <p>{product?.description}</p>
        <p>Price: ${product?.price}</p>
        <div className="card-actions justify-end">
          <Link href={`/products/addProductToCart/${product?.id}`}>
            <button className="btn btn-primary">Add to cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
