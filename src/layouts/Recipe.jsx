import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import LazyLoad from 'react-lazy-load';

const Recipe = ({ recipe }) => {
    const handleClick = (event) => {
        toast.success("Successfully added favorite recipe")
        event.currentTarget.disabled = true;
    };

    return (
        <div>

            <div className='flex justify-evenly mt-10'>
                <div className="card w-96 rounded-md bg-cyan-50">
                    <figure>
                        <LazyLoad>
                            <img src={recipe.banner} className='w-screen h-[270px]' />
                        </LazyLoad>
                    </figure>

                    <div className="card-body  text-slate-500">
                        <h2 className="card-title text-green-600">{recipe.recipe_name}</h2>
                        <p><span className='text-[16px] text-orange-700 font-semibold mr-3'>Ingredients:</span>{recipe.ingredients}</p>

                        <p><span className='text-[16px] text-orange-700 font-semibold mr-3'>Method:</span>{recipe.method}</p>

                        <div className="card-actions justify-between items-center mt-2">

                            <span className='flex'>
                                <Rating style={{ maxWidth: 100 }} value={Math.round(recipe?.rating || 0)} readOnly />
                                <p className='ml-3'>{recipe.rating}</p>
                            </span>

                            <span>
                                <button onClick={handleClick} className="btn btn-sm btn-outline"><FaRegHeart className='mr-2' /> Favorite</button>
                                <ToastContainer />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;