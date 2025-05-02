import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch.jsx';

const Product = () => {
    const { id } = useParams();
    const { data, error, loading } = useFetch(`recipes/${id}`);

    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    if (error || !data) {
        return <p className="text-center text-red-600">Something went wrong</p>;
    }

    const {
        name,
        ingredients,
        instructions,
        prepTimeMinutes,
        cookTimeMinutes,
        servings,
        difficulty,
        cuisine,
        caloriesPerServing,
        tags,
        image,
        rating,
        reviewCount,
        mealType
    } = data;

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row gap-10">

                <div className="w-full md:w-1/2">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>


                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>

                    <div className="text-gray-600 mb-4">
                        <p className="text-lg font-semibold">Cuisine: {cuisine}</p>
                        <p className="text-lg font-semibold">Difficulty: {difficulty}</p>
                        <p className="text-lg font-semibold">Prep Time: {prepTimeMinutes} minutes</p>
                        <p className="text-lg font-semibold">Cook Time: {cookTimeMinutes} minutes</p>
                        <p className="text-lg font-semibold">Servings: {servings}</p>
                        <p className="text-lg font-semibold">Calories per Serving: {caloriesPerServing}</p>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">Ingredients:</h3>
                        <ul className="list-disc pl-6">
                            {ingredients.map((ingredient, index) => (
                                <li key={index} className="text-gray-600">{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">Instructions:</h3>
                        <ol className="list-decimal pl-6">
                            {instructions.map((instruction, index) => (
                                <li key={index} className="text-gray-600">{instruction}</li>
                            ))}
                        </ol>
                    </div>


                    <div className="mt-6 flex gap-4 items-center">
                        {tags && tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-800">Rating: {rating}</span>
                            <span className="text-gray-600">({reviewCount} reviews)</span>
                        </div>
                    </div>


                    <div className="mt-6">
                        <span className="font-semibold text-gray-800">Meal Type: </span>
                        <span className="text-gray-600">{mealType.join(', ')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Product);
