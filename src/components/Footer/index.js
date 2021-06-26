import Github from '../../assets/Github.png'
import Instagram from '../../assets/Instagram.png'
import Linkedin from '../../assets/Linkedin.png'
import './style.css'

const Footer = ()=>{
    return(
    <>
        <footer className="rodape">
            <div className="rodape__principal ">
                <div className='autora'>
                    <h1>Autora</h1>
                    <h2>Juliane Andrade</h2>
                    <p>Pernambucana, 26 anos, estudante de Desenvolvimento WEB front-end pela Reprograma. Graduada em Ciências contábeis e pós-graduanda em Finanças e controladoria.</p>
                </div>
                
                <div className="rodape__redes-sociais">
                    <h2>Redes Sociais</h2>
                    <a href="https://www.instagram.com/julle_andrade/" target="_blank ">
                        <img src={Instagram} alt="Íconde do Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/juliane-andrade-837a05113/" target="_blank ">
                        <img src={Linkedin} alt=" Ícone do Linkedin" />
                    </a>
                    <a href="https://github.com/julianesas" target="_blank ">
                        <img src={Github} alt="Ícone do Github " />
                    </a>
                </div>

            </div>

            <div className="rodape__cc ">
                <p>Creative Commons 2021 | Feito com amor por Juliane Andrade</p>
            </div>
        </footer>   
    </>  
    )
}

export default Footer