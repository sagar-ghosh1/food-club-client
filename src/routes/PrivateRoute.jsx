import React, { useContext } from 'react';
import { GetContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';

const PrivateRoute = ({ children }) => {
    const { users, loading } = useContext(GetContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='min-h-screen bg-slate-200'>
                <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>);
    }

    if (users) {
        return children;
    }

    return (
        <Navigate state={{ from: location }} to="/login" replace>
            {children}
        </Navigate>
    );
};

export default PrivateRoute;