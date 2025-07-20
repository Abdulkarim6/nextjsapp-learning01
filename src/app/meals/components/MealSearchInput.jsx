"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MealSearchInput = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
    const pathName = usePathname();
    //console.log("pathName", pathName);
    useEffect(() =>{
        const searchItem = { searchQuery }
        const urlQueryParam = new URLSearchParams(searchItem);
        // console.log("urlQueryParam", urlQueryParam);
        const url = `${pathName}?${urlQueryParam}`;
        router.push(url)
    }, [searchQuery])

  return (
    <div>
      <div className="flex justify-center items-center">
        <span>Search: </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input input-primary"
        />
      </div>
    </div>
  );
};

export default MealSearchInput;
