const _nav = [
  {
    key: '006',
    name: 'Dashboard',
    path: '/dashboard',
  },
  {
    key: '001',
    name: 'Campaign Management',
    path: '/campaign',
    badge: {
      color: 'danger',
      text: 'NEW',
    },
  },
  {
    key: '002',
    name: 'Content Management',
    path: '/content',
  },
  {
    name: 'Audience & Segment',
    items: [
      {
        key: '003',
        name: 'Audience Management',
        path: '/audience',
      },
      {
        key: '003',
        name: 'Segment Management',
        path: '/segment',
      },
    ],
  },
  {
    name: 'Touchpoint & Activity',
    items: [
      {
        key: '004',
        name: 'Touchpoint and Activity Management',
        path: '/touchpoint-activity',
      },
      {
        key: '004',
        name: 'Manual Activity Management',
        path: '/manual-activity',
      },
    ],
  },
  {
    name: 'Scheduler',
    items: [
      {
        name: 'Touchpoint Scheduler',
        path: '/touchpoint-scheduler',
      },
      {
        name: 'Touchpoint Scheduler Calendar view',
        path: '/touchpoint-calendar',
      },
    ],
  },
  {
    name: 'Parameter',
    items: [
      {
        name: 'Care Audience Parameter Management',
        path: '/care-audience-parameter',
      },
      {
        name: 'Manual Audience Parameter Management',
        path: '/manual-audience-parameter',
      },
      {
        name: 'Parameter Management',
        path: '/parameter',
      },
    ],
  },
  {
    name: 'User management',
    path: '/user',
  },
  {
    name: 'Role Management',
    path: '/role',
  },
  {
    name: 'Tiny Example',
    path: '/tiny',
  },
]

export default _nav