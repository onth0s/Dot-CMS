import { useState } from 'react';

import { Button, Menu, MenuItem, Divider } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

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
							{/* <p id="home-column-header-info-name">Nombre Completo Aquí</p> */}
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
							<MenuItem onClick={handleClose}>

								<p>Logout</p>
							</MenuItem>
						</Menu>
					</div>

					<div className="home-column-list">
						{genreList.map((el, i) => (
							<div className="home-column-list-item" key={i}
								style={{
									marginTop: 100 * i + 'px'
								}}
								onMouseEnter={(e) => {
									// e.target.style.backgroundColor = 'red';
									e.target.style.boxShadow = i % 2 == 0
										? '0 0 10px rgba(0, 0, 0, 0.4)'
										: '0 0 10px rgba(0, 0, 0, 0.2)'; 
										e.target.style.zIndex = '2';
								}}
								onMouseLeave={(e) => {
									// e.target.style.backgroundColor = 'red';
									e.target.style.boxShadow = 'none';
									e.target.style.zIndex = 'auto';
								}}
								onClick={() => {
									console.log('item clicked (' + i + ')');
								}}
							>
								{el}
							</div>
						))}
					</div>
				</div>

				<div className="home-content home-main">
					<p>
						Now, I am become Death, the destroyer of worlds.
					</p>
				</div>
			</div>
		</div>
	);
}
