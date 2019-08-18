import React, {Component, Fragment} from 'react';

// Styles
import './Contact.scss'

// Components
import PageTitle from "../PageTitle/PageTitle";


export default class Contact extends Component {
    render() {
        return (
            <Fragment>
                <main className='bg-contact'>
                    <PageTitle title='Contact' divider='divider-white' />
                    <div>
                        <section>
                            <form action="">
                                <label htmlFor=""><input type="text"/></label>
                                <label htmlFor=""><input type="text"/></label>
                                <label htmlFor=""><input type="text-area"/></label>
                                <input type="submit" value='Envoyer' />
                            </form>
                        </section>
                        <section>
                            <ul>
                                <li> DanieleSnijers@gmail.com </li>
                                <li> 0496 / 456 125 </li>
                                <li> Avenue Eugène Mascaux 781, 6001, Marcinelle </li>
                            </ul>
                        </section>
                    </div>
                </main>
            </Fragment>
        );
    }
}
