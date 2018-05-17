const TextRenderLine = ({value, onChange}) => {

	const onChangeText = (event) => {
		event.currentTarget.value = event.currentTarget.value.replace(/[^a-zA-Z+\n+\s]+/gi, "").toLowerCase();
		onChange(event.currentTarget.value)
	}

	return (
		<div className="type-text">
			<textarea 
				name="text" 
				id="font-text" 
				cols="30" 
				rows="2" 
				placeholder="Введите текст для футболки"
				onChange={onChangeText}
				value={value}
			>
			</textarea>	
		</div>
	);
};



/*class TextRenderLine extends React.Component {
	constructor(props) {
		super(props);
	}

	text(event) {
			this.props.onChange(event.currentTarget.value)
	}

	render() {
		return (
			<div className="type-text">
				<textarea 
					name="text" 
					id="font-text" 
					cols="30" 
					rows="2" 
					placeholder="Введите текст для футболки"
					onChange={this.text.bind(this)}
				>
				</textarea>	
			</div>
		);
	}
}*/