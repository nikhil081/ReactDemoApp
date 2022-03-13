import React, {  } from 'react';
import Counter from './counter';
class Counters extends React.Component {
    state = {  
        counters:[
            { id:1,value:0},
            { id:2,value:0},
            { id:3,value:0},
            { id:4,value:0},
        ]
    } 
    handleDelete = () =>{
        console.log("delete event handled");
    }
    render() { 
        return (<div>
            {this.state.counters.map(counter=> <Counter key={counter.id} onDelete={this.handleDelete} value = {counter.value}>
                <h4>Counter title #{counter.id}</h4>
                </Counter>)}
        </div>);
    }
}
 
export default Counters;