import React from 'react';
import './Users.module.sass';
import styles from "./Users.module.sass";
import userPhoto from '../../assets/user.png'
import * as axios from "axios";


class Users extends React.Component{


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }



    onPageChange = (p) => {
        debugger
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {

        let totalPageCount = Math.ceil ( this.props.totalCount / this.props.pageSize) ;

        let pages = [];
        for ( let i=1; totalPageCount >= i ; i++ ){
            pages.push(i);
        }


        debugger
        return (
            <div className={styles.wrapper}>
                <div className='container'>
                    <div className={styles.title}>Profiles Page</div>

                    <div>{
                        pages.map( p => {
                            return <span className = { this.props.pageNumber === p ? styles.selectedPage : styles.page }
                            onClick = { (e) => { this.onPageChange(p)} }> {p} </span>
                        })
                    }

                    </div>

                    {

                        this.props.users.map(p =>
                            <div key={p.id}>

                                <div className={styles.box}>
                                    <div className={styles.user}>
                                        <div className={styles.imgContainer}>
                                            <img src={p.photos.small != null ? p.photos.small : userPhoto} width='70em'
                                                 alt=""/>
                                        </div>
                                        <div className={styles.buttonContainer}>
                                            {p.followed ? <button onClick={() => {
                                                    this.props.follow(p.id)
                                                }}>unfollow</button> :
                                                <button onClick={() => {
                                                    this.props.unfollow(p.id)
                                                    console.log('adsasd')
                                                }}>follow</button>
                                            }
                                        </div>
                                    </div>
                                    <div className={styles.status}>
                                        <div className={styles.userName}>
                                            <h2>{p.name}</h2>
                                        </div>
                                        <div className={styles.statusContainer}>
                                            <span>{p.status}</span>
                                        </div>
                                        <div className={styles.locationContainer}>
                                            <span>{/*"{p.location.country}, {p.location.city}"*/}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}

export default Users;