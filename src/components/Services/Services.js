import React, {Component, Fragment} from 'react';
import './Services.scss'
import imgBath from '../../assets/img/bain.png'
import imgTrimming from '../../assets/img/heart.png'
import imgScissors from '../../assets/img/scisso.png'
import imgPaw from '../../assets/img/paw.png'
import serviceDog from '../../assets/img/serviceDog.png'

export default class Services extends Component {
    render() {
        return (
            <Fragment>
                <main className='services-container'>
                    <div className=' colored-bg'>
                     </div>
                    <header>
                        <h2 className='main-title'>Nos services</h2>
                        <div className='divider-black' />
                    </header>
                    <div className='general-container'>
                    <section className='container-sub container-sub-left flex-center'>
                         <div className='box-center'>
                            <article className='article-left'>
                                <div className='services-txt'>
                                    <h3>Bains</h3>
                                    <p>Les bains sont inclus dans tous nos services sauf pour le trimming.</p>
                                </div>
                                <img src={imgBath} alt="Icône de bain"/>
                            </article>
                            <article className='article-left'>
                                <div className='services-txt'>
                                    <h3>Trimming</h3>
                                    <p>Une technique professionnelle pour le bien être de votre animal.</p>
                                </div>
                                <img src={imgTrimming} alt="Icône de trimming"/>
                            </article>
                        </div>
                    </section>
                    <img className='service-Dog' src={serviceDog} alt="image de chien"/>
                    <section className='container-sub container-sub-right flex-center'>
                        <div className='box-center'>
                            <article className='article-right'>
                                <img src={imgScissors} alt="Icône de ciseaux"/>
                                <div className='services-txt'>
                                    <h3>Coupes ciseaux</h3>
                                    <p>Coupes standards, coupes asiatiques, tonte.</p>
                                </div>
                            </article>
                            <article className='article-right'>
                                <img src={imgPaw} alt="Icône de patte"/>
                                <div className='services-txt'>
                                    <h3>Coupe d'ongles et nettoyage des coussinets</h3>
                                </div>
                            </article>
                        </div>
                    </section>
                    </div>
                </main>

            </Fragment>
        );
    }
}
