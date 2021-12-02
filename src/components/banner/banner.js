import { useContext } from 'react';
import {
	Box,
	Toolbar,
	IconButton,
	AppBar,
	Typography,
	TextField,
	InputAdornment,
} from '@mui/material';
import { makeStyles } from '@material-ui/core';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { StoreContext } from '../hooks/stateContext';
import poliIcon from '../../assets/politecnico.jpg';
import './banner.css';

const useStyles = makeStyles((theme) => ({
	image: {
		marginRight: '10px',
		height: '3rem',
	},
	grow: {
		flexGrow: 1,
	},
	offset: theme.mixins.toolbar,
	input: {
		backgroundColor: '#fff',
		color: '#000',
		borderColor: '#000',
	},
	appVar: {
		background: '#ccc',
	},
	floatingLabel: {
		color: '#000',
	},
}));

export const Banner = () => {
	const [initialValue] = useContext(StoreContext).initialValue;
	const [amount] = useContext(StoreContext).amount;
	const classes = useStyles();

	return (
		<Box>
			<AppBar position="fixed">
				<Toolbar className={classes.appVar}>
					<IconButton>
						<img src={poliIcon} alt="politecnico" className={classes.image} />
					</IconButton>
					<div className={classes.grow} />
					<Typography variant="body1">
            Parcial Programación Distribuida y paralela
					</Typography>
					<div className={classes.grow} />
					<TextField
						disabled
						id="initialBalance"
						className={classes.input}
						label="Saldo inicial"
						defaultValue={0}
						value={initialValue}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AttachMoneyIcon />
								</InputAdornment>
							),
						}}
					/>

					<TextField
						disabled
						id="finalBalance"
						className={classes.input}
						label="Saldo final"
						defaultValue="0"
						value={amount}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AttachMoneyIcon color="#000" />
								</InputAdornment>
							),
						}}
						InputLabelProps={{
							className: classes.floatingLabel,
						}}
					/>
				</Toolbar>
			</AppBar>
			<div className={classes.offset} />
		</Box>
	);
};
