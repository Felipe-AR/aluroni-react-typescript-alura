import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.scss';
import stylesTema from 'styles/Tema.module.scss';

export default function PaginaPadrao() {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.header__text}>Casa do Codigo e da Massa</div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
      </div>
    </React.Fragment>
  );
}
