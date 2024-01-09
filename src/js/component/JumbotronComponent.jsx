import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const JumbotronComponent = () => {
    return (
       
        <div className="jumbotron bg-secondary m-3 rounded p-4">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
        </div>
     
    );
};

export default JumbotronComponent;
