import React from 'react';
import { FaCalendar, FaChair, FaChalkboardTeacher, FaChartBar, FaComment, FaFacebookMessenger, FaFacebookSquare, FaRegCalendar, FaRegComment } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';

const BlogPost = () => {
    return (
        <div className='text-center py-20 bg-sky-100'>
            <h3 className='text-[#555555] text-2xl text-center font-semibold'>BLOG POST</h3>
            <hr className='w-24 mt-2 rounded mx-auto border border-amber-500' />
            <p className='py-5'>Check our latest article, what we are talking about</p>

            <div className='lg:flex lg:justify-center gap-6'>

                <div className="card w-96 mt-4 mx-auto bg-base-100 shadow-xl rounded-none">
                    <figure>
                        <LazyLoad>
                            <img src="https://rb.gy/7en8a" alt="Food" className='p-2 w-[100%] h-[242px]' />
                        </LazyLoad>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">
                            Video Post Format - YouTube
                        </h2>
                        <p>Dolor iusto quaerat velit earum quam at consectetur accusamus quos provident fugiat possimus error magnam dignissimos mollitia facilis autem eaque amet vitae, vel temporibus tenetur. Mollitia minima aut incidunt est ut fugit voluptas minus aperiam voluptatibus eveniet tempore, quia veniam ad amet odio iste iusto nulla cumque...</p>
                        <hr className='border-amber-400 border w-14 mx-auto my-2' />
                        <div className="card-actions mx-auto text-slate-400">
                            <p className='flex items-center'><FaRegCalendar className='mr-2' />May 28 2016</p>
                            <span className='mx-3'>|</span>
                            <p className='flex items-center'><FaRegComment className='mr-2' />No Comments</p>
                        </div>
                    </div>
                </div>

                <div className="card w-96 mt-4 mx-auto bg-base-100 shadow-xl rounded-none">
                    <figure>
                        <LazyLoad>
                            <img src="https://rb.gy/2do5a" alt="Food" className='p-2 w-[100%] h-[242px]' />
                        </LazyLoad>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">
                            Gallery Post Format
                        </h2>
                        <p>Facere pariatur, molestias voluptas tempora dolorum neque asperiores similique rerum sequi beatae.Eos ea beatae, aperiam porro id ullam exercitationem minima eum fuga. Voluptates expedita facere iusto eligendi perspiciatis, necessitatibus nulla pariatur optio qui adipisci asperiores, voluptatum dolorem amet laboriosam enim...</p>
                        <hr className='border-amber-400 border w-14 mx-auto my-2' />
                        <div className="card-actions mx-auto text-slate-400">
                            <p className='flex items-center'><FaRegCalendar className='mr-2' />Jun 04 2017</p>
                            <span className='mx-3'>|</span>
                            <p className='flex items-center'><FaRegComment className='mr-2' />No Comments</p>
                        </div>
                    </div>
                </div>

                <div className="card w-96 mt-4 mx-auto bg-base-100 shadow-xl rounded-none">
                    <figure>
                        <LazyLoad>
                            <img src="https://rb.gy/48i7z" alt="Food" className='p-2 w-screen h-[242px]' />
                        </LazyLoad>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">
                            Video Post Format - Vimeo
                        </h2>
                        <p>Corporis beatae odit consequatur consequuntur officiis dolor sed distinctio quisquam maxime quia esse, odio sapiente voluptates voluptate quasi laboriosam ratione architecto. Dicta veniam illo repellendus dolorem tempora nihil cumque quas suscipit veritatis consequuntur laborum, maiores sed voluptates emporibus...</p>
                        <hr className='border-amber-400 border w-14 mx-auto my-2' />
                        <div className="card-actions mx-auto text-slate-400">
                            <p className='flex items-center'><FaRegCalendar className='mr-2' />Oct 31 2017</p>
                            <span className='mx-3'>|</span>
                            <p className='flex items-center'><FaRegComment className='mr-2' />No Comments</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogPost;