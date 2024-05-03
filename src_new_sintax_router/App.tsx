import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Outlet, Route, Routes, useNavigate} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import styled from 'styled-components';
import {S} from './components/pages/_styles'
import {Model} from "./components/pages/Model";
import {Prices} from "./components/pages/Prices";
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ModelCrossContext } from './context/ModelProvider';
import { ProtectedPage } from './components/pages/ProtectedPage';
import { useWindowSize } from './helpers/useWindowsSize';

const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PRICES: '/prices',
} as const

function App() {
    const navigate = useNavigate()
    const onClickBackHandler = () => {
        navigate(-1)
        console.log(navigate)
    }

    const{model}=useContext(ModelCrossContext)
 

        const size = useWindowSize()
        console.log(size)

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {size>1000
                ? <div className={styles.nav}>
                <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                {!model &&<S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>}
                <S.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NavWrapper>
                <S.NavWrapper><NavLink to={'protected'}>protected page</NavLink></S.NavWrapper>
            </div>
            : <div>burger</div>
                }
                
                <div className={styles.content}>
                <div className={styles.HorizontalNavigation}>
                <Link to="/adidas" className={styles.LinkLikeButton}>ГЛАВНАЯ СТРАНИЦА (ADIDAS)</Link>
                <button onClick={onClickBackHandler} className={styles.ButtonLikeLink}>НАЗАД</button>
                </div>
                <ProtectedPage/>
                    <Outlet/>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;



