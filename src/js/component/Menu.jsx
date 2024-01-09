import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const menuItems = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'About', link: '/productos' },
  { id: 3, title: 'Service', link: '/acerca-de' },
  { id: 4, title: 'Contact', link: '/contacto' }
];

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Start Bootstrap
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {menuItems.map(item => (
              <li key={item.id} className="nav-item">
                <a href={item.link} className="nav-link">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
