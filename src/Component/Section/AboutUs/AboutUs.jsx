import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-sky-50">
            <div>
                <h2 className='text-[#555555] text-4xl text-center font-semibold'>ABOUT US</h2>
                <hr className='w-44 mt-2 mb-8 rounded mx-auto border border-green-500' />

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='border-8 border-green-500'>
                        <LazyLoad>
                            <img src="https://rb.gy/ojjih" alt='Chef' className="lg:max-w-lg shadow-2xl" />
                        </LazyLoad>
                    </div>

                    <div>
                        <h1 className="text-4xl font-semibold text-green-500">About <span className='text-6xl font-bold text-green-500'>Us</span></h1>
                        <p className="py-6 lg:pr-64 flex-grow-1 text-slate-500">Cooking offers a wide range of possibilities for creative expression. Chefs and home cooks alike can experiment with various ingredients, flavors, and techniques to create unique and visually appealing dishes. Just like a painter uses different colors and brushstrokes to create a masterpiece, a cook can combine different ingredients, textures, and cooking methods to craft culinary creations. In culinary arts, the presentation of a dish is of utmost importance. Chefs pay close attention to how they arrange and plate their creations, considering factors such as color, texture, balance, and symmetry...</p>

                        <Link to="/about" className="btn btn-success bg-green-500">Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;