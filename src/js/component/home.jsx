import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Menu from './Menu';
import JumbotronComponent from './JumbotronComponent';
import CardComponent from './CardComponent';
import Footer from './Footer';

const Home = () => {
    return (
        <>
			<Menu/>
			<JumbotronComponent />
            <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <CardComponent imageUrl="https://picsum.photos/id/40/4106/2806" />
                </div>
                <div className="col-lg-3 col-md-6">
                    <CardComponent imageUrl="https://picsum.photos/id/21/3008/2008" />
                </div>
                <div className="col-lg-3 col-md-6">
                    <CardComponent imageUrl="https://picsum.photos/id/25/367/267" />
                </div>
                <div className="col-lg-3 col-md-6">
                    <CardComponent imageUrl="https://picsum.photos/id/30/1280/901" />
                </div>
            </div>
        </div>
        <Footer/>
          </>
    );
};

export default Home;
