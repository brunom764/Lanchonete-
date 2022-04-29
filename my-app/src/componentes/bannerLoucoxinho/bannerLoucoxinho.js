import './bannerLoucoxinho.css'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'

function BannerLoucoxinho(){
    return (
        <section className='homeLoucoxinhos'>
                <img src={logo} alt='logo' className='logoLoucoxinho'></img>
                <div className='homeLoucoxinhosInfo'>
                    <Link to="/loucoxinho"><button className='btnHome'>SEJA UM LOUCOXINHO</button></Link>
                    <h3 className='semiTitulo'>O clube de vantagens oferece compras pelo site,cupoms diários, promoções relâmpagos e entrega grátis</h3>
                </div>
                <img src={logo} alt='logo' className='logoLoucoxinho'></img>
        </section>
    )
}

export default BannerLoucoxinho