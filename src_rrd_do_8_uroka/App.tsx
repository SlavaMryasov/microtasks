import React, { useState } from 'react';
import styles from "./components/Site.module.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import { Adidas } from './components/pages/Adidas';
import { Puma } from './components/pages/Puma';
import { Abibas } from './components/pages/Abibas';
import { Error404 } from './components/pages/Error404';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Model } from './components/pages/Model';

type RoutesType = 'page1' | 'page2' | 'page3'

export type SnickersItem = {
    id: number
    model: string;
    collection: string;
    price: string;
    picture: string;
}

export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    ERROR: '/error'
} as const


function App() {


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
                            <NavLink to={PATH.ADIDAS}>adidas</NavLink>
                        </li>
                        <li>
                            <NavLink to={PATH.PUMA}>puma</NavLink>
                        </li>
                        <li>
                            <NavLink to={PATH.ABIBAS}>abibas</NavLink>
                        </li>
                    </StylesWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.ADIDAS} />} />
                        <Route path={PATH.ADIDAS} element={<Adidas />} />
                        <Route path={PATH.PUMA} element={<Puma />} />
                        <Route path={PATH.ABIBAS} element={<Abibas />} />

                        <Route path={`/:firm/:id`} element={<Model />} />

                        <Route path={PATH.ERROR} element={<Error404 />} />
                        <Route path={'/*'} element={<Error404 />} />
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
        color: #00c700
    }
    & > li>a.active {
        color: rgb(23, 1, 63);
    }
`

export default App;
