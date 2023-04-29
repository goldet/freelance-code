import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import BreadcrumbMenu from "@/components/BreadcrumbMenu";
import FreelancerInfoDisplay from "@/components/FreelancerInfoDislay";

export default function UserDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUser = async () => {
      if (id) {
        try {
          const response = await fetch(
            `http://localhost:3000/api/users/userdetail/${id}`,
            {
              method: "GET",
            }
          );
          const user = await response.json();
          setUser(user);
        } catch (error) {
          setError(error);
        }
      }
    };
    getUser();
  }, [id]);

  return (
    <Layout>
      <div className="w-full max-w-3xl mx-auto mb-24">
        {user ? (
          <>
            <BreadcrumbMenu />
            <FreelancerInfoDisplay user={user} isDashboard={false} />
          </>
        ) : null}
      </div>
    </Layout>
  );
}
