import { useState } from 'react';
import { useHistory } from 'react-router';

import { Button, Menu, MenuItem, Divider } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import HomeTabs from '../components/HomeTabs.js';

const useStyles = makeStyles({
	root: {
		width: '30px',
		minWidth: 'auto',
		maxWidth: 'auto',
		height: '30px',
		borderRadius: '100%',
		// backgroundColor: 'red',
	}
});

export default function Home() {
	const history = useHistory();

	const classes = useStyles();

	const handleClick = (e) => setAnchorEl(e.currentTarget);
	const handleClose = () => setAnchorEl(null);
	const [anchorEl, setAnchorEl] = useState(null);

	const genreList = [
		'Romance',
		'Drama',
		'Fantasía',
		'Comedia',
		'Sci-Fi',
		'Histórica',
		'Suspense',
		'Fábula',
		'Actualidad',
	]
	const [genreSelected, setGenreSelected] = useState(0);

	return (
		<div className="root-container">
			<div className="
				flexbox container 
				home-container
			">
				<div className="home-column home-main">
					<div className="flexbox home-column-header">
						<div className="flexbox home-column-header-image-container">
							<img id="home-column-header-image" className="box-shadow-soft"
								src="./assets/Nur.webp" alt="user profile"
							/>
						</div>

						<div className="flexbox home-column-header-info">
							<p id="home-column-header-info-name">Nur ul Qamar</p>
							<p id="home-column-header-info-subtitle">Buena diseñadora, mejor persona.</p>
						</div>

						<Button id="home-column-header-menu-icon"
							classes={classes}
							aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
						>⋮</Button>

						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}><p>Mi perfil</p></MenuItem>

							<Divider />
							<MenuItem onClick={() => {
								history.push('/login');

								handleClose();
							}}><p>Cerrar sesión</p></MenuItem>
						</Menu>
					</div>

					<div className="home-column-list">
						{genreList.map((el, i) => {
							const styles = {
								marginTop: 100 * i + 'px',
							}
							// if (i === genreSelected) {
							// 	console.log(el + ' is selected');
							// }
							if (i === genreSelected) {
								styles.borderLeftColor = 'var(--blue)';
								styles.borderWidth = '3px';
								styles.boxShadow =  '0 0 10px rgba(0, 0, 0, 0.2)';
								styles.zIndex = '2';
							}

							return (
								<div className="home-column-list-item" key={i}
									style={styles}
									onMouseEnter={(e) => {
										// e.target.style.boxShadow = i % 2 === 0
										// 	? '0 0 10px rgba(0, 0, 0, 0.2)'
										// 	: '0 0 10px rgba(0, 0, 0, 0.2)';
										// e.target.style.zIndex = '2';
									}}
									onMouseLeave={(e) => {
										// e.target.style.boxShadow = 'none';
										// e.target.style.zIndex = 'auto';
									}}
									onClick={() => setGenreSelected(i)}
								>
									{el}
								</div>
							)
						})}
					</div>
				</div>

				<HomeTabs
					tabEditTitle={genreList[genreSelected]}
				/>
			</div>
		</div>
	);
}
