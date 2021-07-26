import React from 'react';

import './statuscard.css';
import { Link } from 'react-router-dom';

const StatusCard = (item, index) => {
  return (
    <Link to={item.route} key={index}>
      <div className='status-card'>
        <div className='status-card__icon'>
          <i className={item.icon}></i>
        </div>
        <div className='status-card__info'>
          {/* <h4>{props.count}</h4> */}
          <h4>{item.title}</h4>
        </div>
      </div>
    </Link>
  );
};

export default StatusCard;
