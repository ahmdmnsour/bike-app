import { Outlet } from "react-router-dom";
import { useState } from 'react';

import './Sidebar.css';

import SidebarItem from "./SidebarItem";

export default function Sidebar() {
    const [selectedItem, setSelected] = useState(0);

    function handleSelectedItem(id) { setSelected(id); }

    return (
        <>
            <nav className='sidebar'>
                <ul className='sidebar-items'>
                    {SidebarData.map((item, i) => {
                        return (
                            <SidebarItem key={item.id} item={item} selected={selectedItem} onChange={handleSelectedItem} />
                        );
                    })}
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

const SidebarData = [
    {
        id: 0,
        title: 'Overview',
        path: '/',
        icon: 'x',
    },
    {
        id: 1,
        title: 'Users',
        path: '#',
        icon: 'x',
        nestedItems: [
            {
                id: 2,
                title: 'User chart',
                path: '/user-chart',
                icon: 'x',
            },
            {
                id: 3,
                title: 'Users profile',
                path: '/users-profile',
                icon: 'x',
            }
        ]
    },
    {
        id: 4,
        title: 'Products',
        path: '#',
        icon: 'x',
          nestedItems: [
            {
                id: 5,
                title: 'Products chart',
                path: '/products-chart',
                icon: 'x',
            },
            {
                id: 6,
                title: 'Products table',
                path: '/products-table',
                icon: 'x',
            }
          ]
    },
];