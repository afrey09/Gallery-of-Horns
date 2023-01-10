import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    
    return (
      <>
       
       <h2>Creature Type</h2>
        <main>
          {data.map((hornedBeast, id)=> {
          return <HornedBeast title={hornedBeast.title} image_url={hornedBeast.image_url} key={hornedBeast._id} description={hornedBeast.description}/>
        })};

        </main>

        

      </>
    )
  };
}

export default Main;
