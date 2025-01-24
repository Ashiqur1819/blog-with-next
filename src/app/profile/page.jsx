"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import loadingImage from "../../../public/loading.gif";

const Profile = () => {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Image src={loadingImage} alt="Loading..." width={50} height={50} />
      </div>
    );
  }

  if (!isAuthenticated) {
    router.push("/api/auth/login");
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 text-center">
        Welcome To My Profile!
      </h1>
    </div>
  );
};

export default Profile;
