import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";;
import Layout from "../components/Layout";
import { locations, prices, categories, skills } from "../helpers/filters";
import HeroSection from "@/components/HeroSection";
import FreelanceCategories from "@/components/FreelanceCategories";
import FiltersDisplay from "../components/FiltersDisplay";
import SortDisplay from "@/components/SortDisplay";
import useFilters from "../hooks/useFilters"; 
import UserCards from "@/components/UserCards";
import RenderState from "@/components/RenderState";

export default function Home() {
  const router = useRouter();
  const { filter, categoryHandler, locationHandler, sortHandler, priceHandler, searchHandler, skillsHandler } = useFilters(); // call your custom hook here
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    category = "",
    location = "",
    price = "",
    skill = "",
    sort = "newest",
  } = router.query;

  // Get all freelancers & filter
  const getUsers = async () => {
    setLoading(true);
    setError(null);

    let queryString = filter ? `?${filter}` : "";
    try {
      const response = await fetch(
        `http://localhost:3000/api/users${queryString}`
      );
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, [filter]);

  return (
    <Layout>
      <HeroSection searchHandler={searchHandler} />
      <div className="w-full max-w-5xl mx-auto px-4">
        <h2 className="text-2xl mt-6 mb-6">Our freelancers</h2>
        <FreelanceCategories />
        <FiltersDisplay
          locationHandler={locationHandler}
          priceHandler={priceHandler}
          categoryHandler={categoryHandler}
          locations={locations}
          location={location}
          category={category}
          categories={categories}
          price={price}
          prices={prices}
          skillsHandler={skillsHandler}
          skill={skill}
          skills={skills}
        />
        <SortDisplay users={users} sort={sort} sortHandler={sortHandler} />
        <RenderState error={error} loading={loading} users={users} message={ <p>
          No services found that match your search. Why not try a different
          keyword or category?
        </p>}/>
        {users ? <UserCards users={users} /> : null}
        <div className="mt-auto flex justify-center mb-24"></div>
      </div>
    </Layout>
  );
}
