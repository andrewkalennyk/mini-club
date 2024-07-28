import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {StaticImage} from "gatsby-plugin-image";


const Clubs = ({ siteTitle }) => {
  return (
      <div className="carousel slide"  id="clubCarousel" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center">
              <a href="https://www.instagram.com/mini_club_zp/" target="_blank" className="text-center">
                <div className="services services-2 w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">

                    {/*<img src="/storage/editor/fotos/640x640/e51ffc4b3b1485cf91d95b677e9faf75_1698088652.jpg.pagespeed.ce.Ol1qgmPoiT.jpg"
                                                     className="card-img img-cover rounded-circle shadow" alt="Zaporizhzhia">*/}
                  </div>
                  <div className="text w-100">
                    <h3 className="heading mb-2">Запоріжжя</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <a href="https://www.instagram.com/miniclub_kr/" target="_blank" className="text-center">
                <div className="services services-2 w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    {/*<img src="/storage/editor/fotos/640x640/26ec9810fe1b9ac441391655c545910b_1697889655.png.pagespeed.ce.dBUErGWieJ.png"
                                                     className="card-img img-cover rounded-circle shadow" alt="Kryvyi Rih">*/}
                  </div>
                  <div className="text w-100">
                    <h3 className="heading mb-2">Кривий Ріг</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <a href="https://www.instagram.com/mini_vinnytsia/" target="_blank" className="text-center">
                <div className="services services-2 w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    {/*<img src="/storage/editor/fotos/640x640/9225388814b5699150643c177aeb1f29_1697865533.jpg.pagespeed.ce._64dGFsHdo.jpg"
                                                     className="card-img img-cover rounded-circle shadow" alt="Vinnytsia">*/}
                  </div>
                  <div className="text w-100">
                    <h3 className="heading mb-2">Вінниця</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <a href="https://www.instagram.com/miniclub_kyiv/" target="_blank" className="text-center">
                <div className="services services-2 w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    {/*<img src="/storage/editor/fotos/640x640/4057ae402afc4e842f631e48e49b1a76_1697865091.jpg.pagespeed.ce.H2_8f0ceaE.jpg"
                                                     className="card-img img-cover rounded-circle shadow" alt="Kyiv">*/}
                  </div>
                  <div className="text w-100">
                    <h3 className="heading mb-2">Київ</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <a href="https://www.instagram.com/mini_club_odessa/" target="_blank" className="text-center">
                <div className="services services-2 w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    {/*<img src="/storage/editor/fotos/640x640/7e6b7639b897527d157c3c9898f38fb2_1697865033.jpg.pagespeed.ce.A42RxfzLpv.jpg"
                                                     className="card-img img-cover rounded-circle shadow" alt="Odesa">*/}
                  </div>
                  <div className="text w-100">
                    <h3 className="heading mb-2">Одеса</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>

        <a className="carousel-control-prev" href="#clubCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#clubCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
  )
}

export default Clubs
