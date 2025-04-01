import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <h1>Главная</h1> 
       <Link href='/blog'>Блог</Link>
       <Link href='/map'>Где купить</Link>
       <Link href='/product'>Товар</Link>
      </main>
    </div>
  );
}
