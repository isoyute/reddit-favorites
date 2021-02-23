import Layout from './components/Layout';
import Content from './components/Content';

const App = () => {
    return (
        <div className='app'>
            <Layout>
                <Content />
            </Layout>
        </div>
    );
};

export default App;
