import React, {  } from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
        imageUrl:'https://picsum.photos/200',
        tags:[]
    };
    render() {
        let classes = "badge m-4 badge-";
        classes+=this.state.count===0?"warning":"primary";
        return (
            <div>
                {/* <img src={this.state.imageUrl} alt=""/> */}
            <span className={classes}>{this.state.count}</span>
            {/* {this.renderTags()} */}
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm"> Click me</button>
        </div>
        );
    }
    handleIncrement=()=>{
        console.log("event triggered",this);
        this.setState({count:this.state.count+1})
    }

    renderTags(){
        if(this.state.tags.length===0) return<p>There are no tags!</p>
        return <ul>
        {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
    </ul>;
    }
    checkValue() {
        const { count } = this.state;
        return count === 0 ? "zero" : count;
    }
}
export default Counter;