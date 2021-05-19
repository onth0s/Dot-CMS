import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';

import TabEdit from '../components/TabEdit.js';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,

		height: '100%',
	},
	test: {
		color: 'black',
		backgroundColor: 'var(--grey-lighter)',
		borderRadius: 10,
	}
}));

export default function SimpleTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (e, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static"
				className={classes.test}
			>
				<Tabs value={value} onChange={handleChange}
					aria-label="simple tabs example" centered
				>
					<Tab label="Subir" {...a11yProps(0)} />
					<Tab label="Editar" {...a11yProps(1)} />
					<Tab label="Planificar" {...a11yProps(2)} />
				</Tabs>
			</AppBar>

			<TabPanel value={value} index={0}>
				<TabEdit />
			</TabPanel>

			<TabPanel value={value} index={1}>
				Item Two
			</TabPanel>

			<TabPanel value={value} index={2}>
				Item Three
			</TabPanel>
		</div>
	);
}
