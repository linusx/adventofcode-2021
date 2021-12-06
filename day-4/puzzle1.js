const fs = require('fs');

try {
	const called_numbers_input = fs.readFileSync( './called-numbers.txt', 'utf8' );

	const called_numbers = called_numbers_input.split( ',' );

	let bingo_boards = generateBingoBoard();

	const called_numbers_length = called_numbers.length;
	for( let i = 0; i < called_numbers_length; i++ ) {
		bingo_boards = findNumber( bingo_boards, called_numbers[i] );
	}

} catch (err) {
	console.error(err)
}

function findNumber( boards, number ) {
	const bingo_boards_length = boards.length;
	// Search all the boards for the called number and remove it.
	for( let b = 0; b < bingo_boards_length; b++ ) {

		// Loop through the rows to find a match.
		for( let r = 0; r < boards[b].length; r++ ) {
			const row = boards[b][r];
			const rowIndex = row.indexOf( number );
			if ( rowIndex !== -1 ) {
				boards[b][r].splice( rowIndex, 1 );
			}

			if ( row.length <= 0 ) {
				console.group( 'Winning Board' );
				calculateWinner( boards[b], number );
				console.groupEnd();
				return false;
			}
		}
	}

	return boards;
}

function calculateWinner( winningBoard, number ) {
	console.log( winningBoard );
	console.log( number );
	let num = 0;
	for( let i = 0; i < winningBoard.length; i++ ) {
		for( let r = 0; r < winningBoard[i].length; r++ ) {
			num = num + parseInt( winningBoard[i][r] );
		}
	}
	console.log( num * parseInt( number ) );
}

function generateBingoBoard() {
	const bingo_boards_input = fs.readFileSync( './bingo-boards.txt', 'utf8' );
	const local_bingo_boards = bingo_boards_input.split( /\r?\n/ );
	const bingo_board_length = local_bingo_boards.length;

	const bingo_boards = [];
	let bingo_board = [];
	for( let i = 0; i < bingo_board_length; i++ ) {
		if ( local_bingo_boards[i] === '' ) {
			bingo_boards.push( bingo_board );
			bingo_board = [];
			continue;
		}

		const row = local_bingo_boards[i].trim().split( /[ ,]+/ );
		bingo_board.push( row );
	}

	return bingo_boards;
}