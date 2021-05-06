import fs from 'fs';

import colors from 'colors';

console.log("START ========================================================================================================================".brightBlue)

const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
const ARGUMENT_NAMES = /([^\s,]+)/g;
const getParamNames = (func) => {
	const fnStr = func.toString().replace(STRIP_COMMENTS, '');
	const result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
	if (result === null)
		result = [];
	return result;
}

const logT = (...args) => {
	const symbol = '>>'.grey;

	args.forEach((el, i) => {
		const headerArr = el[0].toString().split('\n');
		const header = [];
		
		headerArr.forEach(el => {
			header.push(el.trim());
		});
		
		
		
		console.log(i.toString().yellow, symbol + ' ' + header);
		el.forEach((el2, i2) => {
			if (i2 > 0) {
				const subIndex = '   ' + i + '.' + (i2 - 1);
				process.stdout.write(subIndex.yellow + ' ' + symbol + ' ');
				// process.stdout.write('\t');
				console.log(el2);
			}
		});
		console.log('');
	});

}


const tempFunc = (arg1, arg2, arg3) => { }
// console.log(getParamNames(tempFunc));

const stylesPath = './src/styles';

const f1 = () => {

	// console.log('111111111111111');
	const files = fs.readdirSync(stylesPath);

	const tempObj = {
		test1: 'test',
		test2: 'test',
		test3: '123421342134214asdfasdfasdfasdfasdf',
	}

	logT([
		`
			this is multiline
			or is it?
		`,
		files,
		'test',
		'something'
	], [
		'the data which the temporary object is holding is:',
		tempObj,
		'next one is the same as before',
		tempObj,
	]);

	// console.log('22222222222222');
}
f1();
