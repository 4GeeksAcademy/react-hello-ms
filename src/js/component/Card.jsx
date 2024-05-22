import React from 'react';

const Card = ({title, description, buttonText, imageUrl }) => {
  return (
/*<div className='container'>
<div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card text-center ">
      <img src="https://picsum.photos/id/28/367/267" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     <div className='card-footer'>
  <a href="#" className="btn btn-primary ">Find Out More!</a>
  </div>
        </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-center">
      <img src="https://picsum.photos/id/29/367/267" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <div className='card-footer'>
  <a href="#" className="btn btn-primary ">Find Out More!</a>
  </div>
        </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-center">
      <img src="https://picsum.photos/id/37/367/267" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..</p>
     <div className='card-footer'>
  <a href="#" className="btn btn-primary ">Find Out More!</a>
  </div>
        </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-center">
      <img src="https://picsum.photos/id/35/367/267" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <div className='card-footer'>
  <a href="#" className="btn btn-primary ">Find Out More!</a>
  </div>
        </div>
    </div>
  </div>
</div>
</div>*/

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
