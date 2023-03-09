import React from 'react';

const Layout = ({ backgroundColor, children }) => (
  <div style={{ backgroundColor }} className="layout">
    {children}
  </div>
)

export default Layout