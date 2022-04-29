import React from 'react';
import styles from './Menu.module.scss';

import { ReactComponent as Logo } from 'assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Menu() {
  const rotas = [
    {
      label: 'Inicio',
      to: '/'
    },
    {
      label: 'Cardápio',
      to: '/cardapio'
    },
    {
      label: 'Sobre',
      to: '/sobre'
    }
  ];
  return (
    <nav className={styles.menu}>
      <Logo title="Logo do Aluroni"></Logo>
      <ul className={styles.menu__list}>
        {rotas.map((rota, indice) => (
          <li key={indice} className={styles.menu__link}>
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
