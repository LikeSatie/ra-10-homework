
class SubscribeForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			email: '',
			checkEmailValid: ' '
		};
		this.submit = this.submit.bind(this);
		this.checkEmail = this.checkEmail.bind(this);
	}

	checkEmail(event) {
		const isValidEmail = event.currentTarget.validity.valid ? 'is-valid' : 'is-error';
		const checkLengthAndValidEmail =	!event.currentTarget.value.length ? ' ' : isValidEmail;
		this.setState({
			email: event.currentTarget.value,
			checkEmailValid: checkLengthAndValidEmail
		});
	}

	submit(event){
		event.preventDefault();
	}

	render () {
		return (
			<div className="subscribe__form">
				<form 
					className={`form form--subscribe ${this.state.checkEmailValid}`}
					onSubmit={this.submit}
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
							onChange={this.checkEmail} 
							name="email"
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
