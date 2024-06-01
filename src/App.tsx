import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import styles from "./components/Site.module.css";
import { Abibas } from './components/pages/Abibas';
import { Adidas } from './components/pages/Adidas';
import { Puma } from './components/pages/Puma';
import { NavLink } from 'react-router-dom';
import { Error404 } from './components/pages/Error404';
import { Snicker } from './components/pages/Snicker';
import { snickersArr } from './data/ArraysOfSnickers';
import { Prices } from './components/pages/Prices';


const style = ({ isActive }: { isActive: boolean }) => isActive ? styles.active : ''
function App() {
    const { adidas, puma } = snickersArr
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink to={'adidas'} className={style}>adidas</NavLink></div>
                    <div><NavLink to={'puma'} className={style}>puma</NavLink></div>
                    <div><NavLink to={'abibas'} className={style}>abibas</NavLink></div>
                    <br />
                    <div><NavLink to={'prices'} className={style}>оптовикам</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/' element={<Navigate to={'/adidas'} />} />
                        <Route path='/adidas' element={<Adidas adidasArr={adidas.data} />} />
                        <Route path='/puma' element={<Puma pumaArr={puma.data} />} />
                        <Route path='/abibas' element={<Abibas />} />

                        <Route path='/:firm/:model' element={<Snicker snickersArr={snickersArr} />} />
                        <Route path='/prices' element={<Prices />} />

                        <Route path='error404' element={<Error404 />} />
                        <Route path='/*' element={<Error404 />} />
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2024</div>
        </div>
    );
}


export default App;
