"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";
import loadingImage from "../../../public/loading.gif";
import Image from "next/image";

const Profile = () => {
  const { isAuthenticated, isLoading, error } = useKindeBrowserClient();

  // Debugging logs
  console.log("isLoading:", isLoading);
  console.log("isAuthenticated:", isAuthenticated);
  console.log("error:", error);

  if (isLoading) {
    // Show a loading spinner
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Image src={loadingImage} className="w-12" alt="Loading..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-red-500">Authentication Error: {error.message}</h1>
      </div>
    );
  }

  if (!isAuthenticated) {
    redirect("/api/auth/login"); // Redirect to login if not authenticated
  }

  // Render the profile page if authenticated
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-purple-900">
        Welcome to your profile!
      </h1>
    </div>
  );
};

export default Profile;
