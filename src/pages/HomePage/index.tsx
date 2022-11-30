import React from 'react';
import { PATH } from 'constants/path';
import { useNavigate } from 'react-router-dom';
import s from './s.module.css';
import sless from './sless.module.less';
import UserStore from 'store/User';
import HeaderIcon from './images/header.png';
import SvgIcon from './images/apple.svg';

const Page = (): React.ReactElement => {
    const navigate = useNavigate();
    const [, set] = UserStore.useStore();
    React.useEffect(() => {
        set('data', {
            name: `klarity - User-${Math.floor(Math.random() * 100)}`,
            age: 25,
        });
    }, []);
    return (
        <>
            <img src={SvgIcon} alt="icon" className={s.img} />
            <img src={HeaderIcon} alt="icon" className={s.img} />
            <ul className={s.wrap}>
                <li />
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
        </>
    );
};

export default Page;
