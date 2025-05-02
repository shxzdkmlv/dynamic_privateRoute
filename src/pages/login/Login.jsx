import React, {memo, useState} from 'react';
import {request} from "../../api/index.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);

        let formData = new FormData(e.target);
        let data = Object.fromEntries(formData);

        request
            .post("auth/login", data)
            .then(res => {
                console.log(res)
                toast.success("Logged in successfully");
                localStorage.setItem("access_token", res?.data?.accessToken)
                navigate("/dashboard")
                e.target.reset()
            })
            .catch(() => {
                toast.error("Username or password is incorrect");
            })
            .finally(() => setLoading(false)); // <-- правильный синтаксис
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                            placeholder="Enter your username"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full flex justify-center items-center gap-2 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 disabled:opacity-70"
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor"
                                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                </svg>
                                Loading...
                            </>
                        ) : (
                            "Sign in"
                        )}
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <span className="text-sm text-gray-600">Don't have an account? </span>
                    <a href="/#" className="text-blue-600 hover:underline">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default memo(Login);
