"use client";

import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useKindeAuth();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) {
    router.push("/api/auth/login");
    return null;
  }

  return children;
};

export default ProtectedRoute;
