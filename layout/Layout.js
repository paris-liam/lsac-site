import Head from 'next/head';

export default function Layout ({children}) {
    return (<>
    <Head>
    <title>Create Next App</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <div className="header-container">
      <a href="/" className="header-title-image"><img src="/HeaderLogo.png" alt="Vercel Logo" /></a>
      <div className="header-link-container">
        <a href="/future-events"><h2>Future Events</h2></a>
        <a href="/sermon-archive"><h2>Sermon Archive</h2></a>
        <a href="/teachings"><h2>Teachings</h2></a>
      </div>
    </div>
    <main>
    {children}
    </main>
    <div className="siteby"><sub>site made by <a href="https://twitter.com/liam_paris">Liam Paris</a></sub><sub> "Let's Start a Cult" graphic by <a href="https://www.instagram.com/boy__ocean/">Andrew Shearer</a></sub></div>
    </>)
}