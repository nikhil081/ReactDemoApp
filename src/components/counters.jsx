import React, {  } from 'react';
import Counter from './counter';
class Counters extends React.Component {
    state = {  } 
    render() { 
        return (<div>
            <Counter/>,
            <Counter/>
        </div>);
    }
}
 
export default Counters;