import Head from 'next/head';
import Bio from './components/Bio';
import Header from './components/Header';
import Meta from './components/Meta';
import Aside from './components/Aside';
import Playarea from './components/Playarea';

export default function Home() {
  return (


    <div className="gridc font-sans ">
      <section className="gridc__top">
      <Head>
        <title>Adopt Us</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Meta></Meta>
        <Header></Header>
      </section>
      <aside className="gridc__aside gridc__aside-shrink"> {/* gridc__aside-stretch */}
        <Aside></Aside> 
       </aside>
      <section className="gridc__middle">
        <main>          
          <Bio/>
          {/*if edit true <bioform></bioform>*/}
        </main>
      </section>
      <section className="gridc__right">
        <Playarea></Playarea>   
        <Playareacard></Playareacard>
      </section>
      <footer className="gridc__footer">
            <a
              className="flex items-center justify-center"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered since 2021...{' '}
              
            </a>
      </footer>
    </div>

  )
}
