import ProtectedRoute from "@/routes/ProtectedRoute";

const Profile = () => {
  return (
    <ProtectedRoute>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-purple-900">
          Welcome to your profile!
        </h1>
      </div>
    </ProtectedRoute>
  );
};

export default Profile;
