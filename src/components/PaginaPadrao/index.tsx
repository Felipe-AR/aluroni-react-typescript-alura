import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.scss';
import stylesTema from 'styles/Tema.module.scss';

export default function PaginaPadrao({
  children
}: {
  children?: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.header__text}>Casa do Codigo e da Massa</div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
        {children}
      </div>
    </React.Fragment>
  );
}
