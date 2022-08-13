import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cupertino Panes</title>
        <meta name="description" content="Easily create most modern dynamic Panes for your progressive applications in few steps. Any framework." />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B5HS3ML7F7"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B5HS3ML7F7', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>

      <main className={styles.main}>
        <iframe src="https://ghbtns.com/github-btn.html?user=roman-rr&repo=cupertino-pane&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>

        <a href="https://github.com/roman-rr/cupertino-pane" className={styles.card}>
          <Image src="/logo-2.jpg" alt="Cupertino Panes" width={1000} height={500} />
        </a>
        <h3>Comming Soon</h3>
      </main>
    </div>
  )
}
