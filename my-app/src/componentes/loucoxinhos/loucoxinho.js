import { Link } from 'react-router-dom'
import './loucoxinho.css'
import useFormik from './form/form';
import BannerLoucoxinho from '../bannerLoucoxinho/bannerLoucoxinho.js'


function Loucoxinho(){

    const formik = useFormik({
        initialValues: {
          userEmail: '@gmail.com',
          userPassword: '',
          userName: '',
          userIdade: '',
          userCidade: '',
          userMail: '@gmail.com',
          userPasswordo: ''
        },  validate: function (values) {
            const errors = {};
          
            if(!values.userEmail.includes('@') || !values.userEmail.includes('.com') || values.userEmail.length < 11) {
              errors.userEmail = 'Por favor, insira um email válido';
            }
          
            if(values.userPassword.length < 8) {
              errors.userPassword = 'A senha deve ter mais que 8 caracteres'
            }
            return errors;
          }
        });


    function entrarUsuario(e){
        e.preventDefault()
        if (!formik.errors.userEmail && !formik.errors.userPassword) {
            alert('Bem-vindo, novamente')
        }
        else {
            alert('Senha ou login errado. Tente novamente.')
        }
    }

    /*function ocultaLogin(e){ 
        const cadastro = document.getElementById('formCadastro')
        const login = document.getElementById('formLogin')
        login.classList.add("oculta");
        cadastro.classList.remove("oculta")
    } */

    return(
        <>
        <section>
                <BannerLoucoxinho/>
            </section>
        <section className='loginCadastro'>
        <form className='formLogin' id='formLogin' onSubmit={entrarUsuario}>
            <div className='infoLogin'>
                        <label htmlFor='nome' className='labelLogin'> Email:</label>
                        <input
                        type="text"
                        text="name"
                        name="userEmail"
                        placeholder="Insira seu email"
                        className='inputLogin'
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.userEmail}
                        />
                        {formik.touched.userEmail && formik.errors.userEmail && <span className="formField__error">{formik.errors.userEmail}</span>}
                    </div>
                <div className='infoLogin'>
                        <label htmlFor='senha' className='labelLogin'> Senha:</label>
                        <input
                        type="password"
                        text="senha"
                        name="userPassword"
                        placeholder="Insira sua senha"
                        className='inputLogin'
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.userPassword}
                        />
                        {formik.touched.userPassword && formik.errors.userPassword && <span className="formField__error">{formik.errors.userPassword}</span>}
                    </div>
                    <input type="submit" value="Entrar" className='btnLogin'/>
                    <Link to="/cadastroLoucoxinho"><button className='btnLoginCadastro' id='btnCadastro'> Quero me cadastrar</button></Link>
            </form>
        </section>
        </>
    )
}

export default Loucoxinho