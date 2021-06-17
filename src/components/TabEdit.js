import { useState } from 'react';

import { Button, TextField, Menu, MenuItem } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { store } from 'react-notifications-component';

const useStyles = makeStyles({
	root: {
		width: '50px',
		height: '50px',
		minWidth: 'auto',
		maxWidth: 'auto',
		borderRadius: '100%',
	}
});

export const TabEdit = ({ tabEditTitle }) => {
	const classes = useStyles();


	const notificationSettings = {
		type: "info",
		insert: "top",
		container: "bottom-left",
		animationIn: ["animate__animated", "animate__slideInLeft"],
		animationOut: ["animate__animated", "animate__fadeOut"],
		dismiss: {
			duration: 4000,
			onScreen: true,
			pauseOnHover: true,
		},
	}

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (e) => setAnchorEl(e.currentTarget);
	const handleClose = (i) => {
		if (typeof (i) !== 'number') {
			setCurrentTipology('Tipología');
		}
		else {
			setCurrentTipology(tipologies[i]);
		}

		setAnchorEl(null);
	};
	const [anchorEl2, setAnchorEl2] = useState(null);

	const handleClick2 = (e) => setAnchorEl2(e.currentTarget);
	const handleClose2 = (i) => {
		if (typeof (i) !== 'number') {
			setCurrentTime('minutos');
		}
		else {
			setCurrentTime(times[i]);
		}

		setAnchorEl2(null);
	};

	const tipologies = [
		'Microrelato',
		'Poema',
		'Cómic',
		'Novela',
		'Guion',
	];
	const times = [
		'Minutos',
		'Horas',
	];

	const [currentTime, setCurrentTime] = useState('minutos');
	const [currentTipology, setCurrentTipology] = useState('Tipología');

	const handleUpload = () => {


		store.addNotification({
			...notificationSettings,
			title: "Succes!",
			message: "Uploading text...",
			type: 'info'
		});
	}

	return (
		<div className="flexbox tab-edit-container">
			<div className="flexbox tab-edit-top">
				<div className="tab-edit-title">{tabEditTitle}</div>
				<Button onClick={handleUpload} classes={classes}><i className="fas fa-file-upload"></i></Button>
			</div>

			<div className="tab-edit-form">
				<div className="tab-edit-form-grid">
					<TextField id="standard-basic" label="Autor" autoComplete="off" />
					<TextField id="standard-basic" label="Título" autoComplete="off" />
					<TextField id="standard-basic" label="Tiempo" type="number" autoComplete="off" />

					<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}
					>{currentTime}</Button>

					<Menu
						id="simple-menu"
						anchorEl={anchorEl2}
						keepMounted
						open={Boolean(anchorEl2)}
						onClose={handleClose2}
					>
						{times.map((el, i) => (
							<MenuItem key={i} onClick={() => handleClose2(i)}>{el}</MenuItem>
						))}
					</Menu>






					<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
					>{currentTipology}</Button>
					<Menu
						id="simple-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						{tipologies.map((el, i) => (
							<MenuItem key={i} onClick={() => handleClose(i)}>{el}</MenuItem>
						))}
					</Menu>
				</div>

				<textarea id="area" name="w3review" autofocus placeholder="Aquí va el texto..." />
			</div>
		</div>
	);
}

export default TabEdit;
