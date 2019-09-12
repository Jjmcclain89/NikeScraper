import styled from 'styled-components';

const StyledShoe = styled.div`
	background: white;
	/* width: 500px; */
	border-radius: 1rem;
	border: solid 2px black;
`;

const StyledTitle = styled.a`
	display: block;
	font-size: 1.5rem;
	font-weight: bold;
	text-align: center;
	color: blue;
    z-index: 1;
`;

const StyledSubTitle = styled.h3`
	font-size: 1rem;
	text-align: center;
    z-index: 1;
`;

const StyledImage = styled.img`
	display: block;
	margin: auto;
	/* margin-top: -5rem; */
	margin-bottom: -5rem;
    z-index: -1;
`;

const StyledItemInfoContainer = styled.div`
	text-align: center;
`;

const StyledText = styled.p`
	margin: 0;
	font-size: 1.5rem;
`;

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
			<StyledShoe>
				<StyledTitle href={link}>{title}</StyledTitle>
				{/* <StyledSubTitle>{subtitle}</StyledSubTitle> */}
				<StyledImage src={img}></StyledImage>
				<StyledItemInfoContainer>
					<StyledText>Full Price: {fullPrice} </StyledText>
					<StyledText>Discounted Price: {currentPrice} </StyledText>
					<StyledText>Total Discount: {totalDiscount} </StyledText>
				</StyledItemInfoContainer>
			</StyledShoe>
		</>
	);
};

export default Shoe;
