const fs = require('fs');

const nextThree = ( output, startIndex ) => {
	if ( ! output[ startIndex ] && ! output[ startIndex + 1 ] && ! ! output[ startIndex + 2 ] ) {
		return false;
	}

	const one = parseInt( output[ startIndex ] );
	const two = parseInt( output[ startIndex + 1 ] );
	const three = parseInt( output[ startIndex + 2 ] );

	return one + two + three;
};

try {
	const data = fs.readFileSync( './day1-input.txt', 'utf8' );

	const output = data.split( /\r?\n/ );

	let increase = 0;
	let prvSum = 0;

	for (let i = 0; i < output.length; i++ ) {
		const sum = nextThree( output, i );
		if ( sum === false ) {
			return;
		}

		if ( prvSum > 0 && sum > prvSum ) {
			increase++;
		}

		prvSum = sum;
	}
	console.log( 'Total Increase: ' + increase );
} catch (err) {
	console.error(err)
}

