import './home.css'
import { Link } from 'react-router-dom'
import coxinha from '../../img/coxinha.png'
import coxinhaEspecial from '../../img/coxinhaEspecial.png'
import BannerLoucoxinho from '../bannerLoucoxinho/bannerLoucoxinho.js'


function Home(){
    return(
        <>
            <section>
                <BannerLoucoxinho/>
            </section>
            <section className='banner'>
                <h2 className='subtitulo'>TEMOS A  MELHOR  COXINHA  DO  ESTADO</h2>
                <ul className='tiposCoxinha'>
                <li className='tipoCoxinha'>
                    <h3 className='semiTitulo'>Coxinhas tradiconais</h3>
                    <img src={coxinha} alt='coxinha' className='coxinha1'/>
                    <Link to="/cardapio"><button className='btnValor'>VER MAIS</button></Link>
                </li>

                <li className='tipoCoxinha'>
                    <h3 className='semiTitulo'> Coxinhas especiais</h3>
                    <img src={coxinhaEspecial} alt='coxinha' className='coxinhas2'/>
                    <Link to="/cardapio"><button className='btnValor'>VER MAIS</button></Link>
                </li>
                </ul>
                <section className='homeCardapio'>
                <h2 className='subtitulo'>CONHEÇA O NOSSO CARDÁPIO</h2>
                <Link to="/cardapio"><button className='btnHome'>CARDÁPIO</button></Link>
                </section>
            </section>
        </>
    )
}

export default Home