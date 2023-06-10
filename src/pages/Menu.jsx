import Image from 'next/image'
import Link from 'next/link';
import { haburguersDescription, socialsMedias, drinks } from '../data/data'
import { useState } from 'react';
import { MdFastfood } from 'react-icons/md'


function Menu() {
    const [dataItens, setDataItens] = useState(haburguersDescription)

    return (
        <section className="menu">
            <div className='background-linear'></div>
            <h1><span>{<MdFastfood />}</span> Menu</h1>
            <div className='bts-menu-container'>
                <button onClick={() => setDataItens(haburguersDescription)} >Hamburguers</button>
                <button>Combos</button>
                <button onClick={() => setDataItens(drinks)}>Bebidas</button>
            </div>
            <div className='cards-hamburguers'>
                {
                    dataItens.map((iten) => {
                        return (
                            <div className='card-harburguer' key={iten.id} style={{
                                opacity: '0',
                                animation: ' zoomIn 1s forwards',
                                animationDelay: `${iten.id}`
                            }}>
                                <p>{iten.name}</p>
                                <Image src={iten.Image} id='hamburguer-photo' alt='hamburguer-photo' />
                                <div className='description-burguer'>
                                    <p>{iten.description}</p>
                                </div>
                                <button>{iten.price}</button>
                                <div className='socials-link-menu'>
                                    {
                                        socialsMedias.map((media) => {
                                            return (
                                                <>
                                                    <a key={media.id} id={media.name} href={media.link}>{media.icon}</a>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Menu
