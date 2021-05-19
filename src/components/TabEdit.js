import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		width:  '50px',
		height: '50px',
		minWidth: 'auto',
		maxWidth: 'auto',
		borderRadius: '100%',
		// backgroundColor: 'red',
	}
});

export default ({ tabEditTitle }) => {
	const classes = useStyles();
	
	return (
		<div className="
			flexbox tab-edit-container
		">
			<div className="flexbox tab-edit-top">
				<p className="tab-edit-title">
					{tabEditTitle}
				</p>
			
				<Button classes={classes}>
					<i class="fas fa-file-upload"></i>
				</Button>
			</div>

			<div className="tab-edit-form">
				<div>a</div>
				<div>b</div>
				<div>c</div>
				<br />
				<div>a</div>
				<div>b</div>
				<div>c</div>
				<br />
				<div>a</div>
				<div>b</div>
				<div>c</div>
				<br />
				<div>a</div>
				<div>b</div>
				<div>c</div>
				<br />
				<div>a</div>
				<div>b</div>
				<div>c</div>
				<br />
				<div>a</div>
				<div>b</div>
				<div>c</div>
				<br />
				<div>a</div>
				<div>b</div>
				<div>c</div>
				<br />
				<div>a</div>
				<div>b</div>
				<div>c</div>
				<br />
				<div>a</div>
				<div>b</div>
				<div>c</div>
				<br />
				<div>a</div>
				<div>b</div>
				<div>c</div>
			</div>
		</div>
	);
}
