import {
    createContext,
    Dispatch,
    SetStateAction,
    useMemo,
    useState,
} from 'react';

interface ModalProviderProps {
    children: JSX.Element[] | JSX.Element;
}

interface ModalContextProps {
    isModal: boolean;
    setIsModal: Dispatch<SetStateAction<boolean>>;
    isAbbr: string;
    setIsAbbr: Dispatch<SetStateAction<string>>;
}

const ModalContext = createContext({} as ModalContextProps);

const ModalProvider = (props: ModalProviderProps) => {
    const [isModal, setIsModal] = useState(false);
    const [isAbbr, setIsAbbr] = useState('');

    const value = useMemo(
        () => ({ isModal, setIsModal, isAbbr, setIsAbbr }),
        [isModal, setIsModal, isAbbr, setIsAbbr]
    );

    return (
        <ModalContext.Provider value={value}>
            {props.children}
        </ModalContext.Provider>
    );
};

export { ModalContext, ModalProvider };
