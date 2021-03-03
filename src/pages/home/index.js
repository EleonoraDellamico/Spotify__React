import { Typography } from '@material-ui/core';
import Carusel from '../../components/Carusel/index';
import songs from '../../assets/data/songs.json';
import artists from '../../assets/data/artists.json';

const Home = () => {
	return (
		<div>
			<Typography variant="h1">Home</Typography>
			<Carusel data={artists} title="Favorite artists" />
			<Carusel data={songs} title="Favorite songs" />
		</div>
	);
};

export default Home;
