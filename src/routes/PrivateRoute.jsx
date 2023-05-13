import React, { useContext } from 'react';
import { GetContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Blocks } from 'react-loader-spinner';
// import { Blocks } from 'react-loader-spinner'

const PrivateRoute = ({ children }) => {
    const { users, loading } = useContext(GetContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='min-h-screen bg-slate-200'>
                <Blocks
                    visible={true}
                    height="90"
                    width="1400"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
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