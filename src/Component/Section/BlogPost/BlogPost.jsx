import React from 'react';
import { FaCalendar, FaChair, FaChalkboardTeacher, FaChartBar, FaComment, FaFacebookMessenger, FaFacebookSquare, FaRegCalendar, FaRegComment } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';

const BlogPost = () => {
    return (
        <div className='text-center py-20 bg-sky-100'>
            <h2 className='text-[#555555] text-4xl text-center font-semibold'>ABOUT US</h2>
            <hr className='w-44 mt-2 mb-4 rounded mx-auto border border-green-500' />
            <p className='py-5 '>The new menu item this youtube or viemo..</p>

            <div className='lg:flex lg:justify-center gap-6'>

                <div className="card w-96 mt-4 mx-auto bg-base-100 shadow-xl rounded-none">
                    <figure>
                        <LazyLoad>
                            <img src="https://rb.gy/scdnn" alt="Food" className='p-2 w-screen h-[242px]' />
                        </LazyLoad>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">
                            Video Post Format - YouTube
                        </h2>
                        <p>Accusamus quos provident fugiat possimus error magnam dignissimos mollitia facilis autem eaque amet vitae, vel temporibus tenetur. Mollitia minima aut incidunt est ut fugit voluptas pijjera good prodiver minus aperiam voluptatibus eveniet tempore, quia veniam ad amet odio iste iusto nulla cumque...</p>
                        <hr className='border-green-400 border w-14 mx-auto my-2' />
                        <div className="card-actions mx-auto text-slate-400">
                            <p className='flex items-center'><FaRegCalendar className='mr-2' />May 28 2020</p>
                            <span className='mx-3'>|</span>
                            <p className='flex items-center'><FaRegComment className='mr-2' />No Comments</p>
                        </div>
                    </div>
                </div>

                <div className="card w-96 mt-4 mx-auto bg-base-100 shadow-xl rounded-none">
                    <figure>
                        <LazyLoad>
                            <img src="https://rb.gy/mq2rx" alt="Food" className='p-2 w-screen h-[242px]' />
                        </LazyLoad>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">
                            Gallery Post Format
                        </h2>
                        <p>molestias voluptas tempora dolorum neque asperiores similique rerum sequi beatae.Eos ea beatae, aperiam porro id ullam exercitationem minima eum fuga. Voluptates expedita facere iusto eligendi perspiciatis, necessitatibus nulla pariatur optio qui adipisci asperiores, voluptatum dolorem amet laboriosam enim...</p>
                        <hr className='border-green-400 border w-14 mx-auto my-2' />
                        <div className="card-actions mx-auto text-slate-400">
                            <p className='flex items-center'><FaRegCalendar className='mr-2' />Jun 04 2020</p>
                            <span className='mx-3'>|</span>
                            <p className='flex items-center'><FaRegComment className='mr-2' />No Comments</p>
                        </div>
                    </div>
                </div>

                <div className="card w-96 mt-4 mx-auto bg-base-100 shadow-xl rounded-none">
                    <figure>
                        <LazyLoad>
                            <img src="https://rb.gy/dy1bl" alt="Food" className='p-2 w-screen h-[242px]' />
                        </LazyLoad>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">
                            Video Post Format - Vimeo
                        </h2>
                        <p>Corporis beatae odit consequatur consequuntur officiis dolor sed distinctio quisquam maxime quia esse, odio sapiente laboriosam ratione architecto. Dicta veniam illo repellendus dolorem tempora nihil cumque  suscipit veritatis consequuntur laborum, maiores sed voluptates emporibus...</p>
                        <hr className='border-green-400 border w-14 mx-auto my-2' />
                        <div className="card-actions mx-auto text-slate-400">
                            <p className='flex items-center'><FaRegCalendar className='mr-2' />Oct 31 2020</p>
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