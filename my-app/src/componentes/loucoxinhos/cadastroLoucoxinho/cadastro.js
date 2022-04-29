import { Link } from 'react-router-dom';
import './cadastro.css'
import useFormik from '../form/form';
import BannerLoucoxinho from '../../bannerLoucoxinho/bannerLoucoxinho.js'


function CadastroLoucoxinho(){

    const formik = useFormik({
        initialValues: {
          userName: '',
          userIdade: '',
          userCidade: '',
          userMail: '@gmail.com',
          userPasswordo: ''
        },  validate: function (values) {
            const errors = {};
            if(values.userName.length < 4 || !isNaN(parseInt(values.userName))) {
                errors.userName = 'Por favor, insira uma resposta válida'
            }
            if(isNaN(parseInt(values.userIdade))) {
                errors.userIdade = 'Por favor, insira um número'
            }
            if(values.userCidade.length < 4 || !isNaN(parseInt(values.userCidade))) {
                errors.userCidade = 'Por favor, insira uma resposta válida'
            }
            if(!values.userMail.includes('@') || !values.userMail.includes('.com') || values.userMail.length < 11) {
                errors.userMail = 'Por favor, insira um email válido';
            }
            
            if(values.userPasswordo.length < 8) {
                errors.userPasswordo = 'A senha deve ter mais que 8 caracteres'
            }
          
            return errors;
          }
        });

        function cadastrarUsuario(e){
            e.preventDefault()
            if (!formik.errors.userMail && !formik.errors.userPasswordo && !formik.errors.userName && !formik.errors.userIdade && !formik.errors.userCidade) {
                alert(`Bem-vindo!`)
            }
            else {
                alert('Algo deu errado. Tente novamente.')
            }
        }

    return (  
    <>
        <section>
                <BannerLoucoxinho/>
            </section>
        <form onSubmit={cadastrarUsuario} className="formCadastro" id='formCadastro'>
                    <div className='infoCadastro'>
                        <label htmlFor='name' className='labelCadastro'> Nome:</label>
                        <input
                        type="text"
                        text="Nome completo"
                        name="userName"
                        placeholder="Insira o seu nome"
                        className='inputCadastro'
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.userName}
                        />
                        {formik.touched.userName && formik.errors.userName && <span className="formField__error">{formik.errors.userName}</span>}
                    </div>
                    <div className='infoCadastro'>
                        <label htmlFor='idade' className='labelCadastro'> Idade:</label>
                        <input
                        type="text"
                        text="Idade"
                        name="userIdade"
                        placeholder="Insira a sua idade"
                        className='inputCadastro'
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.userIdade}
                        />
                        {formik.touched.userIdade && formik.errors.userIdade && <span className="formField__error">{formik.errors.userIdade}</span>}
                    </div>
                    <div className='infoCadastro'>
                        <label htmlFor='cidade' className='labelCadastro'> Cidade:</label>
                        <input
                        type="text"
                        text="Cidade"
                        name="userCidade"
                        placeholder="Insira a sua cidade"
                        className='inputCadastro'
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.userCidade}
                        />
                        {formik.touched.userCidade && formik.errors.userCidade && <span className="formField__error">{formik.errors.userCidade}</span>}
                    </div>
                    <div className='infoCadastro'>
                        <label htmlFor='email' className='labelCadastro'> Email:</label>
                        <input
                        type="mail"
                        text="Email"
                        name="userMail"
                        placeholder="Insira seu email"
                        className='inputCadastro'
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.userMail}
                        />
                        {formik.touched.userMail && formik.errors.userMail && <span className="formField__error">{formik.errors.userMail}</span>}
                    </div>
                    <div className='infoCadastro'>
                        <label htmlFor='senha' className='labelCadastro'> Senha:</label>
                        <input
                        type="password"
                        text="senha"
                        name="userPasswordo"
                        placeholder="Insira uma senha"
                        className='inputCadastro'
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.userPasswordo}
                        />
                        {formik.touched.userPasswordo && formik.errors.userPasswordo && <span className="formField__error">{formik.errors.userPasswordo}</span>}
                    </div>
                    <input type="submit" value="Cadastrar" className='btnCadastro'/>
                    <Link to="/loucoxinho"><button className='btnLoginCadastro'  id='btnLogin'>Já sou um usuário</button></Link>
                </form>
            </>
    )}

export default CadastroLoucoxinho