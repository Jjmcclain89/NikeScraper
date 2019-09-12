import { useContext } from 'react';
import styled from 'styled-components';
// import GridLoader from '@bit/davidhu2000.react-spinners.grid-loader';
import { ShoeContext } from './ShoeContext';
import Shoe from './Shoe';

const StyledShoeGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 1.1rem;
`;

const LoaderContainer = styled.div`
    display:block;
	align-items: center;
`;

const Data = () => {
	const shoeData = useContext(ShoeContext);
	console.log(shoeData);
	return (
		<StyledShoeGrid>
			{shoeData.length > 0 ? (
				shoeData.map(shoe => <Shoe key={shoe.id} shoeInfo={shoe} />)
			) : (
                <LoaderContainer>
                    {/* <GridLoader size={100} color="#000" margin="10px" /> */}
                </LoaderContainer>
			)}
		</StyledShoeGrid>
	);
};

export default Data;
