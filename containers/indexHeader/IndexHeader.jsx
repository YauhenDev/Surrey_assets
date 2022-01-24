import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

import styles from './IndexHeader.module.scss'

export default function IndexHeader({ 
	nameCompany
	//widthDevice
}) {

	// Определение телефона по сетке bootstrap 5
	// для замены меню bootstrap 5 на offcanvas
	// const [isMobile, setIsMobile] = useState(widthDevice);
	// const ismobile = widthDevice < 992;
	// if (ismobile !== isMobile) setIsMobile(ismobile);

	//debugger;
	return (
	<Container as="header" fluid className={`${ styles.block } p-0`}>
		<div
			className={ styles.skyBlock }
		>
			<Image 
				src="/assets/bg-index-header/sky_dark.jpg" 
				layout="fill"
				objectFit="cover"
       			quality={100}
				priority="false"
				alt="backgroud sky"
			/>
		</div>
		<div
			className={ styles.city }
		>
		{/* 
		{isMobile ?
			<Image 
				src="/assets/bg-index-header/city_mobile.png" 
				layout="fill"
				objectFit="cover"
       			quality={100}
				priority="false"
				alt="backgroud sky"
			/>
		: 
			<Image 
				src="/assets/bg-index-header/city.png" 
				layout="fill"
				objectFit="cover"
       			quality={100}
				priority="false"
				alt="backgroud sky"
			/>
		} 
		*/}
		<Image 
				src="/assets/bg-index-header/city_mobile.png" 
				layout="fill"
				objectFit="cover"
       			quality={100}
				priority="false"
				alt="backgroud sky"
				className={ styles.bgcitymobile }
			/>
		<Image 
				src="/assets/bg-index-header/city.png" 
				layout="fill"
				objectFit="cover"
       			quality={100}
				priority="false"
				alt="backgroud sky"
				className={ styles.bgcity }
			/>
		</div>
		<div
			className={ styles.title }
		>
			<span 
				className={ styles.titleMain }
			>
				{ nameCompany }
			</span>
		</div>
	</Container>
	)
}