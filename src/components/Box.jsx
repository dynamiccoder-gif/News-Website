import React, { Component } from 'react'
import './Box.css'

export default class Box extends Component {
  render() {
    let {title, description, image,urls,date}=this.props;
    return (
   
      <div className="card" >
      <img className="card-img-top" src={image} alt="Card image cap"/>
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p className="card-text">{description}....</p>  
      </div>
      <p className='dateandauthor'> Date- {date}</p><a href={urls} className="btn btn-primary " style={{backgroundColor:"rgb(46, 44, 44)"}} target='_balnk'>Read More</a>
    </div>
    )
  }
}
