import React from 'react';

const Card = ({title, description, buttonText, imageUrl }) => {
  return (

    <div className="col">
      <div className="card text-center" >
        <img src={imageUrl} className="card-img-top" alt="Card Image" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">{buttonText}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
