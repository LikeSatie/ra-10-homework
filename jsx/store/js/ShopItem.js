const config = {
	borderWidth: 3,
	borderStyle: 'dashed',
	borderColor: '#CB2431',
	padding: 7
};

const ShopItem = function (props) {
	const {item} = props;

	return (
		<div className="main-content" >
			<div style={config}>
			<h2>{item.brand}</h2>
			<h1>{item.title}</h1>
			<h3>{item.description}</h3>
			<div className="description">{item.descriptionFull}</div>
			<div className="highlight-window  mobile">
				<div className="highlight-overlay"></div>
			</div>
			<div className="divider"></div>
			<div className="purchase-info">
				<div className="price">{item.currency}{item.price.toFixed(2)}</div>
				<button>Добавить в корзину</button>
			</div>
			</div>
		</div>
	)
}
