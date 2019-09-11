import { useEffect, useState } from 'react';
import { ShoeProvider } from './ShoeContext';
import { getShoeData } from '../lib/lib.js';

const useShoes = () => {
	const [shoes, setShoes] = useState([]);

	useEffect(() => {
        const getData = async () => {
            setShoes(await getShoeData());
        }
        getData();
        console.log('Mounting or Updating');
	}, []);

	return shoes;
};

const Page = ({ children }) => {
	const shoes = useShoes();
	return (
		<ShoeProvider value={shoes}>
			<div className="Page">{children}</div>
		</ShoeProvider>
	);
};

export default Page;
