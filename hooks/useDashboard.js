import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import GeneralLoadingMessage from "@/components/GeneralLoadingMessage";

export default function useDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { successMessage } = router.query;
  const [successEmpty, setSuccessEmpty] = useState("");

  const [userDeleted, setUserDeleted] = useState(false);
  const [popup, setPopup] = useState({
    show: false,
    user_id: null,
  });

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (successMessage) {
      setSuccessEmpty(decodeURIComponent(successMessage));
      setTimeout(() => {
        setSuccessEmpty("");
      }, 3000);
    }
  }, [successMessage]);

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const tokenPayload = JSON.parse(
        Buffer.from(token.split(".")[1], "base64").toString("utf-8")
      );

      if (token) {
        try {
          const response = await fetch(
            `http://localhost:3000/api/users/userdetail/${tokenPayload.user_id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = await response.json();
          setUser(data);
        } catch (error) {}
      }
    };

    getUser();
  }, []);

  // open edit profile page
  const openEditProfile = (user_id) => {
    router.push(`/editprofile/${user_id}`);
  };

  // trigger popup
  const handleDelete = (user_id) => {
    setPopup({
      show: true,
      user_id,
    });
  };

  const handleDeleteTrue = async (user_id) => {
    if (popup.show && popup.user_id) {
      try {
        await fetch(
          `http://localhost:3000/api/users/userdetail/${popup.user_id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setPopup({
          show: false,
          user_id: null,
        });
        removeToken();

        setUserDeleted(true);
        function sleep(ms) {
          return new Promise((resolve) => setTimeout(resolve, ms));
        }

        await sleep(2000);
        router.push("/");
      } catch (error) {
        setError("Oops! Something went wrong. Try again later");
      }
    }
  };

  const handleDeleteFalse = () => {
    setPopup({
      show: false,
      user_id: null,
    });
  };

  return {
    user,
    handleDelete,
    handleDeleteFalse,
    handleDeleteTrue,
    successMessage,
    userDeleted,
    openEditProfile,
    popup,
    successEmpty
  };
}
