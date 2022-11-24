import React from 'react';
import s from './s.module.css';

import { get, post } from 'utils/request';
import { FETCH_NEWS, POST_NEWS } from 'constants/api';
import UserStore from 'store/User';

const Page = ():React.ReactElement => {
    const [getUser] = UserStore.useStore();
    const user = getUser('data');
    React.useEffect(() => {
        get({
            url: FETCH_NEWS,
            errorHandle: () => {},
        }).then((data) => {
            console.log(data);
        });
    }, []);

    React.useEffect(() => {
        const fetch = async () => {
            const result = await post({ url: POST_NEWS, errorHandle: () => {} });
            console.log(result);
        };
        fetch();
    }, []);

    return (
        <div className={s.wrap}>
            <div style={{ textAlign: 'center' }}>
                <h3>User</h3>
                <p>Name: {user?.name || 'Not set'}</p>
                <p>Age: {user?.age || 'Not set'}</p>
            </div>
            <h2>News</h2>
            <div className={s.content}>
                <p>Content</p>
            </div>
        </div>
    );
};

export default Page;
