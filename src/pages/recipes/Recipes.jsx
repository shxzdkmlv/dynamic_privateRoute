import React, { memo } from 'react';
import { useFetch } from '../../hooks/useFetch.jsx';
import {useNavigate} from "react-router-dom";

const Recipes = () => {
    const { data, error, loading } = useFetch('recipes');

    const navigate = useNavigate();

    if (error) {
        return <p className="text-center text-red-600 text-lg">Something went wrong</p>;
    }

    if (!data || !Array.isArray(data.recipes)) {
        return <p className="text-center text-red-600 text-lg">No recipes found</p>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            {loading && <p className="text-center text-gray-500">Loading...</p>}

            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">Recipe Collection</h2>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data.recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                    >
                        <div className="h-48 w-full bg-gray-100 overflow-hidden">
                            <img
                                onClick={() => navigate(`/product/${recipe.id}`)}
                                src={recipe.image}
                                alt={recipe.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{recipe.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">Difficulty: {recipe.difficulty}</p>
                            <div className="flex flex-wrap text-sm text-gray-600 gap-2 mt-auto">
                                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                                    {recipe.cuisine}
                                </span>
                                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                    {recipe.mealType[0]} {/* Пример для первого типа блюда */}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(Recipes);
