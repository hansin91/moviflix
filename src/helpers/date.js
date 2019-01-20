const dateHelper = {
	format: (type, number) => {
		let string = '';
		switch (type) {
			case 'month':
				number = number + 1;
				string = number < 10 ? '0' + number.toString() : number.toString();
				break;
			case 'date':
				string = number < 10 ? '0' + number.toString() : number.toString();
				break;
			default:
				break;
		}
		return string;
	},
	getDates: () => {
		let dates = [];
		let date = new Date();
		let nextDate = date.getMonth() - 1;

		let dateTo =
			date.getFullYear().toString() +
			'-' +
			dateHelper.format('month', date.getMonth()) +
			'-' +
			dateHelper.format('date', date.getDate());

		date.setMonth(nextDate);

		let dateFrom = date.getFullYear().toString() + '-' + dateHelper.format('month', date.getMonth()) + '-01';

		dates.push(dateTo);
		dates.push(dateFrom);
		return dates;
	}
};

export default dateHelper;
