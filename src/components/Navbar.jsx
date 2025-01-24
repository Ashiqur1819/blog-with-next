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

      <div className="flex items-center gap-6">
        <Link className="text-base font-medium text-indigo-900" href="/">
          Home
        </Link>
        <Link className="text-base font-medium text-indigo-900" href="/profile">
          Profile
        </Link>
        {user ? (
          <>
            <LogoutLink className="bg-red-600 px-4 py-1 rounded-sm text-white font-medium">
              Log Out
            </LogoutLink>
          </>
        ) : (
          <>
            <Link
              className="bg-green-600 px-4 py-1 rounded-sm text-white font-medium"
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
