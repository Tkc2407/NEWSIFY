import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {

        let {title,description,imageUrl,newsUrl}=this.props;

        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2023/06/21/1600x900/Instagram_reel_download_1687358064892_1687358084250.jpg":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
