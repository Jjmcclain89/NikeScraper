const Shoe = ({ shoeInfo }) => {
	const {
		title,
		subtitle,
		img,
		link,
		fullPrice,
		currentPrice,
		totalDiscount
	} = shoeInfo;
	return (
		<>
			<div>
				<p>title:{title}</p>
				<p>subtitle:{subtitle}</p>
				<img src={img}></img>
				<p>link: <a href={link}>{link}</a></p>
				<p>fullPrice:{fullPrice}</p>
				<p>currentPrice:{currentPrice}</p>
				<p>totalDiscount:{totalDiscount}</p>
			</div>
			<hr></hr>
		</>
	);
};

export default Shoe;
