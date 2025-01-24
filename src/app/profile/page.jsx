

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";



// import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import loadingImage from "../../../public/loading.gif";
import { redirect } from "next/navigation";

const Profile = async() => {

    const {getUser} = getKindeServerSession()
    const user = await getUser()
  
  // const { isAuthenticated, isLoading } = useKindeAuth();

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <Image src={loadingImage} alt="Loading..." width={50} height={50} />
  //     </div>
  //   );
  // }
return (
  user ? (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-purple-900">
        Welcome to your profile!
      </h1>
    </div>
  ) : (
    redirect("/api/auth/login")
  ))

  
};

export default Profile;
