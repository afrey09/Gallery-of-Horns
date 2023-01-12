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

handleTitleClick = () => {
  this.props.handleOpenModal(this.props.title, this.props.image_url, this.props.description)
}

render() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" onClick={this.handleTitleClick} src={this.props.image_url} alt={this.props.description} />
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
