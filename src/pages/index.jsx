import { socialsMedias } from '../data/data'
import Link from 'next/link'
import Image from 'next/image'

function index() {


    return (
        <div className="home-container">
            <section className="home-left-content">
                <h1>BEM VINDOS Á HAMBURGUERIA CK </h1>
                <p>Se você ama hambúrguer, aqui você está no lugar certo!</p>
                <section className="home-socials-content">
                    {
                        socialsMedias.map((media) => {
                            return (
                                <>
                                    <a key={media.id} id={media.name} href={media.link}>{media.icon}</a>

                                </>
                            )
                        })
                    }
                </section>
                <Link className='menu-link' href="/Menu">Confira nosso menu</Link>

            </section>
        </div>
    )
}

export default index
