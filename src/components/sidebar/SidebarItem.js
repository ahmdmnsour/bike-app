import { Link } from "react-router-dom";

import './Sidebar.css';

export default function SidebarItem({ item, selected, onChange }) {
    return (
        <>
            <li key={item.id} className={selected === item.id ? 'sidebar-item active' : 'sidebar-item'}>
                <Link to={item.path} onClick={() => onChange(item.id)}>
                    {item.icon}
                    <span>{item.title}</span>
                    {item.nestedItems && <span>y</span>}
                </Link>
                {item.nestedItems && selected === item.id &&
                    <ul>
                        {item.nestedItems.map((subItem) => {
                            return (
                                <li key={subItem.id} className='sidebar-item'>
                                    <Link to={subItem.path}>
                                        {subItem.icon}
                                        <span>{subItem.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>}
            </li>
        </>
    );
}