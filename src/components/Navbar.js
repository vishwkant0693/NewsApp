import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NewsApp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2">
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/general">General</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/business">Business</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/sports">Sports</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/technology">Technology</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/entertainment">Entertainment</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar