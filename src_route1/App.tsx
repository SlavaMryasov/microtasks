import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { Adidas} from './components/pages/Adidas';
import { PageTwo } from './components/pages/PageTwo';
import { PageThree } from './components/pages/PageThree';
import { Error404 } from './components/pages/Error404';
import { NavWrapper } from './components/styles/NavWrapper';
import { Page } from './components/pages/Page';
import { adidasArr } from './components/dataState/dataState';
import { Model } from './components/pages/Model';

const PATH= {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
} as const

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <NavWrapper><NavLink to={PATH.PAGE1}>adidas</NavLink></NavWrapper>
                    <NavWrapper><NavLink to={PATH.PAGE2}>puma</NavLink></NavWrapper>
                    <NavWrapper><NavLink to={PATH.PAGE3}>abibas</NavLink></NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        
                        <Route path='/' element={<Navigate to='page'/>}/>
                        <Route path={PATH.PAGE1} element={<Adidas adidas={adidasArr}/>} />
                        <Route path={'adidas/:model'} element={<Model adidas={adidasArr}/>} />
                        <Route path={PATH.PAGE2} element={<PageTwo/>} />
                        <Route path={PATH.PAGE3} element={<PageThree/>} />
                        <Route path='/*' element={<Error404/>} />
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
