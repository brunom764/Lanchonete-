import './contatos.css'

function Contato(){
    return(
        <section className='estabelecimentos'>
            <div className='estabelecimento'>
                <h1 className='tituloEstabelecimento' > Recife </h1>
                <p className='infoEstabelecimento'>Fone: 81 3333-4444</p>
                <p className='infoEstabelecimento'>Email: R_loucoxinhas@gmail.com</p>
            </div>
            <div className='estabelecimento'>
                <h1 className='tituloEstabelecimento' >Caruaru</h1>
                <p className='infoEstabelecimento'>Fone: 81 3444-4443</p>
                <p className='infoEstabelecimento'>Email: C_loucoxinhas@gmail.com</p>
            </div>
            <div className='estabelecimento'>
                <h1 className='tituloEstabelecimento' >Petrolina</h1>
                <p className='infoEstabelecimento'>Fone: 81 3334-3444</p>
                <p className='infoEstabelecimento'>Email: P_loucoxinhas@gmail.com</p>
            </div>
        </section>
    )
}

export default Contato