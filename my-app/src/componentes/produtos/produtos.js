import './produtos.css'
import BannerLoucoxinho from '../bannerLoucoxinho/bannerLoucoxinho.js'


export  const produtos = [
    {id: 1, nome: "Minicoxinha", img:"https://i.imgur.com/yhJhU83.png", preco: "6,00"},
    {id: 2, nome: "Coxinha", img: "https://i.imgur.com/QxyopfF.png", preco: "10,00"},
    {id: 3, nome: "Clone coxinha", img: "https://i.imgur.com/46ZlzOo.png", preco: "13,00"},
    {id: 4, nome: "Combo minicoxinha", img: "https://i.imgur.com/0Cc5cOT.png", preco: "20,00"},
    {id: 5, nome: "Refrigerante", img: "https://i.imgur.com/LHW5yd3.png", preco: "6,00"},
    {id: 6, nome: "Suco", img: "https://i.imgur.com/wjUnK63.png", preco: "7,00"}

]

function Cardapio(){
    return (
        <>
             <section>
                <BannerLoucoxinho/>
            </section>
        <h1 className='tituloCardapio'> CARDÁPIO</h1>
            <section className='produtos'>
                {produtos.map(produto => {
                    return (
                        <div className='produto' key={produto.id}>
                            <h2 className='produtoTitulo'>{produto.nome}</h2>
                            <img src={produto.img} alt={produto.nome} className='produtoImagem'></img>
                            <p className='produtoPreco'>{produto.preco}</p>
                </div>

                    )
                })} 
            </section>
        </>
    )
}

export default Cardapio