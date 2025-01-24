"use client";

import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";
import loadingImage from "../../public/loading.gif";
import Image from "next/image";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useKindeAuth();
  const router = useRouter();

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Image src={loadingImage} alt="Loading..." width={50} height={50} />
      </div>
    );
  if (!isAuthenticated) {
    router.push("/api/auth/login");
    return null;
  }

  return children;
};

export default ProtectedRoute;
