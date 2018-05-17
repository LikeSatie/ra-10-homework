const SearchBox = (props) => {
	
	const filter = event => {
		props.filterBooks(event.currentTarget.value);
	}
	
	return (
		<input 
			type="text" 
			placeholder="Поиск по названию или автору"
			onChange={filter}
			value={props.value}
		/>
	);
}

// компонент на основе класса
/*class SearchBox extends React.Component {
	constructor (props) {
		super(props);
	}

	filter(event) {
		this.props.filterBooks(event.currentTarget.value);
	}

	render() {
		 return (
		<input 
			type="text" 
			placeholder="Поиск по названию или автору"
			onChange={this.filter.bind(this)}
			value={this.props.value}
		/>
	);
	}
}
*/