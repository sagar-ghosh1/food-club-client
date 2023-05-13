import React from 'react';
import Pdf from "react-to-pdf";
import ReactToPdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {

    return (
        <div>
            <div className='min-h-screen' ref={ref}>
                <div>
                    <span className='flex justify-center pt-14 pb-8'>
                        <ReactToPdf targetRef={ref} filename="Food Club.pdf">
                            {({ toPdf }) => (
                                <button className='btn btn-outline btn-primary' onClick={toPdf}>Download pdf</button>
                            )}
                        </ReactToPdf>
                    </span>

                    <div className="lg:w-7/12 mx-auto">
                        <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-md">
                            <div className="collapse-title text-xl font-medium bg-indigo-50">
                                <p>Tell us the differences between uncontrolled and controlled components</p>
                            </div>

                            <div className="collapse-content">
                                <p className="mb-5">In the context of web development, uncontrolled components and controlled components refer to two different approaches for managing form data in React applications. Uncontrolled Components: In an uncontrolled component, form data is managed by the DOM instead of the React component. The form data is stored in the form elements themselves, and the component simply reads the data when necessary. </p>

                                <p>The advantage of this approach is that it is simpler and requires less code, but it can be difficult to validate or manipulate the form data before submission. Controlled Components: In a controlled component, form data is managed by the React component itself. The component uses state to store the form data, and updates the state whenever the user interacts with the form. This approach provides more control over the form data, allowing the developer to validate, manipulate, or even reject the form data before submission. However, it requires more code and can be more complex to set up.</p>
                            </div>
                        </div>

                        <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-md my-5">
                            <div className="collapse-title text-xl font-medium bg-indigo-50">
                                <p>How to validate React props using PropTypes</p>
                            </div>

                            <div className="collapse-content">
                                <p className="mb-5">In React, you can use PropTypes to validate the props passed to your components. PropTypes is a library that allows you to define the expected type and shape of your props, and will issue a warning in the console if the props don&lsquo;t match the expected values.</p>
                            </div>
                        </div>

                        <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-md my-5">
                            <div className="collapse-title text-xl font-medium bg-indigo-50">
                                <p>Tell us the difference between nodejs and express js.</p>
                            </div>

                            <div className="collapse-content">
                                <p className="mb-5">web applications. Here&lsquo;s the difference between the two: Node.js: Node.js is a server-side runtime environment that allows you to run JavaScript code outside of a web browser. Node.js provides a set of built-in modules and APIs for working with files, network sockets, streams, and other low-level functionalities. Node.js is primarily used for building server-side applications and tools such as command-line interfaces, web servers, and network applications.</p>
                            </div>
                        </div>

                        <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-md">
                            <div className="collapse-title text-xl font-medium bg-indigo-50">
                                <p>What is a custom hook, and why will you create a custom hook?</p>
                            </div>

                            <div className="collapse-content">
                                <p className="mb-5">A custom hook is a JavaScript function that uses React&lsquo;s built-in hooks to encapsulate and reuse complex behavior in a composable way. Custom hooks allow you to abstract away complex logic into reusable, easy-to-use functions that can be shared across multiple components.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;