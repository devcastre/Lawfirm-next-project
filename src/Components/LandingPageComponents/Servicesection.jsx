
export const Servicesection = () => {

  return (
    <div className='container d-flex flex-column text-white align-items-center my-5 mx-1 mx-sm-3 px-lg-5 py-5 gap-5'>
        <h1 className='font-fam' data-aos="fade-up" data-aos-duration="1500">Services</h1>
        <div className='row p-3 g-5'>

            <div className='col-md-4 col-6 d-flex flex-column align-items-center text-center gap-2' data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="500">
                <img src="/svgIcon/corplawicon.svg" alt="Corp-Law" className='service-icon' />
                <span className='fs-20 fw-medium'>Corporate Law</span>
            </div>

            <div className='col-md-4 col-6 d-flex flex-column align-items-center text-center gap-2' data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="500">
                <img src="/svgIcon/famlawicon.svg" alt="Fam-Law" className='service-icon' />
                <span className='fs-20 fw-medium'>Family Law</span>
            </div>

            <div className='col-md-4 col-6 d-flex flex-column align-items-center text-center gap-2' data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="500">
                <img src="/svgIcon/crimdeflawicon.svg" alt="Crimdef-Law" className='service-icon' />
                <span className='fs-20 fw-medium'>Criminal Defense Law</span>
            </div>

            <div className='col-md-4 col-6 d-flex flex-column align-items-center text-center gap-2' data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="500">
                <img src="/svgIcon/realestatelawicon.svg" alt="realestate-Law" className='service-icon' />
                <span className='fs-20 fw-medium'>Real Estate Law</span>
            </div>

            <div className='col-md-4 col-12 d-flex flex-column align-items-center text-center gap-2' data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="500">
                <img src="/svgIcon/intproplawicon.svg" alt="Intprop-Law" className='service-icon' />
                <span className='fs-20 fw-medium'>Intellectual Property</span>
            </div>            
            

        </div>
    </div>
  )
}
