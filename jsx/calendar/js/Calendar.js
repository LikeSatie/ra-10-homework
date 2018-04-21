const Calendar = function ({date}) {
	const month = upCaseFirst(date.toLocaleString('ru', { month: 'long'	})); // месяц с заглавной буквы
	return (
		<div className="ui-datepicker">
			{ nowDay(date) } {/*Блок вывода сегодняшней даты*/}
			<div className="ui-datepicker-header">
				<div className="ui-datepicker-title">
					<span className="ui-datepicker-month">{month}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
				</div>
			</div>
			<table className="ui-datepicker-calendar">
				<colgroup>
					<col />
					<col />
					<col />
					<col />
					<col />
					<col className="ui-datepicker-week-end" />
					<col className="ui-datepicker-week-end" />
				</colgroup>
				<thead>
					<tr>
						<th scope="col" title="Понедельник">Пн</th>
						<th scope="col" title="Вторник">Вт</th>
						<th scope="col" title="Среда">Ср</th>
						<th scope="col" title="Четверг">Чт</th>
						<th scope="col" title="Пятница">Пт</th>
						<th scope="col" title="Суббота">Сб</th>
						<th scope="col" title="Воскресенье">Вс</th>
					</tr>
				</thead>
				{ createCalerdar(date) } {/*Блок вывода календаря*/}
			</table>
		</div>
	)
}

function nowDay(date) {
	const month = 'Января,Февраля,Марта,Апреля,Мая,Июня,Июля,Августа,Сентября,Октября,Ноября,Декабря'.split(','); //создаем массив из названия месяцев в род. падеже
	const weekday = upCaseFirst(date.toLocaleString('ru', { weekday: 'long'	})); // день недели с заглавной буквы

	return (
		<div className="ui-datepicker-material-header">
			<div className="ui-datepicker-material-day">{weekday}</div>
			<div className="ui-datepicker-material-date">
				<div className="ui-datepicker-material-day-num">{date.getDate()}</div>
				<div className="ui-datepicker-material-month">{month[date.getMonth()]}</div> {/*по номеру месяца получаем название из массива*/}
				<div className="ui-datepicker-material-year">{date.getFullYear()}</div>
			</div>
		</div>
	)
}

function createCalerdar(date) {
	const arrayDate = dayCalc(date); // массив из дней 
	
	// вывод первой недели
	const firstWeek = arrayDate.map((item, index) => {
	
		if (index < 7) { //первые 7 дней
			let config; 
			if (item > 1 && 7 < item ) { config = 'ui-datepicker-other-month'; } //в первой неделе попадают числа с предыдущего месяца. 
			if (item <= 7 && item == date.getDate()) {	config = 'ui-datepicker-today'; } // сегоднящнее число и оно <7, чтобы не попадали дни предыдущего месяца

			return (<td className={config} key={index}>{item}</td>	)
		}
	});

	// вывод второй недели
	const secondWeek = arrayDate.map((item, index) => {
	
		if (index >= 7 && index < 14) {
			let config;
			if (item == date.getDate()) { config = 'ui-datepicker-today'; }

			return (<td className={config} key={index}>{item}</td>	);
		}
	});

	// вывод третьей недели
	const thirdWeek = arrayDate.map((item, index) => {
	
		if (index >= 14 && index < 21) {
			let config;
			if (item == date.getDate()) { config = 'ui-datepicker-today'; }

			return (<td className={config} key={index}>{item}</td>	);
		}
	});

	// вывод четвертой недели
	const fourthWeek = arrayDate.map((item, index) => {
	
		if (index >= 21 && index < 28) {
			let config;
			if (item == date.getDate()) { config = 'ui-datepicker-today'; }

			return (<td className={config} key={index}>{item}</td>	);
		}
	});

	// вывод пятой недели
	const fifthWeek = arrayDate.map((item, index) => {
	
		if (index >= 28 && index < 35) {
			let config;
			if (item < 7) { config = 'ui-datepicker-other-month'; }
			if (item > 7 && item == date.getDate()) { config = 'ui-datepicker-today'; }

			return (<td className={config} key={index}>{item}</td>	);
		}
	});

	// вывод шестой недели
	const sixthWeek = arrayDate.map((item, index) => {
	
		if (index >= 35 && index < 42) {
			let config ='';
			if (item < 7) { config = 'ui-datepicker-other-month'; }
			if (item > 7 && item == date.getDate()) { config = 'ui-datepicker-today'; }

			return (<td className={config} key={index}>{item}</td>	);
		}
	});

return (
	<tbody>
		<tr>	
			{firstWeek}
		</tr>
		<tr>	
			{secondWeek}
		</tr>
		<tr>	
			{thirdWeek}
		</tr>
		<tr>	
			{fourthWeek}
		</tr>
		<tr>	
			{fifthWeek}
		</tr>
		<tr>	
			{sixthWeek}
		</tr>
	</tbody>) 
}


function dayCalc(date) {
	const month = date.getMonth(); //получаем месяц
	const getMonthYear = new Date (date.getFullYear(), date.getMonth()); 
	const copyMonthYear = new Date (getMonthYear); // копия даты
	let arrayDate = [];
	let count = 1;

	for (let i = 0; i < getDay(getMonthYear); i++) { //получаем номер дня недели и прогоняем цикл 
		arrayDate.push(copyMonthYear.getDate(copyMonthYear.setDate(copyMonthYear.getDate() - 1))); //заполняем массив днями предыдущего месяца
	}

	arrayDate.reverse() // перевернем массив

	while (getMonthYear.getMonth() == month) { //пока расчетный месяц равен полученному
		arrayDate.push(getMonthYear.getDate()); //в массив добавляем дни месяца
		getMonthYear.setDate(getMonthYear.getDate() + 1); //увеличиваем на 1 день
	}

	while (arrayDate.length % 7 != 0) {// полученный массив проверяем на целочисленность недель. Пока его длина нацело не делится на 7 (кол-во дней в неделе)
		arrayDate.push(count++); //продолжаем заполнять массив. Это будут дни следующего месяца
	}

	return arrayDate
}

function upCaseFirst(str) { //Преобразуем первый символ с заглавной буквы.
	if (!str) return str;
	return str[0].toUpperCase() + str.slice(1);
}

function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
	let day = date.getDay();
	if (day == 0) { day = 7; }
	return day - 1;
}