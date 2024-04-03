import { useReducer } from 'react'
import VoteButtons from './VoteButtons';
import './styles.css';

const Voting = () => {
    const reduceMethod = (brands, action) => {
        switch (action.type) {
          case "ford": {
            brands[0].votes = action.value
            return [...brands];
          }
          case "tata": {
            brands[1].votes = action.value
            return [...brands];
          }
          case "BMW": {
            brands[2].votes = action.value
            return [...brands];
          }
          case "KIA": {
            brands[3].votes = action.value
            return [...brands];
          }
          default: {
            return [...brands];
          }
        }
      };
    
      const [ brands, dispatch ] = useReducer(reduceMethod, [
        { brand: "ford", votes: 0 },
        { brand: "tata", votes: 0 },
        { brand: "BMW", votes: 0 },
        { brand: "KIA", votes: 0 },
      ]);
      return (
        <>
          <VoteButtons data={brands} dispatch={dispatch} />
        </>
      );
}

export default Voting