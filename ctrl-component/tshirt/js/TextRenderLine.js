class TextRenderLine extends React.Component {
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
}