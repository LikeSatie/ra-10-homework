'use strict';

const AuthForm = onAuth => {
  let nameField, emailField, passwordField;
  
  const authUser = event => {
    event.preventDefault();
    if ((!onAuth) || (typeof onAuth !== 'function')) return null;
        const userAuth = {  
            name: nameField.value,
            email: emailField.value,
            password: passwordField.value
        };
        onAuth(userAuth);
    }
  
  function checkEmail(event) {
        event.currentTarget.value = event.currentTarget.value.replace(/[^\w@\.-]+/gi, "");
    }
    
    function checkPassword(event) {
        event.currentTarget.value = event.currentTarget.value.replace(/[^\w]+/gi, "");
    }
  
  
    return (
        <form className="ModalForm" onSubmit={authUser} action="/404/auth/" method="POST">
            <div className="Input">
                <input ref={elem => nameField = elem} required type="text" placeholder="Имя" />
                <label></label>
            </div>
            <div className="Input">
                <input ref={elem => emailField = elem} onChange={checkEmail} type="email" placeholder="Электронная почта" />
                <label></label>
            </div>
            <div className="Input">
                <input ref={elem => passwordField = elem} onChange={checkPassword} required type="password" placeholder="Пароль" />
                <label></label>
            </div>
            <button type="submit">
                <span>Войти</span>
                <i className="fa fa-fw fa-chevron-right"></i>
            </button>
        </form>
    );
}