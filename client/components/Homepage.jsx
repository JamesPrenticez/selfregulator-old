import React from 'react'
import Header from './Header';
import Footer from './Footer';

export default class Homepage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <h1>Homepage</h1>
                <Footer />
            </>
        )
    }
}
