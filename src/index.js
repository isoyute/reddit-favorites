import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<React.StrictMode>
		<GeistProvider themeType='dark'>
			<CssBaseline />
			<Provider store={store}>
				<App />
			</Provider>
		</GeistProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
