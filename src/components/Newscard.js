import React from 'react'

const Newscard = (props) => {
    let {title, description, imageUrl, newsUrl} = props;
  return (
    <>
        <div className="container my-3">
            <div className="row">
                <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="card mb-3">
                            <img src={imageUrl} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                                <a href={newsUrl} className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    </>
  )
}

export default Newscard