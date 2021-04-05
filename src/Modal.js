import React from "react";
import "./modal.css";
import iconPubg from './iconPubg.png';
export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
      console.log('here',this.props)
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal" id="modal">
        <img src={iconPubg} alt="icon" style={{height:'140px',padding:'10px',width:'140px',display:'inline-block'}}/>
        <h2 style={{display:'inline-block'}}>PUBG Mobile</h2>
      
        <div className="content">
          <h2>Pricing</h2>
          <div>
            <p>1 Week - 1 Month    $100</p>
            <p>6 Months    $500</p>
            <p>1 year    $900</p>
          </div>
        </div>
        <div className="actions">
          <button className="toggle-button" onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
    );
  }
}