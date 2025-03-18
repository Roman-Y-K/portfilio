import React from 'react';

import { Web, Animation, Perfomance } from './ServiceDetailsItems';

const ServiceDetails = ({ isInView, activeServiceId }) => {
  return (
    <div className="service-details">
      {activeServiceId === 1 && isInView && <Web />}
      {activeServiceId === 2 && isInView && <Animation />}
      {activeServiceId === 3 && isInView && <Perfomance />}
    </div>
  );
};

export default ServiceDetails;
