'use strict'

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			filters: 'All'
		};
	}

render() {
	//получаем фильтр и устанавливаем статус
	const handleFilterClick = (filter) => {
		this.setState({
			filters: filter
		});
	};

	//возвращаем новый массив с отфильтрованными проектами
	const getProjects = (projects, filter) => {
		if (filter === 'All' ) return projects;
		let filteredProjects = [];
		projects.map((project, i) => {
			project.category === filter ? filteredProjects.push(project) : '';
		})

	return filteredProjects;
};

return (
	 <div>
    <Toolbar
      filters={this.props.filters}
      selected={this.state.filters}
      onSelectFilter={ (filter) => handleFilterClick(filter) } />
    <Portfolio projects={getProjects(this.props.projects, this.state.filters)} />
  </div>

);
}

}

