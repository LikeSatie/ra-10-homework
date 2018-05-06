
class SubscribeForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			email: '',
			checkEmailValid: ' '
		};
	}

	checkEmail(event) {
		this.setState({
			email: event.currentTarget.value
		});
		
		document.querySelector('#input-email').validity.valid ? this.setState({checkEmailValid: 'is-valid'}) : this.setState({checkEmailValid: 'is-error'});
		!event.currentTarget.value.length ? this.setState({checkEmailValid: ' '}) : '';
	}

	submit(event){
		event.preventDefault();
	}

	render () {
		return (
			<div className="subscribe__form">
				<form 
					className={`form form--subscribe ${this.state.checkEmailValid}`}
					onSubmit={this.submit.bind(this)}
				>
					<h4 className="form-title">Подписаться:</h4>
					<div className="form-group">
						<label htmlFor="input-email" className="sr-only">Email</label>
						<input 
							type="email" 
							id="input-email" 
							placeholder="Email" 
							className="form-control"
							value={this.state.email}
							onChange={this.checkEmail.bind(this)} 
						/>
						<div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
						<button type="submit" className="form-next">
							<i className="material-icons">keyboard_arrow_right</i>
						</button>
					</div>
				</form>
			</div>
		)
	}
}
