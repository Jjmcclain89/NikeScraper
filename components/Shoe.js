import styled from 'styled-components';
import { formatPrice } from '../lib/lib';

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
	/* margin-top: -2.5rem; */
	margin-bottom: -5rem;
	z-index: -1;
`;

const StyledText = styled.p`
	text-align: ${({ align }) => align};
	margin-top: 0;
	margin-bottom: 0;
	margin-right: ${({ align }) => (align == 'end' ? '.5rem' : '0')};
	font-size: 1.5rem;
	font-weight: bold;
	span {
		color: ${({ color }) => color};
	}
`;

const Shoe = ({ shoeInfo }) => {
	const { title, img, link, fullPrice, currentPrice, totalDiscount } = shoeInfo;

	const handleClick = e => {
		window.location = link;
	};
	return (
		<>
			<StyledShoe onClick={handleClick}>
				<StyledTitle href={link}>{title}</StyledTitle>
				<StyledText align="center" color="black">
					Full Price: <span>{formatPrice(fullPrice)}</span>
				</StyledText>
				<StyledImage src={img}></StyledImage>
				<StyledText align="end" color="red">
					Total Discount: <span>{formatPrice(totalDiscount)}</span>
				</StyledText>
				<StyledText align="end" color="green">
					Discounted Price: <span>{formatPrice(currentPrice)}</span>
				</StyledText>
			</StyledShoe>
		</>
	);
};

export default Shoe;
