import { useState } from 'react'
import Image from 'next/image'
import { Container } from 'react-bootstrap'

import IndexHeaderTxt from './IndexHeaderTxt'
import LogoTxtSvg from '@components/ui/logo/LogoTxtSvg'

import styles from './IndexHeader.module.scss'

export default function IndexHeader({ 
	//nameCompany,
	indexHeader,
	widthDevice
}) {

	const [isMobile, setIsMobile] = useState(widthDevice);
	const ismobile = widthDevice < 992;
	if (ismobile !== isMobile) setIsMobile(ismobile);

	//debugger;
	return (
	<Container 
		as="header" 
		fluid 
		className={`${ styles.block } p-0`}
	>
		<div className={ styles.skyBlock }>

		</div>

		<div
			className={ styles.city }
		>

			{/* <Image 
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
			*/}

			{isMobile ?
				<Image 
					src="/assets/bg-index-header/city_mobile.png" 
					layout="fill"
					objectFit="cover"
					quality={100}
					priority="false"
					alt="backgroud sky"
					className={ styles.bgcitymobile }
				/>
			: 
				<Image 
					src="/assets/bg-index-header/city.png" 
					layout="fill"
					objectFit="cover"
					quality={100}
					priority="false"
					alt="backgroud sky"
					className={ styles.bgcity }
				/>
			} 
		</div>

		<Container 
			fluid="xxl" 
			className={ styles.title }
		>
			<LogoTxtSvg 
				widthDevice={ widthDevice }
			/>

		</Container>

		{/*
		<div
			className={ styles.title }
		>
			<span 
				className={ styles.titleMain }
			>
				{ nameCompany } 
			</span> 
		</div>
		*/}

		<IndexHeaderTxt 
			indexHeader={ indexHeader }
		/>

	</Container>
	)
}