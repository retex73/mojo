import React from 'react'
import './Sidebar.css';
import Section from './Section';
import IconHeading from './IconHeading'

export default function Sidebar() {
    const menuItems = [
        'Dashboard',
        'Buildings',
        'Posts',
        'Conversations',
        'Amenities',
        'Tenants',
        'Performance',
        'Users',
    ];

    const supportItems = [
        'Need Help?',
        'Contact Us',
        'Knowledge Base'
    ];


    return (
        <div className="MenuBase">
            <IconHeading />
            <Section items={menuItems} heading="MENU" />

            <div className="SupportSection">
                <Section items={supportItems} heading="SUPPORT" />
            </div>
        </div>
    )
}
