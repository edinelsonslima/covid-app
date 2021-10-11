import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Main } from '../../components/main';
import { Search } from '../../components/search';
import { ApiProvider } from '../../context/api';

const Home = () => {
    return (
        <ApiProvider>
            <Header />
            <Search />
            <Main />
            <Footer/>
        </ApiProvider>
    );
};

export { Home };
