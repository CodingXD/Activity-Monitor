import { FormEvent, useState } from "react";
import Input from "../components/Input";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [warning, setWarning] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validation
    const warning = {
      username: "",
      password: "",
    };
    let flag = 0;

    if (user.username === "") {
      warning.username = "Required";
      flag = 1;
    }
    if (user.password === "") {
      warning.password = "Required";
      flag = 1;
    }

    setWarning(warning);
    if (flag === 1) return;

    // saving user
    await chrome.storage.managed.set(user);
    navigate("/", { replace: true, state: { user: user.username } });
  };

  return (
    <>
      <div className="bg-gray-800 text-center py-3">
        <h3 className="text-white font-medium">LOGIN</h3>
      </div>
      <form
        onSubmit={handleLogin}
        className="flex flex-col justify-center py-4 px-3 space-y-11"
      >
        <div className="mt-5 space-y-4">
          <Input
            value={user.username}
            onChange={(e) =>
              setUser((prevState) => {
                return {
                  ...prevState,
                  username: e.target.value,
                };
              })
            }
            id="username"
            label="Username"
            error={warning.username}
          />
          <Input
            value={user.password}
            onChange={(e) =>
              setUser((prevState) => {
                return {
                  ...prevState,
                  password: e.target.value,
                };
              })
            }
            id="password"
            label="Password"
            type="password"
            error={warning.password}
          />
        </div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Sign in
        </button>
      </form>
    </>
  );
}

export default Login;
