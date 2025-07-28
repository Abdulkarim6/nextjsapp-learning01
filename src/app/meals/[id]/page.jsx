import Link from "next/link";

export const getMeal = async (id) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await res.json();
  return data;
};

const MealPage = async ({ params }) => {
  const { id } = await params;
  const data = await getMeal(id);
  const meal = await data?.meals[0];
  console.log("15", meal);
  

  return (
    <div className="card card-side bg-base-100 w-full shadow-sm p-5">
      <figure className="w-1/3">
        <img src={meal?.strMealThumb} alt="Movie" />
      </figure>
      <div className="card-body w-2/3">
        <h2 className="card-title">{meal?.strMeal}</h2>
        <p>Description: {meal?.strInstructions}</p>
        <div className="card-actions justify-evenly items-center">
          <p className="">Price: $5</p>
          <Link href={`/meals/addMealToCart/${meal?.idMeal}`}>
            <button className="btn btn-outline">Add to cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealPage;
