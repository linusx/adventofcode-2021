const fs = require('fs');

try {
	const data = fs.readFileSync( './day3-input.txt', 'utf8' );

	const output = data.split( /\r?\n/ );

	let oxygen = [];
	let co2 = [];

	oxygen = getFromPosition( output, 0, true );
	co2 = getFromPosition( output, 0, false );

	for ( let i = 1; i < 11; i++ ) {
		oxygen = getFromPosition( oxygen, i, true );
		co2 = getFromPosition( co2, i, false );
	};

	console.log( oxygen[0] );
	console.log( co2[0] );
	console.log( 'Answer: ' + parseInt( oxygen[0], 2 ) * parseInt( co2[0], 2 ) );
} catch (err) {
	console.error(err)
}

function getFromPosition( input, char, popular ) {
	if ( input.length <= 1 ) {
		return input;
	}

	const positionOutput = [];
	const pop = getStuff( input, char, popular );

	input.forEach( ( binary ) => {
		if ( binary.charAt( char ) === pop.toString() ) {
			positionOutput.push( binary );
		}
	} );

	return positionOutput;
}

function getStuff( output, char, popular ) {
	let ones = 0;
	let zeros = 0;

	output.forEach( ( binary ) => {
		if ( parseInt( binary.charAt( char ) ) === 1 ) {
			ones++;
		} else {
			zeros++;
		}
	} );

	if ( true === popular ) {
		if ( ones > zeros || ones === zeros ) {
			return 1;
		} else {
			return 0;
		}
	} else  {
		if ( ones < zeros ) {
			return 1;
		} else {
			return 0;
		}
	}
}