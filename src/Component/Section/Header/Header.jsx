import React from 'react';
import LazyLoad from 'react-lazy-load';

const Header = () => {
    return (
        <div>
            <div className="hero py-10 bg-green-50">
                <div className="hero-content flex-col lg:flex-row">
                    <LazyLoad>
                        <img src="https://rb.gy/ucvnt" className="lg:max-w-xl lg:mr-12 rounded-lg shadow-2xl" />
                    </LazyLoad>
                    <div>
                        <h1 className="text-5xl font-bold leading-[70px]">A Journey of Coffee, Cuisine, and Community</h1>
                        <p className="py-6">Welcome to A Journey of Coffee, Cuisine, and Community! Step into a world where the aromatic allure of coffee blends seamlessly with delectable cuisine and a warm sense of community. Our establishment is more than just a café; it is a gathering place where friendships are forged, conversations flow, and unforgettable experiences are created.</p>
                        <button className="btn btn-outline btn-success">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;