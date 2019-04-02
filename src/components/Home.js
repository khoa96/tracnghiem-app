import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 text-uppercase">WELCOME</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">Come to your ability test on ReactJs. Good luck to you</h2>
                        <a href="#about" className="btn btn-primary js-scroll-trigger">Go To The Test</a>
                    </div>
                </div>
            </header>
        )
    }
}
