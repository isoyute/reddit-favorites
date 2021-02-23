import { Page } from '@geist-ui/react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <Page size='large'>
            <Header />
            {children}
            <Footer />
        </Page>
    );
};

export default Layout;
