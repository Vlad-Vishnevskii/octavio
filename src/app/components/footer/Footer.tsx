'use client';

import { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import Link from 'next/link';
import { PolicyText } from '../policy-content';

import styles from './footer.module.scss';

export const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Image src="/octavio-logo-white.webp" width={200} height={57} alt="OCTAVIO" />

          <nav className={styles.nav}>
            <p className={styles.nav_title}>Инфо</p>
            <Link className={styles.nav_item} href="/">
              Главная
            </Link>
            <Link className={styles.nav_item} href="/blog">
              Блог
            </Link>
            <Link className={styles.nav_item} href="/map">
              Где купить?
            </Link>
          </nav>

          <div className={styles.info}>
            <p>Официальный дистрибьютер</p>
            <p>ООО ТК “Технологика”</p>
            <a href="https://tl-sound.ru/">tl-sound.ru</a>
          </div>
          <ul className={styles.contacts}>
            <li className={styles.contacts_item}>
              <a className={styles.contacts_link} href="tel:88007003334">
                {'8 (800) 700-33-34'}
              </a>
            </li>
            <li className={styles.contacts_item}>
              <a className={styles.contacts_link} href="mailto:info@tl-sound.ru">
                info@tl-sound.ru
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <p>©Octavio 2025</p>
          <p onClick={openModal}>Политика конфиденциальности</p>
          <p>Design: Denis Vaschenko</p>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <button className={styles.closeBtn} onClick={closeModal}>
          &times;
        </button>
        <PolicyText />
      </Modal>
    </footer>
  );
};
