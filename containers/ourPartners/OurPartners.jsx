import {Container, Row, Col } from 'react-bootstrap'

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper";

import Partners from './Partners'

import styles from './OurPartners.module.scss'
import "swiper/css"

export default function OurPartners({ 
	ourPartners
}) {

	//debugger;
	return (
	<Container as="section" fluid="xxl" className={ styles.block }>
		
		<Row>
			<Col>
				<div className="separator"></div>
				<h2>
					{ ourPartners.h2 }
				</h2>
			</Col>
		</Row>
		<Row>
			<Col className="p-0">
				<Swiper 
					slidesPerView={ 'auto' } 
					centeredSlides={ false } 
					spaceBetween={ 18 } 
					loop={ true } 
					className={ styles.slides }
					//slidesPerView={ 1 }
					breakpoints={{
						768: {
							slidesPerView: 3,
							spaceBetween: 18,
						},
						992: {
							slidesPerView: 4,
							spaceBetween: 25,
						}
					}}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
						}}
					modules={[ Autoplay ]}
				>
					{ourPartners.partners.map( (p, i) => (
						<SwiperSlide key={ i } className={ styles.slide }>
								<Partners
									name={ p.name }
									photo={`/assets/partners/${p.photo}`}
									linkTo={ p.linkTo }
								/>
						</SwiperSlide>
					))}
				</Swiper>
			</Col>
		</Row>
	</Container>
	)
}