import React from 'react'

const routes = [
  { key: '001', path: "/campaign/*", name: "Campaign Management", element: React.lazy(() => import('./views/campaign')), },
  { key: '002', path: "/content", name: "Content Management", element: React.lazy(() => import('./views/Dashboard')), },
  { key: '003', path: "/audience-segment", name: "Audience & Segment", element: React.lazy(() => import('./views/Dashboard')), },
  { key: '004', path: "/touchpoint-activity", name: "Touchpoint and Activity Management", element: React.lazy(() => import('./views/Dashboard')), },
  { key: '005', path: "/manual-activity", name: "Manual Activity Management", element: React.lazy(() => import('./views/Dashboard')), },
  { key: '006', path: "/dashboard", name: "Dashboard", element: React.lazy(() => import('./views/Dashboard')), },
  { key: '007', path: "/user", name: "User Profile", element: React.lazy(() => import('./views/UserProfile')), },
  { key: '008', path: "/table", name: "Table List", element: React.lazy(() => import('./views/TableList')), },
  { key: '009', path: "/typography", name: "Typography", element: React.lazy(() => import('./views/Typography')), },
  { key: '010', path: "/icons", name: "Icons", element: React.lazy(() => import('./views/Icons')), },
  { key: '011', path: "/tiny", name: "Tiny", element: React.lazy(() => import('./views/Tiny')), },
  { key: '012', path: "/notifications", name: "Notifications", element: React.lazy(() => import('./views/Notifications')), },
];

export default routes