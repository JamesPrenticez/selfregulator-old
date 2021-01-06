import React from 'react'
import Header from './Header';
import Footer from './Footer';

export default class Homepage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="mainContainer">
                <h1>Homepage</h1>
                </div>
                <Footer />
            </>
        )
    }
}
