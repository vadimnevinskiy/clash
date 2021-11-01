import React, {useState} from 'react';
import cls from "./MenuLanguage.module.css";
import {Dropdown, Menu} from "antd";
import { DownOutlined } from '@ant-design/icons';


const MenuLanguage = () => {
    const [lang, setLanguage] = useState<string>('Ru');

    const changeLang = (value: any) => {
        setLanguage(value.key);
    };



    const menu = (
        <Menu onClick={changeLang}>
            <Menu.Item key="Ru">
                Ru
            </Menu.Item>
            <Menu.Item key="En">
                En
            </Menu.Item>
        </Menu>
    );


    return (
        <div className={cls.menuLang}>
            <Dropdown overlay={menu} trigger={['click']}>
                <a className={cls.langLink + " ant-dropdown-link"} onClick={e => e.preventDefault()}>
                    {lang} <DownOutlined />
                </a>
            </Dropdown>
        </div>
    );
};

export default MenuLanguage;
