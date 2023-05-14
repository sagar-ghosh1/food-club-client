import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import like from '../assets/like.png'
import LazyLoad from 'react-lazy-load';

const Card = ({ chef }) => {
    return (
        <div>

            <div className="card lg:w-96 bg-base-100 shadow-xl my-4">
                <figure>
                    <LazyLoad>
                        <img src={chef.picture} alt="Chef" className='w-screen h-[390px]' />
                    </LazyLoad>
                </figure>

                <div className="card-body">
                    <h2 className="card-title text-3xl">
                        {chef.name}
                    </h2>
                    <p className='font-semibold'><span className='mr-1'>{chef.years_of_experience}</span>Years of experience</p>
                    <p className='font-semibold'>Famous Recipes:-</p>
                    <p className='font-medium text-green-500'>{chef.recipe_name}</p>

                    <div className="card-actions justify-between items-center mt-3">
                        <span className='w-6 flex items-center'>
                            <img src={like} alt="Likes" />

                            <p className='font-semibold ml-3'>{chef.likes}</p>
                            <span className='ml-2'>likes</span>
                        </span>
                        <Link to={`/chef/${chef?.id}`}>
                            <div className="">
                                <button className="btn btn-outline btn-accent">View Recipes <FaArrowRight className='ml-3' /></button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;