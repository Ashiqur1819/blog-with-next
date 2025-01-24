import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="flex items-center justify-between py-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900">NextBlogs</h2>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <Link className="text-sm md:text-base font-medium text-indigo-900" href="/">
          Home
        </Link>
        <Link className="text-sm md:text-base font-medium text-indigo-900" href="/profile">
          Profile
        </Link>
        {user ? (
          <>
            <LogoutLink className="text-sm md:text-base bg-red-600 px-2 md:px-4 py-1 rounded-sm text-white font-medium">
              Log Out
            </LogoutLink>
          </>
        ) : (
          <>
            <Link
              className="text-sm md:text-base bg-green-600 px-2 md:px-4 py-1 rounded-sm text-white font-medium"
              href="/api/auth/login"
            >
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
