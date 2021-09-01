import React, { useState } from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { withRouter } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function SiderBar({ history, location }) {

    const [expanded, setExpanded] = useState(false)

    const onSelect = (selected) => {
        const to = '/' + selected;
        if (location.pathname !== to) {
            history.push(to);
        }
    }

    return (
        <main>
            <SideNav
                onSelect={onSelect}
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
                            data-background-color="blue"
                        >
                            <a href="/">
                                <img to src="/svg/home.svg" alt="Home" width="32" height="32" style={{ fontSize: '1.75em' }} />
                            </a>
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
                            data-background-color="blue"
                        >
                            <a href="/estudiantes">
                                <img src="/svg/estudiante.svg" alt="Estud" width="32" height="32" style={{ fontSize: '1.75em' }} />
                            </a>
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
                            data-background-color="blue"
                        >
                            <a href="/grupos">
                                <img src="/svg/group.svg" alt="Grupos" width="32" height="32" style={{ fontSize: '1.75em' }} />
                            </a>
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
                            data-background-color="blue"
                        >
                            <a href="/ciudades">
                                <img src="/svg/city.svg" alt="Ciudades" width="32" height="32" style={{ fontSize: '1.75em' }} />
                            </a>
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
                            data-background-color="blue"
                        >
                            <a href="/profesores">
                                <img src="/svg/teacher.svg" alt="Profesores" width="32" height="32" style={{ fontSize: '1.75em' }} />
                            </a>
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
