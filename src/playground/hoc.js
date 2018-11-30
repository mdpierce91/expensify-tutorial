import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info please don't share</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated ? (
                    <WrappedComponent {...props} />
                ) : (
                    <p>Please Login.</p>
                )
            }
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details"></AuthInfo>, document.getElementById('app'));