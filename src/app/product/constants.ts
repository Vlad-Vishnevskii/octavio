import { ColorsTypes } from './types';

export const PRODUCTS_PAGE_LIST = [
  {
    id: 'maestro',
    title: 'Octavio Maestro',
    images: [
      {
        color: ColorsTypes.white,
        srcList: ['/Maestro-Light/2.webp', '/Maestro-Light/1.webp', '/Maestro-Light/3.webp'],
      },
      {
        color: ColorsTypes.black,
        srcList: ['/Maestro-Black/4.webp', '/Maestro-Black/5.webp', '/Maestro-Black/6.webp'],
      },
    ],
    slogan:
      'Hi-Fi звучание в вашей повседневной жизни: доступ ко всей музыке из ваших любимых потоковых сервисов в высоком разрешении, плюс тысячи радиостанций и подкастов.',
    description: [
      'Maestro был разработан, чтобы объединить в компактном формате все, что составляет качественную аудиосистему: Hi-Fi колонки, встроенное двухканальное усиление и технологии стриминга.',
      'Он наполнит вашу комнату музыкой как в одиночной конфигурации, так и в стереопаре. Точные высокие частоты, естественный вокал и контролируемый бас — все это в устройстве, которое так же просто в подключении, как и обычная колонка. Octavio Maestro объединяет 40 лет опыта в мире high fidelity звука благодаря своим динамикам, разработанным в сотрудничестве с Davis Acoustics. Эта акустическая система поддерживает мультирум и может встраиваться в систему умного дома — все для удобной и современной жизни!',
    ],
    characteristics: [
      {
        label: 'Низкочастотный динамик',
        value: '13 см, кевларовый диффузор Davis Acoustics',
      },
      {
        label: 'Высокочастотный динамик',
        value: '2,5 см, шелковый купольный диффузор Davis Acoustics',
      },
      {
        label: 'Пассивные колонки (x2)',
        value: '13 см, стекловолоконный диффузор',
      },
      {
        label: 'Частотная характеристика (-3 дБ)',
        value: '40 Гц – 20 кГц',
      },
      {
        label: 'Мощность',
        value: '70 Вт (50 Вт НЧ-динамик + 20 Вт ВЧ-динамик)',
      },
      {
        label: 'Класс усиления',
        value: 'Класс D',
      },
      {
        label: 'Поддерживаемые музыкальные сервисы',
        value: 'Deezer / Qobuz / Spotify / Tidal / Apple Music',
      },
      {
        title: 'Интегрированные технологии',
        items: ['Wi-Fi', 'Spotify Connect', 'Tidal Connect', 'Bluetooth (5.0, SBC)'],
      },
      {
        title: 'Входы',
        items: ['Аналоговый вход (3,5 мм разъем)', 'Оптический вход (Toslink)', 'Ethernet'],
      },
      {
        label: 'Аудиоразрешение',
        value: '16 бит / 48 кГц',
      },
      {
        label: 'Мультирум',
        value: 'До 8 колонок',
      },
      {
        label: 'Размеры',
        value: '24 x 21 x 19 см',
      },
      {
        label: 'Вес',
        value: '(одной колонки) 3,4 кг',
      },
    ],
    otherProducts: [
      {
        id: 0,
        href: '/product?id=amp',
        name: 'Octavio Amp',
        imgSrc: '/Amp/8.webp',
      },
      {
        id: 1,
        href: '/product?id=stream',
        name: 'Octavio StreamG2',
        imgSrc: '/Stream/1.png',
      },
    ],
  },
  {
    id: 'amp',
    title: 'Octavio Amp',
    slogan: 'Octavio Amp – это мост между аналоговым и цифровым миром.',
    description: [
      'Элегантный и компактный усилитель с поддержкой Wi-Fi стриминга позволит вам в мгновение ока услышать свои любимые плейлисты из Spotify / Apple Music / Deezer / Tidal / Qobuz  в Hi-Fi качестве. Никаких сложных настроек и паутины из проводов. ',
      'Компактный, мощный, универсальный, Octavio Amp создан, чтобы раскрыть весь потенциал вашей акустики и вдохнуть новую жизнь в вашу музыкальную коллекцию, будь то винил, CD или другие источники. ',
      'Ради качественного звука не нужно жертвовать пространством: Octavio Amp легко найдет свое место на полке, став сердцем вашей домашней развлекательной системы.',
      'Как и все продукты Octavio, усилитель Amp собирается во Франции и разработан из прочных, разборных и ремонтопригодных материалов, чтобы вы могли наслаждаться своей покупкой долгие годы.',
    ],
    images: [
      {
        color: ColorsTypes.black,
        srcList: ['/Amp/8.webp', '/Amp/7.webp', '/Amp/9.webp'],
      },
    ],
    characteristics: [
      {
        title: 'Мощность усиления',
        items: ['2 x 60 Вт (8 Ом)', '2 x 100 Вт (4 Ом)'],
      },
      {
        label: 'КПД',
        value: 'Эффективность более 92%',
      },
      {
        label: 'Искажения',
        value: 'THD менее 0,005% для 1 Вт',
      },
      {
        title: 'Входы',
        items: ['Вспомогательный (RCA) x 2', 'Оптический (Toslink)'],
      },
      {
        title: 'Выходы',
        items: [
          'Возможность подключения кабелей или разъемов типа "банан"',
          'Выход на сабвуфер (для сабвуфера)',
        ],
      },
      {
        label: 'Поддерживаемые музыкальные сервисы',
        value: 'Qobuz / Deezer / Spotify / Tidal / Apple Music',
      },
      {
        title: 'Интегрированные технологии',
        items: ['Wi-Fi', 'Spotify Connect', 'Tidal Connect', 'Bluetooth (5.0, SBC)'],
      },
      {
        label: 'Размеры',
        value: '19.6 x 19.6 x 3.9 см',
      },
      {
        label: 'ЦАП',
        value: 'Burr-Brown PCM1798',
      },
    ],
    otherProducts: [
      {
        id: 0,
        href: '/product?id=maestro',
        name: 'Octavio Maestro',
        imgSrc: '/Maestro-Light/2.webp',
      },
      {
        id: 1,
        href: '/product?id=stream',
        name: 'Octavio StreamG2',
        imgSrc: '/Stream/1.png',
      },
    ],
  },
  {
    id: 'stream',
    title: 'Octavio Stream G2',
    slogan:
      'Octavio Stream — мощный, простой в использовании стример с интуитивно понятным интерфейсом.',
    description: [
      'Улучшенная связь и оптимизированное качество звука делают версию G2 максимально приятной в использовании. Это умное устройство способно также  интегрироваться в мультирум. Без проводов. Без компромиссов.',
      'Octavio Stream G2 идеально интегрируется со всеми экосистемами и поддерживает самые передовые стандарты: Google Cast, AirPlay 2, Spotify Connect, Tidal Connect и многие другие. Транслируйте свою музыку в высоком качестве, по беспроводной сети, прямо из ваших любимых приложений и с любого устройства: смартфона, планшета или компьютера.',
    ],
    images: [
      {
        color: ColorsTypes.black,
        srcList: ['/Stream/1.png', '/Stream/2.png'],
      },
    ],
    characteristics: [
      {
        label: 'Поддерживаемые сервисы потоковой передачи',
        value:
          'Qobuz, Spotify, Deezer, YouTube Music, Amazon Music, Apple Music, Tidal, Soundcloud, Bandcamp... (любое приложение, совместимое с Google Cast или AirPlay 2)',
      },
      {
        label: 'Другие источники контента',
        value:
          'Локальная музыка (загруженная с NAS, телефона или компьютера), Онлайн-радио, Подкасты',
      },
      {
        title: 'Интегрированные технологии',
        items: [
          'Google Cast 2.0',
          'AirPlay 2',
          'Spotify Connect',
          'Tidal Connect',
          'Audirvana',
          'Bluetooth 5.2',
          'Roon Ready',
        ],
      },
      {
        label: 'Аналоговый и оптический выход',
        value: '24 бит / 192 кГц',
      },
      {
        label: 'Питание',
        value: 'USB-C (5 В / 2 А)',
      },
      {
        label: 'Размеры',
        value: '12 x 6.5 x 2.25 см / 4,7 x 2,5 x 0,8 дюймов',
      },
      {
        label: 'ЦАП',
        value: 'Burr-Brown PCM5102A',
      },
    ],
    otherProducts: [
      {
        id: 0,
        href: '/product?id=maestro',
        name: 'Octavio Maestro',
        imgSrc: '/Maestro-Light/2.webp',
      },
      {
        id: 1,
        href: '/product?id=amp',
        name: 'Octavio Amp',
        imgSrc: '/Amp/8.webp',
      },
    ],
  },
];
