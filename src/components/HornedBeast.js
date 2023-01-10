import React from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favorite: 0,
  }
}

handleFavorite = () => {
  this.setState({
    favorite: this.state.favorite + 1
  })
}

favorited = () => {
  this.setState({
    addHeart: true
  });
}

render() {
  return (
    <>
      {/* <article>
        <h2>{this.props.title}</h2>
        <p> {this.state.favorite}💜 </p>
        <p onClick={this.handleFavorite} > Favorite</p>
        <img
          src={this.props.image_url}
          alt={this.props.description}
          title={this.props.title}
        />
        <p>{this.props.description}</p>
     
      </article> */}

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.image_url} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.state.favorite}💙
        </Card.Text>
        <Button variant="primary" onClick={this.handleFavorite}>Favorite Me!</Button>
      </Card.Body>
    </Card>
    </>
  )};
}


export default HornedBeast;
