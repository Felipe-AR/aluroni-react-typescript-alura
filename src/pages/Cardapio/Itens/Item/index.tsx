import React from "react";
import logo from "assets/logo.svg";
import styles from "./Item.module.scss";
import classNames from "classnames";

interface Props {
  title: string;
  description: string;
  photo: string;
  size: number;
  serving: number;
  price: number;
  id: number;
  category: {
    id: number;
    label: string;
  };
}

export default function Item(props: Props) {
  const { title, description, photo, size, serving, price, category } = props;
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt="" />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classNames({
              [styles.item__tipo]: true,
              [styles[`item__tipo__${category.label.toLowerCase()}`]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={styles.item__porcao}>{size}g</div>
          <div className={styles.item__qtdpessoas}>
            Serve {serving} pessoa{serving === 1 ? "" : "s"}
          </div>
          <div className={styles.item__valor}>
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "brl",
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
