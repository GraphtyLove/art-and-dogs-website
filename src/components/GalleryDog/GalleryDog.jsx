import React, {Component, Fragment} from 'react';
import Gallery from "react-grid-gallery";

// Styles
import './GalleryDog.scss'

// Components
import PageTitle from "../PageTitle/PageTitle";
import photos from './GalleryDogSettings'
import PushToTop from "../PushToTop/PushToTop"
import Background from "../Background/Background";


export default class GalleryDog extends Component {
    render() {
        return (
            <Fragment>
                <Background />
                <PageTitle title='Galerie' divider='divider-colored' />
                <main className='gallery-container'>
                    <Gallery images={ photos }  enableImageSelection={false} tagStyle={{color:'#FEBE51',
                                                                                        backgroundColor: 'rgba(0,0,0,0.65)',
                                                                                        padding: '0.2em 0.6em 0.3em',
                                                                                        borderRadius: '0.25em',
                                                                                        display: 'inline',
                                                                                        fontWeight: '600',
                                                                                        lineHeight: '1',
                                                                                        fontSize: '75%',
                                                                                        textAlign: 'center',
                                                                                        verticalAlign: 'baseline',
                                                                                        whiteSpace: 'nowrap'}} />
                </main>
                <PushToTop />
            </Fragment>
        );
    }
}
