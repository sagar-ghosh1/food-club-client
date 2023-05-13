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
                                <p className="mb-5">A controlled component is bound to a value, and its changes will be handled in code by using event-based callbacks. Here, the input form element is handled by the react itself rather than the DOM. In this, the mutable state is kept in the state property and will be updated only with setState() method.Controlled components have functions that govern the data passing into them on every onChange event occurs. This data is then saved to state and updated with setState() method. It makes component have better control over the form elements and data. It is similar to the traditional HTML form inputs. Here, the form data is handled by the DOM itself. It maintains their own state and will be updated when the input value changes. To write an uncontrolled component, there is no need to write an event handler for every state update, and you can use a ref to access the value of the form from the DOM.</p>
                            </div>
                        </div>

                        <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-md my-5">
                            <div className="collapse-title text-xl font-medium bg-indigo-50">
                                <p>How to validate React props using PropTypes</p>
                            </div>

                            <div className="collapse-content">
                                <p className="mb-5">Props and PropTypes are important mechanisms for passing read-only attributes between React components.We can use react props, to send one component to other component.Since parent components can pass down any data as props to child components, we need to validate the data type to ensure the child gets what it expects.</p>
                            </div>
                        </div>

                        <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-md my-5">
                            <div className="collapse-title text-xl font-medium bg-indigo-50">
                                <p>Tell us the difference between nodejs and express js.</p>
                            </div>

                            <div className="collapse-content">
                                <p className="mb-5">JavaScript on the server side to build scalable and high-performance web applications. Node.js uses the V8 JavaScript engine from Google and provides a non-blocking, event-driven architecture that makes it well-suited for building real-time applications.Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features for building web applications, including routing, middleware, and templates. Express.js makes it easier for developers to build web applications by providing a simple and flexible API for handling HTTP requests and responses.</p>
                            </div>
                        </div>

                        <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-md">
                            <div className="collapse-title text-xl font-medium bg-indigo-50">
                                <p>What is a custom hook, and why will you create a custom hook?</p>
                            </div>

                            <div className="collapse-content">
                                <p className="mb-5">A custom hook is a JavaScript function in React that allows you to reuse stateful logic across multiple components. Custom hooks allow you to extract repetitive code from components and make it more reusable.In React, hooks are functions that allow you to use state and other React features in functional components. Custom hooks are simply hooks that you create yourself.You might want to create a custom hook in React if you find yourself duplicating code across multiple components. For example, if you have several components that all need to fetch data from an API and manage the loading and error states, you can create a custom hook to handle that logic and reuse it across all of those components.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;