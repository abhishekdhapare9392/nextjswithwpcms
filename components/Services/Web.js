import React from 'react'

const Web = ({ services }) => {
  //   console.log(services.af)
  const serviceWeb = services.acf.service_group.service_one
  return (
    <section className='section py-3' id='webDevelopment'>
      <div className='container'>
        <div className='card card-body shadow rounded-0 border-0'>
          <div className='row'>
            <div
              className='col-12 col-md-4 col-lg-4 col-xl-4 d-flex flex-column text-center'
              style={{ justifyContent: 'center' }}
            >
              <i
                className='fa fa-globe text-primary mb-3'
                style={{ fontSize: '175px' }}
              ></i>
            </div>
            <div className='col-12 col-md-8 col-lg-8 col-xl-8'>
              <h3>{serviceWeb.title}</h3>
              <p>{serviceWeb.content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Web
