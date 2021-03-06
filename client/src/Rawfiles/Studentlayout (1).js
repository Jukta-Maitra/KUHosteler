import React from 'react'
import './Studentprofile.css'
import {Link} from 'react-router-dom';
export default function Studentlayout() {
    return (
        <>
                <div className="gradient">
                <nav className="navbar navbar-light ">
                    <div className="container-fluid ">
                        <h3 className="ps-5  text-white">KuHosteler</h3>
                        <div className="d-flex justify-content-end"></div>
                        <button className="btn btn-outline-light btn-sm px-2" type="submit">Sign out</button>
                    </div>
                </nav>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-5 pt-4 pb-0 cover">
                            <div className="media align-items-end profile-head">
                                <div className="profile ps-3 mr-5 mt-5">
                                    <img className="img mb-2 img-thumbnail" src="https://images.unsplash.com/photo-1422728280635-45167d8b7197?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU3fHxwZXJzb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="..." width="190" /></div>
                            </div>
                        </div>
                        <div className=" bg-white pt-1 d-flex ">
                            <div className="media-body mb-1 text-dark">
                                <h4 className="media mt-0 mb-0">Jukta Maitra</h4>
                                <p className="small mb-4">Department of Engineering & Technological Studies</p>
                            </div>
                        </div>
                        <nav className=" col-8 navbar navbar-expand-lg p-1 navbar-light bg-white ">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
       
                                <div className="collapse navbar-collapse ps-4" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto ">
                                   <li className="nav-item ps-2">
                                            <a className="nav-link fw-bold" href="#">My Profile</a>
                                        </li>
                                        <li className="nav-item ps-3  ">
                                            <a className="nav-link fw-bold" href="#">Meal</a>
                                        </li>
                                        <li className="nav-item ps-3 ">
                                            <a className="nav-link fw-bold" href="#">Add Guest</a>
                                        </li>
                                        <li className="nav-item ps-3 ">
                                            <a className="nav-link fw-bold" href="#">Payment</a>
                                        </li>
                                        <li className="nav-item ps-3">
                                            <a className="nav-link fw-bold" href="#">Settings</a>
                                        </li>
                                        <li className="nav-item ps-3">
                                            <a className="nav-link fw-bold" href="#">Blog</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}
