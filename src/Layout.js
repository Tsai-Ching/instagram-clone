import React from 'react';

const Layout = ({ backgroundColor = '#fff', children }) => (
  <div style={{ backgroundColor }} className='min-vh-100'>
    {children}
  </div>
)

export default Layout