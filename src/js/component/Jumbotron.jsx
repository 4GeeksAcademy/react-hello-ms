import React from 'react';

const Jumbotron = () => {
  return (
    <div className="container" style={{marginTop: '20px', marginBottom: '20px'}}>
      <div className='bg-light p-5 rounded-3 ' >
        <div className='container-fluid py-5'>
        <h1 className='display-5 fw-bold'>A Warm Welcome!</h1>
        <p className='col-md-8 fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere assumenda magnam voluptatem ab consectetur blanditiis repellat praesentium eum quibusdam. Veritatis sunt qui sapiente ipsum accusamus itaque repellat laborum doloremque.</p>
        <button className='btn btn-primary btn-lg'>Call to action!</button>
        </div>
      </div>
      
    </div>
  );
};

export default Jumbotron;
