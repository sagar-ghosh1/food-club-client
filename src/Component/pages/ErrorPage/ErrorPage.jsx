import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import notFound from '../../../assets/notFound.jpg'
import LazyLoad from 'react-lazy-load';

const ErrorPage = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-indigo-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <LazyLoad>
                        <img src={notFound} className="lg:max-w-lg rounded-lg shadow-2xl" />
                    </LazyLoad>

                    <div className='mr-10'>
                        <h1 className="text-5xl font-bold">Oops, page not found</h1>
                        <p className="py-6">Sorry, the page you are looking for could not be found</p>
                        <Link className="btn btn-outline btn-primary"><FaArrowLeft className='mr-2' /> Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ErrorPage;