import styled from 'styled-components';

const StyledHeader = styled.header`
	border-bottom: 4px solid black;
    border-radius: 10px;
    font-size: 64px;
    text-align: center;
    margin-bottom: 36px;
`;

const Header = () => {
	return <StyledHeader>Nike Dollar Menu</StyledHeader>;
};

export default Header;
