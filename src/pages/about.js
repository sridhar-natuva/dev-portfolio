import React from "react";
import Header from '../components/header';

export default function About() {
    return (
        <div style={{ color: `teal` }}>
            <Header siteTitle='About Title' />
            <h1>About Gatsby</h1>
            <p>Such wow. Very React.</p>
        </div>
    )
}