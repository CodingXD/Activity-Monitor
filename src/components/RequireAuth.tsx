import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(false);
    // if (!user) {
    //   chrome.storage.managed
    //     .get("user")
    //     .then((user) => {
    //       setLoading(false);
    //       console.log({ user });
    //       setUser(user as any);
    //     })
    //     .catch((err) => console.log(err));
    // }
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full">
        <div className="animate-spin h-5 w-5"></div>
      </div>
    );
  }

  return <Outlet />;
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
