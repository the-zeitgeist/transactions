import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
