import React from 'react'

export default function Section(props) {

    const { items, heading } = props;

    const menuList = items.map((item, index) => (
        <li key={index} className="MenuList">{item}</li>
    ))
    return (
        <div>
            <div>
                <div className="SectionTitle">
                    {heading}
                </div>
                <ul className="Menu">
                    {menuList}
                </ul>
            </div>
        </div>
    )
}
