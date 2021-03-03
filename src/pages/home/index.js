import { Typography } from '@material-ui/core';
import Carusel from '../../components/Carusel/index';
import songs from '../../assets/data/songs.json';

const Home = () => {
	return (
		<div>
			<Typography variant="h1">Home</Typography>
			<Carusel data={songs} title="favorite songs" />
			<Carusel data={songs} title="favorite songs" />
			<Carusel data={songs} title="favorite songs" />
			<Carusel data={songs} title="favorite songs" />
		</div>
	);
};

export default Home;
