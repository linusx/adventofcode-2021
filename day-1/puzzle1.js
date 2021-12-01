const fs = require('fs');

try {
	const data = fs.readFileSync( './day1-input.txt', 'utf8' );

	const output = data.split( /\r?\n/ );

	let increase = 0;

	output.forEach( ( val, index ) => {
		const currentDepth = parseInt( val );
		const nextDepth = parseInt( output[ index + 1 ] );

		if ( nextDepth > currentDepth ) {
			increase++;
		}
	} );

	console.log( 'Total increases: ' + increase );
} catch (err) {
	console.error(err)
}