"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";
import loadingImage from "../../../public/loading.gif";
import Image from "next/image";

const Profile = async() => {
  const { isAuthenticated, isLoading} = useKindeBrowserClient();
  const router = useRouter();
  const isAuth = await isAuthenticated()
  const isLoad = await isLoading()

  if (isLoad) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Image src={loadingImage} className="w-12" alt="Loading" />
      </div>
    );
  }


  if (!isAuth) {
    router.push("/api/auth/login");
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-purple-900">
        Welcome to your profile!
      </h1>
    </div>
  );
};

export default Profile;
