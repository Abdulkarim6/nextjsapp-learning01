// [Server side component]
import Link from "next/link";

export const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data;
  //fetch in nextjs server and create html template also the html template send in browser
};

export const metadata = {
  //  title: 'products',
   title: {
    absolute: 'products', 
  },
}

const ProductsPage = async () => {
  const products = await getProducts();
  //console.log(users?.users);

  return (
    <section className="grid grid-cols-3 gap-5">
      {products?.products?.map((product) => (
        <div key={product?.id} className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={product?.thumbnail} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{product?.title}</h2>
            <div className="card-actions justify-end">
              <Link href={`/products/${product?.id}`} className="btn btn-primary">Details</Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductsPage;
