const fs = require('fs');

try {
	const data = fs.readFileSync( './day3-input.txt', 'utf8' );

	const output = data.split( /\r?\n/ );

	let binaryGamma = '';
	let binaryEpsilon = '';

	for ( let i = 0; i < 12; i++ ) {
		const gamma = countGamma( output, i );
		binaryGamma = binaryGamma + gamma;

		const epsilon = countEpsilon( output, i );
		binaryEpsilon = binaryEpsilon + epsilon;
	}

	const calculatedGamma = parseInt( binaryGamma, 2 );
	const calculatedEpsilon = parseInt( binaryEpsilon, 2 );

	console.log( 'Gamma: ' + calculatedGamma );
	console.log( 'Epsilon: ' + calculatedEpsilon );
	console.log( 'Answer: ' + ( calculatedEpsilon * calculatedGamma ) );

} catch (err) {
	console.error(err)
}

function countGamma( output, char ) {
	let ones = 0;
	let zeros = 0;

	output.forEach( ( binary ) => {
		if ( binary.charAt( char ) === "1" ) {
			ones++;
		} else {
			zeros++;
		}
	} );

	if ( ones > zeros ) {
		return 1;
	} else {
		return 0;
	}
}

function countEpsilon( output, char ) {
	let ones = 0;
	let zeros = 0;

	output.forEach( ( binary ) => {
		if ( binary.charAt( char ) === "1" ) {
			ones++;
		} else {
			zeros++;
		}
	} );

	if ( ones < zeros ) {
		return 1;
	} else {
		return 0;
	}
}