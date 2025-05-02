import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch.jsx'; // Это твой кастомный хук для загрузки данных

const UserProfile = () => {
    const { id } = useParams();
    const { data, error, loading } = useFetch(`users/${id}`); // Делаем запрос на получение данных пользователя

    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    if (error || !data) {
        return <p className="text-center text-red-600">Something went wrong</p>;
    }

    const {
        firstName,
        lastName,
        age,
        gender,
        email,
        phone,
        address,
        company,
        role,
        image,
    } = data;

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row gap-10">

                <div className="w-full md:w-1/3">
                    {image ? (
                        <img
                            src={image}
                            alt={`${firstName} ${lastName}`}
                            className="w-full h-auto object-cover rounded-full shadow-lg"
                        />
                    ) : (
                        <div className="w-full h-auto bg-gray-300 text-white flex items-center justify-center text-3xl font-bold rounded-full shadow-lg">
                            {firstName[0]}{lastName[0]}
                        </div>
                    )}
                </div>


                <div className="w-full md:w-2/3">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        {firstName} {lastName}
                    </h1>

                    <div className="text-gray-600 mb-4">
                        <p className="text-lg font-semibold">Age: {age}</p>
                        <p className="text-lg font-semibold">Gender: {gender}</p>
                        <p className="text-lg font-semibold">Email: {email}</p>
                        <p className="text-lg font-semibold">Phone: {phone}</p>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">Address:</h3>
                        <p className="text-gray-600">
                            {address?.address}, {address?.city}, {address?.state} {address?.postalCode}
                        </p>
                    </div>

                    {company && (
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">Company:</h3>
                            <p className="text-gray-600">{company.name}</p>
                            <p className="text-gray-600">Department: {company.department}</p>
                            <p className="text-gray-600">
                                {company.address?.address}, {company.address?.city}
                            </p>
                        </div>
                    )}

                    <div className="mt-6">
                        <span className="font-semibold text-gray-800">Role: </span>
                        <span className="text-gray-600">{role}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(UserProfile);
