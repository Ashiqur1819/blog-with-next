import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";


const Navbar = async() => {

  const {getUser} = getKindeServerSession()
  const user = await getUser()

    return (
      <nav className="flex items-center justify-between py-6">
        <div>
          <h2 className="text-2xl font-bold text-indigo-900">NextBlog</h2>
        </div>

        <div className="flex items-center gap-6">
          <Link
            className="text-base font-medium text-gray-700"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-base font-medium text-gray-700"
            href="/profile"
          >
            Profile
          </Link>
          {user ? (
            <>
              <Link
                className="bg-red-600 px-4 py-1 rounded-sm text-white font-medium"
                href="/api/auth/logout"
              >
                Log Out
              </Link>
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