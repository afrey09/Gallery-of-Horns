import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

class Main extends React.Component {
  render() {
    
    return (
      <>
       
       <h2>Creature Type</h2>
        <main>
          {this.props.data.map((hornedBeast, id)=> {
          return <HornedBeast 
          title={hornedBeast.title} 
          image_url={hornedBeast.image_url} 
          key={hornedBeast._id} 
          description={hornedBeast.description}
          handleOpenModal={this.props.handleOpenModal}/>
        })};

        </main>

        

      </>
    )
  };
}

export default Main;
 