import React from 'react'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.Mode}`}>
                <div className="container-fluid">
                    <a className={`navbar-brand text-${props.Text}`}  href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className={`nav-link text-${props.Text} active`} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-${props.Text}`} href="/">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-${props.Text}`} href="/">Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.HandlerDark} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.Text}`}  htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </nav>
        </>
    );
}


