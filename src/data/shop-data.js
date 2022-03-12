const SHOP_DATA = [
  {
    id: 1,
    title: 'Fujifilm',
    route: 'fujifilm',
    items: [
      {
        id: 1,
        name: 'X-T4',
        imageUrl: 'https://images.unsplash.com/photo-1642424981563-8a1767dfb562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        price: 1499
      },
      {
        id: 2,
        name: 'X-T4',
        imageUrl: 'https://images.unsplash.com/photo-1642424981563-8a1767dfb562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        price: 1499
      },
      {
        id: 3,
        name: 'X-T4',
        imageUrl: 'https://images.unsplash.com/photo-1642424981563-8a1767dfb562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        price: 1499
      },
      {
        id: 4,
        name: 'X-T4',
        imageUrl: 'https://images.unsplash.com/photo-1642424981563-8a1767dfb562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        price: 1499
      }
    ]
  },
  {
    id: 2,
    title: 'Sony',
    route: 'sony',
    items: [
      {
        id: 1,
        name: 'A7 IV',
        imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        price: 2499
      },
      {
        id: 2,
        name: 'A7 IV',
        imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        price: 2499
      },
      {
        id: 3,
        name: 'A7 IV',
        imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        price: 2499
      },
      {
        id: 4,
        name: 'A7 IV',
        imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        price: 2499
      }
    ]
  },
  {
    id: 3,
    title: 'Nikon',
    route: 'nikon',
    items: [
      {
        id: 1,
        name: 'Z fc',
        imageUrl: 'https://images.unsplash.com/photo-1483034695875-9b894c34cecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=831&q=80',
        price: 1199
      },
      {
        id: 2,
        name: 'Z fc',
        imageUrl: 'https://images.unsplash.com/photo-1483034695875-9b894c34cecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=831&q=80',
        price: 1199
      },
      {
        id: 3,
        name: 'Z fc',
        imageUrl: 'https://images.unsplash.com/photo-1483034695875-9b894c34cecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=831&q=80',
        price: 1199
      },
      {
        id: 4,
        name: 'Z fc',
        imageUrl: 'https://images.unsplash.com/photo-1483034695875-9b894c34cecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=831&q=80',
        price: 1199
      }
    ]
  },
  {
    id: 4,
    title: 'Canon',
    route: 'canon',
    items: [
      {
        id: 1,
        name: 'AE-1',
        imageUrl: 'https://images.unsplash.com/photo-1487283981457-92340b7c6621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        price: 299
      },
      {
        id: 2,
        name: 'AE-1',
        imageUrl: 'https://images.unsplash.com/photo-1487283981457-92340b7c6621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        price: 299
      },
      {
        id: 3,
        name: 'AE-1',
        imageUrl: 'https://images.unsplash.com/photo-1487283981457-92340b7c6621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        price: 299
      },
      {
        id: 4,
        name: 'AE-1',
        imageUrl: 'https://images.unsplash.com/photo-1487283981457-92340b7c6621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        price: 299
      }
    ]
  }
]