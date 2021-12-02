import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StoreProvider } from './components/hooks/stateContext';
import './index.css';

const theme = createTheme({
	palette: {
		primary: {
			main: '#fff',
			constrastText: '#000',
		},
		secondary: {
			main: '#000',
			constrastText: '#fff',
		},
	},
});

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<StoreProvider>
				<App />
			</StoreProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
