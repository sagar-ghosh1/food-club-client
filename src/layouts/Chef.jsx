import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';

const Chef = () => {
    const [chef, setChef] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://food-club-server-sagar-ghosh1.vercel.app/chef-details')
            .then((res) => res.json())
            .then((data) => {
                setChef(data)
                setLoading(false);
            })
    }, [])


    return (
        <div>
            <div className='bg-slate-100 min-h-screen py-10'>
                <h2 className='text-[#555555] text-2xl text-center font-semibold pt-8'>CHEF SECTION</h2>
                <hr className='w-32 mt-2 mb-8 rounded mx-auto border border-amber-500' />
                <div className='grid lg:grid-cols-3 container lg:pl-8 pb-10 mx-auto'>
                    {
                        chef.map(chef => <Card
                            key={chef.key}
                            chef={chef}
                        ></Card>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Chef;