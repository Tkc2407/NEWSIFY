import React from 'react'
import PropTypes from 'prop-types'

const NewsItem=(props)=> {


        let { title, description, imageUrl, newsUrl, author, date, source } = props;

        return (
            <div className="my-3">
                <div className="card">
                    <div>
                        <span className="badge rounded-pill bg-danger" style={{position:'absolute',right:'0'}}>{source}</span>
                    </div>
                    <img src={!imageUrl ? "https://images.hindustantimes.com/tech/img/2023/06/21/1600x900/Instagram_reel_download_1687358064892_1687358084250.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">

                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
