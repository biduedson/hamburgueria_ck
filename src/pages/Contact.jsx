import logo from '../assets/logo01.png'
import Image from 'next/image'
import { MdOutlineMail } from 'react-icons/md'
import { BsPhone } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { socialsMedias } from '../data/data'
import { transporter } from '../sendMail/senDmail.js'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {


    const [inputs, setInputs] = useState({
        name: '',
        message: '',
        email: '',

    });

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
        console.log(inputs)
    }


    const sendemail = (e) => {
        e.preventDefault()

        if (inputs.nome === '' || inputs.email === '' || inputs.message === '') {
            alert("Preencha todos os campos")
            return;
        }
        const templateParams = {
            fron_name: inputs.name,
            message: inputs.message,
            email: inputs.email
        }


        emailjs.send("service_2fxa9hn", "template_6xgk9k4", templateParams, "hJlzYEvM38M50u0Jz")
            .then((response) => {
                console.log("EMAIL ENVIADO", response.status, response.text)
                setInputs({
                    name: '',
                    message: '',
                    email: '',
                })
            }, (err) => {
                console.log('ERRO', err)
            })

    }
    return (
        <div className="contact">
            <div className="contact-content">

                <section className='section-left-contact'>
                    <h1>Olá,  a Hamburgueria CK aguarda seu contato.</h1>
                    <div className='contact-description'>
                        <p> <span>{<MdOutlineMail />}</span>harburgueriack2023@gmail.com</p>
                        <p><span>{<BsPhone />}</span>+551196376-7135</p>
                        <p><span>{<GoLocation />}</span>Rua Deputado Doutor Aldo Lupo 227 Francisco Morato - SP</p>
                    </div>
                    <div className='social-midias-contact'>
                        {
                            socialsMedias.map((media) => {
                                return (
                                    <a key={media.id} href={media.link} >{media.icon}</a>
                                )
                            })
                        }
                    </div>
                </section>
                <section className='section-rigth-contact'>
                    <div className='form-header'>
                        <h1>Get in touch with us</h1>
                        <div id='contact-presentation'>
                            <Image id='logo-contact' src={logo} alt='logo'></Image>
                            <p>Hi, I’m hamburgueriaCK. Need help? Use the form below or email me at hello@california_golfclub.org.</p>
                        </div>
                    </div>
                    <form className='form-content' onSubmit={sendemail}>

                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={inputs.name}
                        />
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={inputs.email}
                        />
                        <label htmlFor="message" name>Mensagem:</label>
                        <textarea
                            id="textarea-contact"
                            type="text"
                            name="message"
                            onChange={handleChange}
                            value={inputs.message}
                        />
                        <button type='submit'>Enviar mensagem</button>
                    </form>

                </section>


            </div>
        </div>

    )
}

export default Contact
