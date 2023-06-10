import Link from 'next/link'
import logo01 from '../assets/logo01.png'
import { socialsMedias } from '../data/data'
import Image from 'next/image'
import { BsWhatsapp } from 'react-icons/bs'


function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <h2><Image src={logo01} alt='logo' id='logo-footer' />HamburgueriaCK</h2>

                <nav className='footer-nav'>
                    <ul>
                        <li>
                            <Link href="/">Início</Link>
                            <Link href="/Menu">Menu</Link>
                            <Link href="/Contact">Contato</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    {
                        socialsMedias.map((media) => {
                            return (
                                <a className="social-link-icon" key={media.id} id={media.name} href={media.link}>{media.icon}</a>
                            )
                        })
                    }
                </div>
                <div className='copyright-content'>
                    <p className='copyright'>
                        Desenvolvido   por <small> EGAdisign &copy;2023 All Rights Reserved</small>
                    </p>
                    <p id='ega-design-phone'><span>{<BsWhatsapp />}</span> +551193486-7766</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
