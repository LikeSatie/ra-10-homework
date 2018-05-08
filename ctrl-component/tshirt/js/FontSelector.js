class FontSelector extends React.Component {
	constructor (props) {
		 super(props);
		 
	}

	checkedFont(item){
		this.props.onSelect(item);
	}
	
	render() {
		return (
			<div>
				{ fonts.map((item, i) => {
					return(
						<div className="grid center font-item">     
							<input type="radio" name="font" value={item.name} id={item.name} onChange={this.checkedFont.bind(this, item)} />
							<label htmlFor={item.name} className="grid-1">
								<PictureFont text={item.name.slice(0, -1)} path={item.path} key={`char-${i}`} />
							</label>  			
						</div>
					)
				})}
			</div>
		)
	}
}



// Второй вариант реализации функции, если не передавать аргумент item
//<input type="radio" name="font" value={item.name} id={item.name} onChange={this.checkedFont.bind(this)} />

/*	checkedFont(event, r){
		const chekFont = fonts.filter(item => {
  		return (item.name === event.currentTarget.value);
		})	
		this.props.onSelect(chekFont[0]);

		console.log(r)
	}*/