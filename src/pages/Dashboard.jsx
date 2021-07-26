import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import StatusCard from '../components/status-card/StatusCard';

import statusCards from '../assets/JsonData/status-card-data.json';

const Dashboard = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  return (
    <div>
      <h1 className='page-header'>Dashboard</h1>
      <div className='row'>
        <div className='col-8'>
          <div className='row'>
            {statusCards.map((item, index) => (
              <div className='col-6' key={index}>
                <StatusCard
                  icon={item.icon}
                  route={item.route}
                  title={item.display_name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
