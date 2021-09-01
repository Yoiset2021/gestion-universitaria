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
                                <img to src="/svg/house.svg" alt="Home" width="32" height="32" style={{ fontSize: '1.75em' }} />
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
                                <img src="/svg/person.svg" alt="Estud" width="32" height="32" style={{ fontSize: '1.75em' }} />
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
                                <img src="/svg/people.svg" alt="Grupos" width="32" height="32" style={{ fontSize: '1.75em' }} />
                            </a>
                            <ReactTooltip />
                        </NavIcon>
                        <NavText>
                            Grupos
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>

        </main>

    )
}

export default withRouter(SiderBar)
