import React from 'react';
import cls from "./PreloaderConnection.module.css";
import CircularProgress from "@mui/material/CircularProgress";


interface PropsType {

}
const PreloaderConnection = () => {
    return (
         <div className={cls.progress}>Connection ... <CircularProgress sx={{color: '#ffffff'}} /></div>
    );
};

export default PreloaderConnection;
