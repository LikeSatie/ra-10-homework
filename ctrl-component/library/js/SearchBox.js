class SearchBox extends React.Component {
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
