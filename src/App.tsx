import React, { useState } from 'react';
import styles from "./components/Site.module.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import { PageOne } from './components/pages/PageOne';
import { PageTwo } from './components/pages/PageTwo';
import { PageThree } from './components/pages/PageThree';
import { Error404 } from './components/pages/Error404';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

type RoutesType = 'page1' | 'page2' | 'page3'

function App() {

    const PATH = {
        PAGE1: '/page1',
        PAGE2: '/page2',
        PAGE3: '/page3',
    }

    const stylesCallback = (isActive: boolean) => {
        return isActive ? styles.active : styles.pending
    }

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <StylesWrapper>
                        <li>
                            <NavLink to={PATH.PAGE1}>adidas</NavLink>
                        </li>
                        <li>
                            <NavLink to={PATH.PAGE2}>puma</NavLink>
                        </li>
                        <li>
                            <NavLink to={PATH.PAGE3}>abibas</NavLink>
                        </li>
                    </StylesWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.PAGE1} />} />
                        <Route path={PATH.PAGE1} element={<PageOne />} />
                        <Route path={PATH.PAGE2} element={<PageTwo />} />
                        <Route path={PATH.PAGE3} element={<PageThree />} />
                        <Route path={'/error404'} element={<Error404 />} />
                        <Route path={'/*'} element={<Navigate to={'error404'} />} />
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

const StylesWrapper = styled.ul`
    & > li {
        width: 150px;
        border: 1px solid rgb(9, 255, 0);
        list-style: none;
        background-color: rgb(183, 255, 193);
        border-radius: 5px;
        margin: 1px;
        text-align: center;
    }
    & > li:hover {
        background-color: rgb(143, 255, 139);
    }

    & > li>a{
        text-decoration: none;
    }
    & > li>a.active {
        color: rgb(112, 0, 116);
    }
`

export default App;
