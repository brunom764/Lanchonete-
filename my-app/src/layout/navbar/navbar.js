import './navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'


function Navbar(){
    return (
        <nav className='navbar'>
                <div className='logotipo'>
                    <Link to="/"><img src={logo} alt="logo" className='logo'/></Link> 
                    <h1 className='titulo'>L o u c o x i n h a s</h1> 
                </div>
                <ul className='list'>
                <li className='item'>
                <Link to="/">&#8962; Home</Link>
                </li>
                <li className='item'>
                <Link to="/cardapio">&#128366; Cardápio</Link>
                </li>
                <li className='item'>
                <Link to="/contatos">&#9990; Contatos</Link>
                </li>
                <li className='item'>
                <Link to="/loucoxinho">&#43; Loucoxinhos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar