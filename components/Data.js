import { useContext } from 'react';
import { ShoeContext } from './ShoeContext';
import Shoe from './Shoe';

const Data = props => {
    const shoeData = useContext(ShoeContext);
    console.log(shoeData);
	return (
		<div>
            {shoeData.map(shoe => {
                return (
                    <Shoe key={shoe.id} shoeInfo={shoe}/>
                )
            })}
		</div>
	);
};

export default Data;
