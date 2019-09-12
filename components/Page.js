import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ShoeProvider } from './ShoeContext';
import { getShoeData } from '../lib/lib.js';

const theme = {
	red: '#FF0000',
	black: '#393939',
	grey: '#3A3A3A',
	lightgrey: '#E1E1E1',
	offWhite: '#EDEDED',
	maxWidth: '1000px',
	bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const StyledPage = styled.div`
	color: ${props => props.theme.black};
`;

// const GlobalStyle = createGlobalStyle`
//   html {
//     background: ${theme.offWhite};
//     box-sizing: border-box;
//     font-size: 16px;
//   }
//   *, *:before, *:after {
//     box-sizing: inherit;
//   }
//   body {
//     padding: 0;
//     margin: 0;
//     font-size: 1rem;
//     line-height: 2;
//   }
//   a {
//     text-decoration: none;
//     color: ${theme.black};
//   }
// `;

const useShoes = () => {
	const [shoes, setShoes] = useState([]);

	useEffect(() => {
		const getData = async () => {
			setShoes(await getShoeData());
		};
		getData();
		console.log('Mounting or Updating');
	}, []);

	return shoes;
};

const Page = ({ children }) => {
	const shoes = useShoes();
	return (
		<>
			{/* <GlobalStyle /> */}
			<ShoeProvider value={shoes}>
				<StyledPage>{children}</StyledPage>
			</ShoeProvider>
		</>
	);
};

export default Page;
