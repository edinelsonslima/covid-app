import './index.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <p>
                Fonte:{' '}
                <a
                    href='https://github.com/owid/covid-19-data'
                    rel='noreferrer'
                    className='link-footer'
                    target="_blank"
                >
                    OWID
                </a>
            </p>
            <p>
                Developer by:{' '}
                <a
                    href='https://edinelsonlima.netlify.app'
                    rel='noreferrer'
                    className='link-footer'
                    target="_blank"
                >
                    @edinelsonslima
                </a>
            </p>
        </footer>
    );
};

export { Footer };
