import { Button, makeStyles } from '@material-ui/core';
import SearchBar from '../SearchBar/index';

const useStyle = makeStyles((theme) => ({}));

const TopBar = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<SearchBar />
			<Button variant="outlined" className={classes.button}>
				Mejora tu perfil
			</Button>
			<Button variant="contained" className={[ classes.button, classes.buttonProfile ].join('')}>
				Perfil
			</Button>
		</div>
	);
};

export default TopBar;
