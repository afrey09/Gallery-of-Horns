import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';
import { Form } from 'react-bootstrap';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sortedData: this.props.data
    }
  }
  
  handleSelect = (event) => {
    let selected = event.target.value;

    if (selected === '1') {
      let newData = this.props.data.filter(num => num.horns === 1);
      this.setState({
        sortedData: newData
      });
    } else if (selected === '2') {
      let newData = this.props.data.filter(num => num.horns=== 2);
      this.setState({
        sortedData: newData
      });
    } else if (selected === '3') {
      let newData = this.props.data.filter(num => num.horns === 3);
      this.setState({
        sortedData: newData
      });
    } else if (selected === '100') {
      let newData = this.props.data.filter(num => num.horns=== 100);
      this.setState({
        sortedData: newData
      });
    }
    else if (selected === 'all') {
      this.setState({
        sortedData: this.props.data
      })
    }
  }

  render() {

    return (
      <>
        <h2>Creature Type</h2>
        <main>

          <Form>
            <Form.Group>
              <Form.Select name="selected" onChange={this.handleSelect}>
                <option>Open this select menu</option>
                <option value="all">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
              </Form.Select>
            </Form.Group>
          </Form>

          {this.state.sortedData.map((hornedBeast, id) => {
            return <HornedBeast
              title={hornedBeast.title}
              image_url={hornedBeast.image_url}
              key={hornedBeast._id}
              description={hornedBeast.description}
              handleOpenModal={this.props.handleOpenModal} />
          })};

        </main>

      </>
    )
  }
};


export default Main;
