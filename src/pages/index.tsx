import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { Jost } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] })
const jost = Jost({ subsets: ['latin', 'cyrillic'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Сайт в стадии разработки: следите за новостями и будьте первыми!</title>
        <meta name="description" content="Извините, но сайт в стадии разработки! Здесь ведутся работы, и мы с нетерпением ждем, когда сможем поделиться чем-то интересным. Следите за обновлениями, чтобы быть в курсе и первыми узнавать о том, что у нас нового. Вместе мы создаем нечто увлекательное – присоединяйтесь к нам!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${montserrat.className}`}>
        <Image
          src='/progressImg.png'
          alt='Сайт в разработке'
          fill
          style={{ objectFit: 'cover', top: 0, left: 0 }}
        />
        <h1 className={`${styles.title} ${jost.className}`}>
          ВЕДЕТСЯ РАЗРАБОТКА
          <div className={`${styles.border} ${styles.borderTopLeftV}`}></div>
          <div className={`${styles.border} ${styles.borderTopLeftH}`}></div>
          <div className={`${styles.border} ${styles.borderTopRightV}`}></div>
          <div className={`${styles.border} ${styles.borderTopRightH}`}></div>
          <div className={`${styles.border} ${styles.borderBottomLeftV}`}></div>
          <div className={`${styles.border} ${styles.borderBottomLeftH}`}></div>
          <div className={`${styles.border} ${styles.borderBottomRightV}`}></div>
          <div className={`${styles.border} ${styles.borderBottomRightH}`}></div>
        </h1>
        <div className={styles.description}>
          Скоро здесь будет кое-что красивое, а пока просто оставайтесь на связи!
        </div>
        <div className={styles.socialNetworks}>
          <a target='_blank' href="https://t.me/alex_yaki">
            <Image
              src='/telegram.svg'
              width={64}
              height={64}
              style={{ filter: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(340deg) brightness(102%) contrast(102%)' }}
            />
          </a>
          <a target='_blank' href="https://www.instagram.com/invites/contact/?i=1y15lxk4n9ys1&utm_content=daptp">
            <Image
              src='/instagram.svg'
              width={64}
              height={64}
              style={{ filter: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(340deg) brightness(102%) contrast(102%)' }}
            />
          </a>
        </div>
      </main>
    </>
  )
}
