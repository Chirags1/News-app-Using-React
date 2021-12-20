import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title,desc,imageurl,readmore,newsdate}=this.props;
        return (
            <div className="my-3">
                   <div className="card">
           <img src={imageurl?imageurl:"https://media.istockphoto.com/photos/abstract-graphic-world-map-illustration-on-blue-background-big-data-picture-id1294021851?b=1&k=20&m=1294021851&s=170667a&w=0&h=vsypj3JPqiWOU5q21fX3lHt1Z7wphVNE8kfqdpogPSs="} className="card-img-top" alt=""/>
                          <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                     <p className="card-text">{desc}</p>
                      <a href={readmore} className="btn btn-secondary">Read More</a>
                      <small>{newsdate}</small>
                  </div>
                        </div>
            </div>
        )
    }
}
