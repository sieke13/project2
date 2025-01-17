import { useState, useEffect, useLayoutEffect } from "react";
import { retrieveUsers } from "../api/userAPI";
import type { userData } from "../interfaces/userData";
import ErrorPage from "./errorPage";
import UserList from '../components/users';
import auth from '../utils/auth';

const Home = () => {

    const [users, setUsers] = useState<userData[]>([]);
    const [error, setError] = useState(false);
    const [loginCheck, setLoginCheck] = useState(false);

    useEffect(() => {
        if (loginCheck) {
            fetchUsers();
        }
    }, [loginCheck]);

    useLayoutEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = () => {
        if (auth.loggedIn()) {
            setLoginCheck(true);
        }
    };

    const fetchUsers = async () => {
        try {
            const data = await retrieveUsers();
            setUsers(data)
        } catch (err) {
            console.error('Failed to retrieve tickets:', err);
            setError(true);
        }
    }

    if (error) {
        return <ErrorPage />;
    }

    return (
        <>
            {
                !loginCheck ? (
                    <div className='login-notice'>
                        <h1>
                            Login to view all your friends!
                        </h1>
                    </div>
                ) : (
                    <UserList users={users} />
                )}
        </>
    );
};

export default Home;
