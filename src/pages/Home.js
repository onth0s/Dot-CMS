import { useState } from 'react';

import { Button, Menu, MenuItem } from '@material-ui/core';

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

	return (
		<div className="root-container">
			<div className="
				flexbox container 
				home-container
			">
				<div className="home-column home-main">
					<div className="home-column-header">
						<div className="flexbox home-column-header-image-container">
							<img id="home-column-header-image" className="box-shadow-soft"
								src="https://via.placeholder.com/100x100" alt="user profile"
							/>
						</div>

						<div className="">

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
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							<MenuItem onClick={handleClose}>My account</MenuItem>
							<MenuItem onClick={handleClose}>Logout</MenuItem>
						</Menu>
					</div>

					<div className="home-column-list">

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
