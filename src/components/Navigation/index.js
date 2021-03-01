import { Typography, Drawer, List, ListItem, ListItemText, ListItemIcon, makeStyles, Divider } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ExplorIcon from '@material-ui/icons/Explore';
import RadioIcon from '@material-ui/icons/Radio';

const useStyle = makeStyles((theme) => ({
	drawer: {
		width: '240px',
		flexShrink: 0
	},
	drawerPaper: {
		width: '240px'
	},
	titleList: {
		padding: '12px 16px',
		fontWeight: 'bold'
	}
}));
const itemsMainList = [
	{
		text: 'Inicio',
		icon: <HomeIcon />
	},
	{
		text: 'Buscar',
		icon: <ExplorIcon />
	},
	{
		text: 'Radio',
		icon: <RadioIcon />
	}
];
const NavigationDrawer = () => {
	const classes = useStyle();
	return (
		<Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper }}>
			<div className={classes.drawerContainer}>
				<List>
					{itemsMainList.map((item) => (
						<ListItem button>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItem>
					))}
				</List>
				<Divider />
				<Typography variant="body1" className={classes.titleList}>
					TU BIBLIOTECA{' '}
				</Typography>
				<List>
					{[
						'especiales para tí',
						'Escuchad. recient.',
						'Canciones que te gustan',
						'Albumes',
						'Artistas',
						'Podcast'
					].map((text) => (
						<ListItem button>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</div>
		</Drawer>
	);
};

export default NavigationDrawer;
