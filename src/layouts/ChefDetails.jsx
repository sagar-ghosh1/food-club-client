import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import like from '../assets/like.png'
import { FaArrowLeft } from 'react-icons/fa';
import Recipe from './Recipe';
import { Bars } from 'react-loader-spinner';
import LazyLoad from 'react-lazy-load';

const ChefDetails = () => {
    const { id } = useParams();
    const [chefInfo, setChefInfo] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://food-club-server-sagar-ghosh1.vercel.app/chef-details/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setChefInfo(data)
                setLoading(false);
            })
    }, [])

    useEffect(() => {
        setLoading(true);
        fetch('https://food-club-server-sagar-ghosh1.vercel.app/recipe')
            .then((res) => res.json())
            .then((data) => {
                setRecipes(data)
                setLoading(false);
            })
    }, [])


    return (
        <div>
            {
                loading ? <Bars
                    visible={true}
                    height="90"
                    width="1400"
                    ariaLabel="Bars-loading"
                    wrapperStyle={{}}
                    wrapperClass="Bars-wrapper"
                /> :
                    <div className="min-h-screen py-9 bg-sky-200 text-black">
                        <div>
                            <div className="hero-content flex-col lg:flex-row">
                                <LazyLoad>
                                    <img src={chefInfo.picture} className="lg:max-w-lg rounded-md shadow-2xl lg:mr-7" />
                                </LazyLoad>

                                <div>
                                    <h1 className="text-4xl font-bold mb-4">{chefInfo.name}</h1>
                                    <p>{chefInfo.experience_description}</p>
                                    <h3 className='mt-3'><span className='text-lg font-semibold'>Working Experience:</span> {chefInfo.years_of_experience} Years</h3>
                                    <h3><span className='text-lg font-semibold'>Number Recipes:</span> {chefInfo.num_recipes}</h3>

                                    <h3 className="text-lg font-bold mt-4">Famous Recipes</h3>
                                    <li>{chefInfo.recipe_name}</li>

                                    <h3 className="text-lg font-bold mt-4">Ingredients</h3>
                                    <li>{chefInfo?.ingredients}</li>

                                    <span className='w-6 flex items-center mt-5'>
                                        <img src={like} alt="Like" />

                                        <p className='font-semibold ml-3'>{chefInfo.likes}</p>
                                        <span className='ml-2'>likes</span>
                                    </span>

                                    <Link to="/chef">
                                        <button className="btn btn-accent btn-sm btn-outline mt-5"><FaArrowLeft className='mr-2' />Chef</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='lg:flex justify-center gap-8 py-10'>
                            {
                                recipes.map(recipe => <Recipe
                                    key={recipe.id}
                                    recipe={recipe}
                                ></Recipe>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default ChefDetails;