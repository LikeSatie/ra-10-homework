'use strict';

const content = [
	{
		title: 'Компоненты',
		article: 'Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.'
	},
	{
		title: 'Выучил раз, используй везде!',
		article:'После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.'
	},
	{
		title: 'Использование JSX',
		article: 'JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.'
	}
]


class App extends React.Component {

	render () {
		return (
		<main className="main">
			<h2 className="title">React</h2>

			{ content.map((item, itemIndex) => {
        return (
       		<Section title={item.title} article={item.article} /> 
        )
   		}) }
		</main>
		)
	}
}

class Section extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			open: false
		}
	}

	render() {

		const toggleOpen = () => {
			this.setState({
				open: !this.state.open
			});
		};

		return (
			<section className={` section ${this.state.open ? "open" : ""}`}>
				<button  onClick={() => toggleOpen()}>toggle</button>
				<h3 className="sectionhead"  onClick={() => toggleOpen()}>{this.props.title}</h3>
				<div className="articlewrap">
					<div className="article">{this.props.article}
					</div>
				</div>
			</section>	
		)
	}
}

