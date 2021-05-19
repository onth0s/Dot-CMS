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
		{ genre: 'Romance', selected: true },
		{ genre: 'Drama', selected: false },
		{ genre: 'Fantasía', selected: false },
		{ genre: 'Comedia', selected: false },
		{ genre: 'Sci-Fi', selected: false },
		{ genre: 'Histórica', selected: false },
		{ genre: 'Suspense', selected: false },
		{ genre: 'Fábula', selected: false },
		{ genre: 'Actualidad', selected: false }
	]

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
								src="https://via.placeholder.com/100x100" alt="user profile"
							/>
						</div>

						<div className="flexbox home-column-header-info">
							<p id="home-column-header-info-name">Nombre Completo Aquí</p>
							<p id="home-column-header-info-subtitle">Lorem ipsum dolor sit amet </p>
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
							<MenuItem onClick={handleClose}>
								<p>Profile</p>
							</MenuItem>

							<MenuItem onClick={handleClose}>
								<p>My account</p>
							</MenuItem>

							<Divider />
							<MenuItem onClick={() => {
								history.push('/login');
								
								handleClose();
							}}>

								<p>Logout</p>
							</MenuItem>
						</Menu>
					</div>

					<div className="home-column-list">
						{genreList.map((el, i) => {
							
							
							return (
								<div className="home-column-list-item" key={i}
									style={{
										marginTop: 100 * i + 'px'
									}}
									onMouseEnter={(e) => {
										e.target.style.boxShadow = i % 2 === 0
											? '0 0 10px rgba(0, 0, 0, 0.4)'
											: '0 0 10px rgba(0, 0, 0, 0.2)';
										e.target.style.zIndex = '2';
									}}
									onMouseLeave={(e) => {
										e.target.style.boxShadow = 'none';
										e.target.style.zIndex = 'auto';
									}}
									onClick={() => {
										console.log('item clicked (' + i + ')');
									}}
								>
									{el.genre}
								</div>
							)
						})}
					</div>
				</div>

				<HomeTabs />
			</div>
		</div>
	);
}
