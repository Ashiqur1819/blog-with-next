"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";
import loadingImage from "../../../public/loading.gif";
import Image from "next/image";

const Profile = async () => {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  const router = useRouter();
    const {getUser} = getKindeServerSession()
    const user=  await getUser()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Image src={loadingImage} className="w-12" alt="Loading" />
      </div>
    );
  }


  if (isAuthenticated && user) {
        <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-purple-900">
        Welcome to your profile!
      </h1>
    </div>
  }

  return router.push("/api/auth/login");

};

export default Profile;
