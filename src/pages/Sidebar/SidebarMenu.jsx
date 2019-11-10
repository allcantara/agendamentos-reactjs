import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faChartBar, faTable, faDatabase, faCreditCard, faUserAlt, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Routes from '../../routes';
import avatar from '../../assets/avatar.jpg';

import './Sidebar.css';

export default function SidebarMenu() {
    const [active, setActive] = useState(true)

    const handleSidebar = () => {
        active ? setActive(false) : setActive(true)
    }


  return (
    <>
    <div className="container-fluid fixed-top" id="nav-ext" style={{padding: 0, background: '#2f333e'}}>
        <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
            <button type="button" id="sidebarCollapse" onClick={handleSidebar} className="btn text-light">
                <i className={active ? 'fa fa-2x fa-angle-double-right' : 'fa fa-2x fa-angle-double-left'}></i>
            </button>
            <Link to="/" className="navbar-brand text-white ml-4">
                <span>Agendamentos<strong>ReactJS</strong></span>
            </Link>
            <div className="dropdown ml-auto">
                <button className="btn text-light" type="button" aria-haspopup="true" aria-expanded="false">
                    <span id="fa-bell" className="notification-nav">2</span>
                    <FontAwesomeIcon icon={faBell} className="text-light" />
                </button>
                <button className="btn text-light" type="button" aria-haspopup="true" aria-expanded="false">
                    <span id="fa-envel" className="notification-nav">7</span>
                    <FontAwesomeIcon icon={faEnvelope} className="text-light" />
                </button>
                <button className="btn text-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FontAwesomeIcon icon={faUserAlt} className="text-light" />
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Account</a>
                    <a className="dropdown-item" href="#">Settings</a>
                    <a className="dropdown-item" href="#">Logout</a>
                </div>
            </div>
        </nav>
    </div>
    <div className="wrapper">

        <nav id="sidebar" className={active ? 'active' : 'noactive'} >

            <div className="sidebar-header">
                {!active ? (
                    <div className="avatar-name">
                        <img id="avatar" src={avatar} alt="Avatar" />
                        <span className="ml-3">BRUNO ALCÂNTARA</span>
                    </div>
                ) : (
                    <div className="avatar-name">
                        <img id="avatar" src={avatar} alt="Avatar" />
                    </div>
                )}
            </div>

            <ul className="list-unstyled components">
                
                <li> 
                    <Link to="/calendar">
                        {!active ? (
                            <div className="div-item">
                                <i className="mt-1 fa-calendar-alt"><FontAwesomeIcon icon={faCalendarAlt} /></i>
                                <span className="ml-3 mt-2">CALENDÁRIO</span>
                            </div>
                        ) : (<i><FontAwesomeIcon icon={faCalendarAlt} /></i>)}
                    </Link>
                </li>
                <li>
                    <a href="#homeSubmenu">
                        {!active ? (
                            <div className="div-item">
                                <i className="mt-1"><FontAwesomeIcon icon={faChartBar} /></i>
                                <span className="ml-3 mt-2">GRÁFICOS</span>
                            </div>
                        ) : (<i><FontAwesomeIcon icon={faChartBar} /></i>)}
                    </a>
                </li>
                <li>
                    <a href="#homeSubmenu">
                        {!active ? (
                            <div className="div-item">
                                <i className="mt-1"><FontAwesomeIcon icon={faTable} /></i>
                                <span className="ml-3 mt-2">TABELAS</span>
                            </div>
                        ) : (<i><FontAwesomeIcon icon={faTable} /></i>)}
                    </a>
                </li>
                <li>
                    <a href="#homeSubmenu">
                        {!active ? (
                            <div className="div-item">
                                <i className="mt-1"><FontAwesomeIcon icon={faDatabase} /></i>
                                <span className="ml-3 mt-2">DADOS</span>
                            </div>
                        ) : (<i><FontAwesomeIcon icon={faDatabase} /></i>)}
                    </a>
                </li>
                <li>
                    <a href="#homeSubmenu">
                        {!active ? (
                            <div className="div-item">
                                <i className="mt-1"><FontAwesomeIcon icon={faCreditCard} /></i>
                                <span className="ml-3 mt-2">PREÇOS</span>
                            </div>
                        ) : (<i><FontAwesomeIcon icon={faCreditCard} /></i>)}
                    </a>
                </li>
            </ul>
        </nav>

        <div id="content">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 mt-3">
                            <Routes />
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    </div>
    </>
  );
}
