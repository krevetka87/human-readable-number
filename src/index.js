module.exports =
	function toReadable(number) {
		let one = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
		let ten = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
		let reminder;
		let round;
		if (number === 0) {
			return 'zero';
		}
		if (number < 20) {
			return one[number];
		}
		if (number >= 20 && number < 100) {
			reminder = number % 10;
			round = Math.floor(number / 10);
			return (ten[round] + ' ' + one[reminder]).trim();
		}
		if (number >= 100) {
			reminder = number % 100;
			round = Math.floor(number / 100);
			if (reminder < 20) {
				return (`${one[round]} hundred ${one[reminder]}`).trim();
			}
			else {
				let newReminder = reminder % 10;
				let newRound = Math.floor(reminder / 10);
				return (`${one[round]} hundred ${ten[newRound]} ${one[newReminder]}`).trim();
			}

		}
	}