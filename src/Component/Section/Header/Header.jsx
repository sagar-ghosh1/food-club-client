import React from 'react';
import LazyLoad from 'react-lazy-load';

const Header = () => {
    return (
        <div>
            <div className="hero py-10 bg-pink-100">
                <div className="hero-content flex-col lg:flex-row">
                    <LazyLoad>
                        <img src="https://rb.gy/yi140" className="lg:max-w-xl lg:mr-12 rounded-lg shadow-2xl" />
                    </LazyLoad>
                    <div>
                        <h1 className="text-5xl font-bold leading-[70px]">Curly Cheese & Vegetable Sandwich</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Leo urna molestie at elementum eu facilisis sed odio. Malesuada fames ac turpis egestas integer. Porttitor massa id neque aliquam vestibulum morbi blandit nisl cursus risus.</p>
                        <button className="btn btn-outline">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;