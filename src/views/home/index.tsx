import { useContext } from 'react';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Main } from '../../components/main';
import { Modal } from '../../components/modal';
import { Search } from '../../components/search';
import { ModalContext } from '../../context/modal.context';
import './index.css'
const Home = () => {
    const { isAbbr, isModal } = useContext(ModalContext);
    return (
        <>
            {isModal ? (
                <>
                    <Header />
                    <Modal abbreviation={isAbbr} />
                    <Footer />
                </>
            ) : (
                <section className="home">
                    <div>
                        <Header />
                        <Search />
                    </div>
                    <Main />
                    <Footer />
                </section>
            )}
        </>
    );
};

export { Home };
