import React from 'react';
import { FiBox,FiGrid,FiHome,FiShoppingCart,FiTruck,FiUsers} from 'react-icons/fi';

export default[
    {
        name: 'Dashboard',
        icon: FiHome ,
        isActive: true,
        href: '/',
    },
    {
        name: 'Resources',
    },
    {
        name: 'Categories',
        icon: FiGrid,
        isActive: false,
        href: '/categories',
    },
    {
        name: 'Products',
        icon: FiBox,
        isActive: false,
        href: '/products',
    },
    {
        name: 'Orders',
        icon:FiShoppingCart,
        isActive: false,
        href: '/orders',
    },
    {
        name: 'Customers',
        icon: FiUsers,
        isActive: false,
        href: '/customers',
    },
    {
        name: 'Deliveries',
        icon: FiTruck,
        isActive: false,
        href: '/deliveries',
    },
];