import { useHistory } from 'react-router-dom';

export default function DevSkip({ route = '/' }) {
	const history = useHistory();

	const handleOnClick = (page) => {
		history.push(page);
	}

	return (
		<div id="dev-skip" onClick={() => handleOnClick(route)}>
			DevSkip
		</div>
	);
}
