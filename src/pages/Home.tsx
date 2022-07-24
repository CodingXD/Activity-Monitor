import { LogoutIcon, UserIcon } from "@heroicons/react/solid";
import { useLocation } from "react-router-dom";

function Home() {
  const { state } = useLocation() as { state: { user: string } | null };
  return (
    <>
      <div className="bg-gray-800 py-3 flex justify-center">
        <h3 className="text-white text-center font-medium flex-1">
          ACTIVITY MONITOR
        </h3>
        <LogoutIcon className="h-5 w-5 text-white mr-2" />
      </div>
      <div className="min-w-[400px] flex flex-col items-center justify-center py-4 px-3 space-y-11">
        <UserIcon className="h-1/4 w-1/4 bg-white rounded-full p-5 shadow mt-12" />
        <p>Hi {state?.user}</p>
      </div>
    </>
  );
}

export default Home;
