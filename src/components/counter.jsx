import React, {  } from 'react';

class Counter extends React.Component {
    state = {
        count: 1,
        imageUrl:'https://picsum.photos/200',
        tags:[]
    };
    render() {
        let classes = "badge m-4 badge-";
        classes+=this.state.count===0?"warning":"primary";
        return (
            <div>
                <img src={this.state.imageUrl} alt=""/>
            <span className={classes}>{this.checkValue()}</span>
            {this.renderTags()}
        </div>
        );
    }

    renderTags(){
        if(this.state.tags.length===0) return<p>"There are no tags!</p>
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