import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GetContext } from '../../../providers/AuthProvider';

const Login = () => {
    const { signIn, googleSign, githubSign } = useContext(GetContext);
    const navigates = useNavigate();
    const locations = useLocation();

    const [error, setError] = useState("");

    const cameFrom = locations.state?.from?.pathname || "/"

    const submitted = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                event.target.reset();
                navigates(cameFrom, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                setError(" Email Password does not match");
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 lg:w-screen max-w-sm mt-5 shadow-2xl bg-base-100">
                        <form onSubmit={submitted} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            </div>

                            <p className='text-red-700 font-semibold text-center'>{error}</p>

                            <div className="form-control mt-5">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <p className="ml-12"><small>New to Auth Master?</small>
                                <Link to="/register" className="label-text-alt link link-hover text-sm text-blue-500"> Please Register
                                </Link>
                            </p>
                            <div className="divider my-[-2px]">OR</div>
                            <small className="ml-12">
                                <span>
                                    Continue With
                                    <Link onClick={googleSign} className="label-text-alt link link-hover ml-1 text-sm text-blue-500">Google</Link> &
                                    <Link onClick={githubSign} className="label-text-alt link link-hover ml-1 text-sm text-blue-500">Github</Link>
                                </span>
                            </small>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;