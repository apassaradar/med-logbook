import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const Card = (props) => {
  return (
      <div className='card text-center'>
        <div className='card-icon'>
          {props.icon}
        </div>
        <div className='card-body text-dark'>
          <h4 className='card-title'>{props.title}</h4>
          <p className='card-text text-secondary'>{props.text}</p>
          <Link to={props.link} className='card-btn btn-outline-success'>See Detail</Link>
        </div>
      </div>
          
  );
};


export default Card;
