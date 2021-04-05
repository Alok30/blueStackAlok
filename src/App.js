
import './App.css';
import axios from 'axios'
import React, { Component } from 'react'
import {data} from './data';
import calendarIcon from './calendar.png'
import csvIcon from './csv.png'
import reportIcon from './report.png'
import pubgIcon from './iconPubg.png'
import dollarIcon from './dollarIcon.png';
import logo from './download.png';
import Modal from './Modal';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:data,
      newData:data.data,
      show: false
    }
    this.eventName=this.eventName.bind(this)
  }
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  eventName(e, data){
    let activeNav = document.querySelector('.nav-item .active');
    activeNav.classList.remove('active');
    e.target.classList.add('active');
    var date=new Date(new Date().toLocaleDateString());
    if(data==='Past campaign'){
      var filterHome = this.state.data.data.filter(home => (
      new Date(home.createdOn)<date));
       this.setState({
         newData:filterHome
       })
    }else if(data==='Upcoming campaign'){
      var filterHome = this.state.data.data.filter(home => (
        new Date(home.createdOn)>date));
 console.log(filterHome)
         this.setState({
           newData:filterHome
         })
    }else{
    this.setState({
newData:this.state.data.data
    })
  }
}
 async componentDidMount(){
  }

  renderTableData() {
    return this.state.newData.map((student, index) => {
       const {  name, createdOn,price, region } = student //destructuring
      //  date=new Date(createdOn)
       
      var dt1 = new Date(createdOn);
     var dt2 = new Date(new Date().toLocaleDateString());
 var result=Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
       return (
          <tr key={name}>
             <td>{createdOn }  {result} Days Ago</td>
             <td className="app-cell">
              <img src={pubgIcon} alt="App Icon" className="app-icon"/>
              <div className="inline-block">
                <div>{name}</div>
                <div>{region}</div>
              </div>
             </td>
             <td >
               <img src={dollarIcon} className="cell-icon" alt="dollar"  
       
          onClick={e => {
            this.showModal(e);
          }}/>
               View Pricing
               </td>
             <td className="flex-wrapper">
                <div className="flex-child">
                  <img src={calendarIcon} alt="Index" className="cell-icon"/>
                  CSV
                </div>
                <div className="flex-child">
                  <img src={reportIcon} alt="Report"  className="cell-icon"/>
                  Report
                </div>
                <div className="flex-child">
                  <img src={csvIcon} alt="Calendar"  className="cell-icon"/>
                  Schedule Again
                </div>
              </td>
          </tr>
       )
    })
 }


  render() {
    return (
      <div className="container">
            <Modal onClose={this.showModal} show={this.state.show}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
          fuga omnis a sed impedit explicabo accusantium nihil doloremque
          consequuntur.
        </Modal>
      
<nav className="navbar navClass">
 
    <img src={logo} width="100" height="100" className="d-inline-block align-top" alt="logo"/>
    

</nav>   

<div className=" jumbotron-fluid">
    <p className="display-4">Manage  campaign</p>
</div>

<ul className="nav" >
  <li className="nav-item" >
    <a className="nav-link active" onClick={((e) => this.eventName(e,'Live campaign'))}>Live campaign</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" onClick={((e) => this.eventName(e,'Upcoming campaign'))}>Upcoming campaign</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" onClick={((e) => this.eventName(e,'Past campaign'))}>Past campaign</a>
  </li>
  
</ul>
<table className="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Campaign</th>
      <th scope="col">View</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  <tr></tr>  {this.renderTableData()}

  </tbody>
</table>

        
      </div>
    )
  }
}
