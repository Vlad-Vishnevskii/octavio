import Link from 'next/link';

export const Header = () => {
  return (
    <header className="">
      <nav>
        <Link href="/">Главная</Link>
        <Link href="/blog">Блог</Link>
        <Link href="/map">Где купить</Link>
      </nav>
    </header>
  );
};
