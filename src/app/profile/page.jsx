import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";

const Profile = () => {
  const { isAuthenticated, isLoading} = useKindeBrowserClient();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated");
    } else {
      console.log("User is not authenticated");
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    return <p>User is logged out</p>;
  }

  return (
    <div>
      <h1>Welcome to your profile</h1>
    </div>
  );
};

export default Profile;
