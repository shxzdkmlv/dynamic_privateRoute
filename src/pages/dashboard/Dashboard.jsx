import React, { memo } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {

    const data = {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Sales Overview'
            }
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="p-5 text-2xl font-semibold">Admin Panel</div>
                <div className="flex-1 px-2 py-4">
                    <ul>
                        <li className="my-2">
                            <NavLink to="/dashboard" className="block px-4 py-2 hover:bg-gray-700 rounded-md">Dashboard</NavLink>
                        </li>
                        <li className="my-2">
                            <NavLink to="blog" className="block px-4 py-2 hover:bg-gray-700 rounded-md">Blog</NavLink>
                        </li>
                        <li className="my-2">
                            <NavLink to="settings" className="block px-4 py-2 hover:bg-gray-700 rounded-md">Settings</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="text-3xl font-bold text-gray-800">Dashboard</div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                Add New
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex justify-between items-center">
                            <div className="text-gray-600">Total Recipes</div>
                            <div className="text-3xl font-semibold text-blue-600">120</div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex justify-between items-center">
                            <div className="text-gray-600">Total Users</div>
                            <div className="text-3xl font-semibold text-green-600">350</div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex justify-between items-center">
                            <div className="text-gray-600">Total Sales</div>
                            <div className="text-3xl font-semibold text-yellow-600">$4,500</div>
                        </div>
                    </div>
                </div>

                {/* Chart Section */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Sales Overview</h3>
                    <div className="h-60 bg-gray-200 rounded-lg">
                        <Line data={data} options={options} />
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
                    <ul>
                        <li className="border-b py-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Recipe Added</span>
                                <span className="text-gray-400 text-sm">10 mins ago</span>
                            </div>
                            <p className="text-gray-800">New recipe "Margherita Pizza" added to the database.</p>
                        </li>
                        <li className="border-b py-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600">User Registered</span>
                                <span className="text-gray-400 text-sm">1 hour ago</span>
                            </div>
                            <p className="text-gray-800">New user "John Doe" registered.</p>
                        </li>
                        <li className="py-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Recipe Updated</span>
                                <span className="text-gray-400 text-sm">2 hours ago</span>
                            </div>
                            <p className="text-gray-800">Recipe "Vegetarian Stir-Fry" was updated.</p>
                        </li>
                    </ul>
                </div>
                {/* Outlet to render child components */}
                <div className="mt-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default memo(Dashboard);
