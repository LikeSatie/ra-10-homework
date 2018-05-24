function itemView() {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.props = props;
		}

		render() {
			if(this.props.views > 1000) {
				return (<Popular>{this.props.type == 'article'? <Article {...this.props} /> : <Video {...this.props} />}</Popular>)
			}
			if(this.props.views < 100) {
				return (<New>{this.props.type == 'article'? <Article {...this.props} /> : <Video {...this.props} />}</New>)
			}
			return this.props.type == 'article'? <Article {...this.props} /> : <Video {...this.props} />;
		}
	}
}

const GetItem = itemView();

const List = props => {
	return props.list.map(item => {
	  return <GetItem {...item}/>
	});
};
