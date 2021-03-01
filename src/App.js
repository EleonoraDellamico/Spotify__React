import { CssBaseline, Grid, makeStyles, ThemeProvider } from '@material-ui/core';
import darkTheme from './theme/themeDark';
import Home from './pages/home';
import NavigationDrawer from './components/Navigation/index.js';

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap'
	},
	content: { flexGrow: 1, maxWidth: 'calc(100vw - 240px)', background: 'blue', height: '100vh' },
	drawer: {
		width: '240px',
		height: '100vh'
	}
}));

const App = () => {
	const classes = useStyle();
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Grid container className={classes.root}>
				<NavigationDrawer />
				<div className={classes.content}>
					<Home />
				</div>
			</Grid>
		</ThemeProvider>
	);
};

export default App;
