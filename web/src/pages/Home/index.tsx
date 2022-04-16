import React from 'react';
import { FiLogIn} from 'react-icons/fi';
import { Link} from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                <img src={logo} alt="Our-books"/>
                </header>
                <main>
                    <h1> Seu marketplace de doação de livros. </h1>
                    <p>Ajudamos pessoas a encontrarem livros para doação de forma eficiente e divertida.</p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn/>
                        </span>
                        <strong>Cadastre uma nova doação</strong>
                    </Link>
                </main>

            </div>
        </div>
    )
}

export default Home;