import Link from "next/link";


const Navbar = () => {
    return (
      <nav className="flex items-center justify-between py-6">
        <div>
          <h2 className="text-3xl font-bold">BlogWithNext</h2>
        </div>

        <div className="flex items-center gap-6">
          <Link
            className="text-base font-medium uppercase text-gray-700"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-base font-medium uppercase text-gray-700"
            href="/profile"
          >
            Profile
          </Link>
          <Link
            className="bg-green-600 px-4 py-1 rounded-sm text-white font-medium uppercase"
            href="/"
          >
            Log In
          </Link>
          <Link
            className="bg-red-600 px-4 py-1 rounded-sm text-white font-medium uppercase"
            href="/"
          >
            Log Out
          </Link>
        </div>
      </nav>
    );
};

export default Navbar;