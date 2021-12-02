import './banner.css';
import {
	Box,
	Toolbar,
	IconButton,
	AppBar,
	Typography,
	TextField,
	InputAdornment,
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { makeStyles } from '@material-ui/core';
import poliIcon from '../../assets/politecnico.jpg';

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

const Banner = () => {
	const classes = useStyles();
	return (
		<Box>
			<AppBar position="fixed">
				<Toolbar className={classes.appVar}>
					<IconButton>
						<img src={poliIcon} alt="politecnico" className={classes.image} />
					</IconButton>
					<div className={classes.grow}></div>
					<Typography variant="body1">
						Parcial Programación Distribuida y paralela
					</Typography>
					<div className={classes.grow}></div>
					<TextField
						disabled
						id="initialBalance"
						className={classes.input}
						label="Saldo inicial"
						defaultValue=""
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
						defaultValue=""
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
			<div className={classes.offset}></div>
		</Box>
	);
};

export default Banner;
