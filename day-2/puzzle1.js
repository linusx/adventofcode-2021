const fs = require('fs');

try {
	const data = fs.readFileSync( './day2-input.txt', 'utf8' );

	const output = data.split( /\r?\n/ );

	let horizontal = 0;
	let depth = 0;

	output.forEach( ( val, index ) => {
		const [ direction, spaces ] = val.split( ' ' );

		if ( direction === 'forward' ) {
			horizontal += parseInt( spaces );
		} else if ( direction === 'down' ) {
			depth += parseInt( spaces );
		} else if ( direction === 'up' ) {
			depth -= parseInt( spaces );
		}
	} );

	console.log( 'Horizontal: ' + horizontal );
	console.log( 'Depth: ' + depth );
	console.log( 'Answer: ' + ( parseInt( depth ) * parseInt( horizontal ) ) );
} catch (err) {
	console.error(err)
}