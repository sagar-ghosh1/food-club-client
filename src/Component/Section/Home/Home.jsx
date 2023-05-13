import React from 'react';
import Header from '../Header/Header'
import BlogPost from '../BlogPost/BlogPost';
import Chef from '../../../layouts/Chef';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Chef></Chef>
            <BlogPost></BlogPost>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;