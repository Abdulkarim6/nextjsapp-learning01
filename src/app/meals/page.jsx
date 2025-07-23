// "use client";
//**get search value from client component and fetching data from nextjs server using the value*/
//**Mixed server and client component*/
// import { useEffect, useState } from "react";
import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";
import Image from "next/image";

const Mealspage = async ({searchParams}) => {
    const query = await searchParams;
    // console.log("query", query);
 // const [meals, setMeals] = useState([]);
 // const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
//       .then((res) => res.json())
//       .then((data) => setMeals(data?.meals))
//       .catch((err) => console.log("err", err));
//   }, [searchQuery]);

const fetchMeals = async () =>{
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query?.searchQuery}`);
        const data = await res.json();
        return data?.meals;
    } catch (error) {
        console.log(error);
        return [];
    }
}
  const meals = await fetchMeals();
  //console.log(meals);

  return (
    <section className=" w-full">
        {/* <div className="flex justify-center items-center">
            <span>Search: </span>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="input input-primary" />
        </div> */}
        <MealSearchInput/>
      <div className="grid grid-cols-4 gap-3">
        {meals?.map((meal) => (
          <div key={meal?.idMeal} className="card bg-base-100 shadow-sm">
            <figure className="px-4 pt-4">
              <Image
                width={350}
                height={350}
                src={meal?.strMealThumb}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{meal?.strMeal}</h2>
              <div className="card-actions">
                <Link href={`/meals/${meal?.idMeal}`} className="btn btn-primary">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mealspage;
