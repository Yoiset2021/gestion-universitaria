import React, { useState } from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { withRouter, Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function SiderBar() {

    const [expanded, setExpanded] = useState(false)

    return (
        <main>
            <SideNav
                onToggle={() => setExpanded(!expanded)}
                expanded={expanded}
                style={{ background: '#72bcf8' }}
            >
                <SideNav.Toggle />
                <SideNav.Nav>
                    <NavItem eventKey="home">
                        <NavIcon
                            data-tip="Home"
                            data-place="right"
                            data-type="info"
                            data-effect="solid"
                        >
                            <Link to="/">
                                <img to src="/svg/home.svg" alt="Home" width="32" height="32" style={{ fontSize: '1.75em' }} />
                            </Link>
                            <ReactTooltip />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="estudiantes">
                        <NavIcon
                            data-tip="Estudiantes"
                            data-place="right"
                            data-type="info"
                            data-effect="solid"
                        >
                            <Link to="/estudiantes">
                                <img src="/svg/estudiante.svg" alt="Estud" width="32" height="32" style={{ fontSize: '1.75em' }} />
                            </Link>
                            <ReactTooltip />
                        </NavIcon>
                        <NavText>
                            Estudiantes
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="grupos">
                        <NavIcon
                            data-tip="Grupos"
                            data-place="right"
                            data-type="info"
                            data-effect="solid"
                        >
                            <Link to="/grupos">
                                <img src="/svg/group.svg" alt="Grupos" width="32" height="32" style={{ fontSize: '1.75em' }} />
                            </Link>
                            <ReactTooltip />
                        </NavIcon>
                        <NavText>
                            Grupos
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="ciudades">
                        <NavIcon
                            data-tip="Ciudades"
                            data-place="right"
                            data-type="info"
                            data-effect="solid"
                        >
                            <Link to="/ciudades">
                                <img src="/svg/city.svg" alt="Ciudades" width="32" height="32" style={{ fontSize: '1.75em' }} />
                            </Link>
                            <ReactTooltip />
                        </NavIcon>
                        <NavText>
                            Ciudades
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="profesores">
                        <NavIcon
                            data-tip="Profesores"
                            data-place="right"
                            data-type="info"
                            data-effect="solid"
                        >
                            <Link to="/profesores">
                                <img src="/svg/teacher.svg" alt="Profesores" width="40" height="40" style={{ fontSize: '1.75em' }} />
                            </Link>
                            <ReactTooltip />
                        </NavIcon>
                        <NavText>
                            Profesores
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>

        </main>

    )
}

export default withRouter(SiderBar)
