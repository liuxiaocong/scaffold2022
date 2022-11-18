import React from 'react';
import { PATH } from 'constants/path';
import { useNavigate } from 'react-router-dom';
import s from './s.module.css';
import sless from './sless.module.less';

const Page = (): React.ReactElement => {
    const navigate = useNavigate();
    return (
        <ul className={s.wrap}>
            {
                Object.keys(PATH).map((key) => {
                    return (
                        <li
                            className={sless.item}
                            key={key}
                            onClick={() => {
                                navigate(PATH[key]);
                            }}
                        >
                            {key}
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default Page;
