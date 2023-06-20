import { useRef } from "react";
import "../App.css";

export const SignUpForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // where our front-end communicates with our back-end
  const handleSubmit = async (e: React.FormEvent) => {
    // prevent default behavior of form submission, which is to refresh the page
    e.preventDefault();
    // handle submit

    // get the values from the input fields
    const username = usernameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json();
    return data;
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen">
      <h1>Sign up</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form action="" className="flex flex-col gap-y-4 rounded">
          <input
            ref={usernameRef}
            // id: used for label
            id="username"
            //   name: used for form submission
            name="username"
            //   type: used for input type
            type="text"
            //   placeholder: used for placeholder text
            required
            placeholder="Username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <button
            onClick={handleSubmit}
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create account
          </button>
        </form>

        <div className="text-center text-sm mt-4 text-black">
          <p>Already have an account?</p>
          <a href="/login" className="text-blue-500 hover:text-blue-700">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
