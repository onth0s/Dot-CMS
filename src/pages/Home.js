import { useState } from 'react';

import { Button, Menu, MenuItem } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

// const useStyles = makeStyles({
// 	root: {
// 		width: '30px',
// 		backgroundColor: 'red',
// 	}
// });
const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 3,
		border: 0,
		color: 'white',
		height: 48,
		padding: '0 30px',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	},
	label: {
		textTransform: 'capitalize',
	},
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
							className={{
								root: classes.root,
								label: classes.label,
							}}
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
