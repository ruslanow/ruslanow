import React from 'react';
import styles from './Header.module.sass';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";


let Header = (props) => {
    return (
        <Navbar>
            <NavbarItem path='profile' icon='👽'/>
            <NavbarItem path='chat' icon='💬'/>
            <NavbarItem path='friends' icon='💘 '/>
            {props.isAuth
                ? <div className={styles.buttonsContainer}>
                    <p className={styles.topauthbutton}>
                        <NavLink to='/profile' className={`${styles.button} ${styles.login}`}>{props.login}</NavLink>
                    </p>
                    <p className={styles.topauthbutton}>
                        <button className={`${styles.logout}`} onClick={props.logout}>Logout</button>
                    </p>
                </div>
                : <li className={styles.liquidNavItem}>
                    <NavLink className = {styles.liquidLink} to='/login'>
                        <span>login</span>
                        <div className={styles.liquid}></div>
                    </NavLink>
                 </li>
            }
        </Navbar>
    )
}

let Navbar = (props) => {
    return (<div className={styles.navbarWrapper}>
            <nav className={styles.navbar}>
                <NavbarLogo title='test-project'/>
                <ul className={styles.navbarNav}>
                    {props.children}
                </ul>
            </nav>
        </div>
    )
}
let NavbarItem = (props) => {
    return (
        <li className={styles.navItem}>
            <NavLink to={`/${props.path}`} className={styles.iconButton}>
                {props.icon}
            </NavLink>
        </li>
    )
}
let NavbarLogo = (props) => {
    return (
        <span className={styles.navLogo}>
            <NavLink to={`/`} className={styles.s}>
                {props.title}
            </NavLink>
        </span>
    )
}

export default connect(null, {logout})(Header);



{/*                        <Canvas shadowMap colorManagmernt className={styles.canvas} camera={{position: [-15, 2, 10], fov: 60}}>
                <ambientLight intensity={0.3}/>
                <directionalLight
                    castShadow
                    position={[0, 10, 0]}
                    intensity={1.2}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}/>

                <pointLight position={[-10, 0, -20]} intensity={0.5}/>
                <pointLight position={[0, 10, 0]} intensity={1.5}/>
                <Cube position={[0, -10, 0]}/>
                <group>
                    <mesh
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, -3, 0]}>
                        <planeBufferGeometry attach='geometry' args={[100, 100]}/>
                        <shadowMaterial attach='material' opacity={0.3}/>
                    </mesh>
                </group>
                <OrbitControls/>
            </Canvas>*/}