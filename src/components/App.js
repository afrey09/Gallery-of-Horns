//1st import
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from '../data.json';
import Modal from 'react-bootstrap/Modal';
import SelectedBeast from './SelectedBeast';



// 2nd Class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast:'',
      selectedBeastImg:'',
      selectedBeastDesc:''
    }
  }

  handleOpenModal = (title, image, description) => {
    this.setState({
      showModal: true,
      selectedBeast: title,
      selectedBeastImg: image,
      selectedBeastDesc: description
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  render(){
    return(
      <>
      <Header/>
      <Main data={data}
        handleOpenModal={this.handleOpenModal}/>
      <SelectedBeast data={data} showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} selectedBeast ={this.state.selectedBeast} selectedBeastImg ={this.state.selectedBeastImg} selectedBeastDesc ={this.state.selectedBeastDesc}/>
      <Footer/>
      </>
    )
  };
}

//3rd Export component so other files can import them
export default App;
