import React from 'react'
import { connect } from 'react-redux'

export default function Layout(props) {

    return (
        <div>
            <h2>Layout page</h2>
            <h3>Buildings: {props.buildings}</h3>
        </div>
    )
}