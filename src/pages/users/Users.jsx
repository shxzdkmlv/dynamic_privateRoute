import React, { memo } from 'react';
import { useFetch } from '../../hooks/useFetch.jsx';
import {useNavigate} from "react-router-dom";

const Users = () => {
    const { data, error, loading } = useFetch('users');
    const navigate = useNavigate();

    if (error) {
        return <p className="text-center text-red-600 text-lg">Something went wrong</p>;
    }


    if (!data || !Array.isArray(data.users)) {
        return <p className="text-center text-red-600 text-lg">No users found</p>;
    }

    const getUserInitials = (firstName, lastName) => {
        const firstInitial = firstName[0].toUpperCase();
        const lastInitial = lastName[0].toUpperCase();
        return `${firstInitial}${lastInitial}`;
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            {loading && <p className="text-center text-gray-500">Loading...</p>}

            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">Users</h2>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data.users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                    >
                        <div onClick={() => navigate(`/user/${user.id}`)} className="h-48 w-full bg-gray-100 flex items-center justify-center">

                                <div className="h-40 w-40 rounded-full bg-blue-500 text-white flex items-center justify-center text-6xl text-bold">
                                    {getUserInitials(user.firstName, user.lastName)}
                                </div>

                        </div>
                        <div className="p-5 flex flex-col flex-1">
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{user.firstName} {user.lastName}</h3>
                            <p className="text-sm text-gray-500 mb-2">Email: {user.email}</p>
                            <div className="flex flex-wrap text-sm text-gray-600 gap-2 mt-auto">
                                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                                    {user.role}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(Users);
