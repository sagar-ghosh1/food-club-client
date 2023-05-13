import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-sky-50">
            <div>
                <h2 className='text-[#555555] text-2xl text-center font-semibold'>ABOUT US</h2>
                <hr className='w-24 mt-2 mb-8 rounded mx-auto border border-amber-500' />

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='border-8 border-amber-500'>
                        <LazyLoad>
                            <img src="https://rb.gy/ojjih" alt='Chef' className="lg:max-w-lg shadow-2xl" />
                        </LazyLoad>
                    </div>

                    <div>
                        <h1 className="text-4xl font-semibold">About <span className='text-6xl font-bold text-amber-500'>Us</span></h1>
                        <p className="py-6 lg:pr-64 flex-grow-1 text-slate-500">At Flaming wings, we believe that cooking is more than just a practical skill-it&lsquo;s an art form that allows you to express your creativity and passion. That&lsquo;s why we&lsquo;re committed to providing an engaging and enjoyable learning experience that will inspire you to explore new flavors and techniques..</p>

                        <Link to="/about" className="btn btn-warning bg-amber-500">Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;