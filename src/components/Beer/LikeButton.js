import React from 'react';

class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLiked: false,
            text:'Like'
        };
    }

    handleLike = () => {
        this.setState({
            isLiked: !this.state.isLiked
        })

        if (this.state.isLiked === true) {
            this.state.text = "Liked";
        } else {
            this.state.text = "Like";
        }
    }

    render() {
        return(
            <button onClick={this.handleLike}>{this.state.text}</button>
        )
    }
}

export default LikeButton;
