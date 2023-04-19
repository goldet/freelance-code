/* custom hook for filtering through the filter categories */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useFilters = () => {
  const router = useRouter();
  const [filter, setFilter] = useState("");

  const filterSearch = ({ category, location, price, skill, search, sort }) => {
    const { query } = router;
    if (category) query.category = category;
    if (location) query.location = location;
    if (price) query.price = price;
    if (skill) query.skill = skill;
    if (search) query.search = search;
    else delete query.search; 
    if (sort) query.sort = sort;

    router.push({
      pathname: router.pathname,
      query: query,
    });

    setFilter(
      Object.entries(query)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")
    );
  };

  const categoryHandler = (e) => {
    filterSearch({ category: e.target.value });
  };
  const locationHandler = (e) => {
    filterSearch({ location: e.target.value });
  };
  const sortHandler = (e) => {
    filterSearch({ sort: e.target.value });
  };
  const priceHandler = (e) => {
    filterSearch({ price: e.target.value });
  };
  const searchHandler = (e) => {
    filterSearch({ search: e.target.value });
  };
  const skillsHandler = (e) => {
    filterSearch({ skill: e.target.value });
  };

  useEffect(() => {
    setFilter(
      Object.entries(router.query)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")
    );
  }, [router.query]);

  return {
    filter,
    categoryHandler,
    locationHandler,
    sortHandler,
    priceHandler,
    searchHandler,
    skillsHandler,
  };
};

export default useFilters;