class Menu extends React.Component {
  constructor({ activeClassName, ...props }) {
    super(props);
    this.activeClassName = activeClassName;
  }
  render() {
    return (
      <nav className="menu">
        <NavLink to="/" exact className="menu__item" activeClassName={this.activeClassName}>Главная</NavLink>
        <NavLink to="/drift" className="menu__item" activeClassName={this.activeClassName}>Дрифт-такси</NavLink>
        <NavLink to="/timeattack" className="menu__item" activeClassName={this.activeClassName}>Time Attack</NavLink>
        <NavLink to="/forza" className="menu__item" activeClassName={this.activeClassName}>Forza Karting</NavLink>
      </nav>
    );
  }
}