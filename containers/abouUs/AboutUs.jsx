import Image from 'next/image'
import {Container, Row, Col } from 'react-bootstrap'

import BgLogo from '@components/ui/logo/BgLogo'

import styles from './AboutUs.module.scss'


export default function AboutUs({ 
	aboutUs
}) {

	const { 
		h2,
		txt1, 
		txt2, 
		txt3, 
		txtFull, 
	} = aboutUs

	//debugger;
	return (
	<Container as="section" fluid className={`${ styles.block } p-0`}>
		<BgLogo />
		<Container fluid="xxl" className={ styles.wrapper }>
			<Row>
				<Col>
					<div className="separator"></div>
					<h2>
						{ h2 }
					</h2>
					<p>
						{ txt1 }
					</p>
				</Col>
			</Row>
			<Row>
				<Col 
					xs={12}
					md={6}
					className="position-relative"
				>

					<div 
						className={ styles.imgLeftBlock }
					>
						<Image 
							src="/assets/bn-fon.jpg"
							alt="Санузел в трендовых синих оттенках 2020 почти готов"
							className="image-left img-fluid position-relative top-0 end-0 bg-cover"
							layout="fill"
							objectFit='contain'
						/>
					</div>
					<p 
						className={`float-md-end mt-4 mx-auto ${ styles.blockquote }`} 
					>
						{ txt2 }
					</p>

				</Col>
				<Col 
					xs={12}
					md={6}
				>
					<div 
						className={`${ styles.imgRightBlock } d-md-block d-none`} 
					>
						<Image 
							src="/assets/bn-fon.jpg"
							alt="Санузел в трендовых синих оттенках 2020 почти готов"
							className="image-left img-fluid position-relative top-0 end-0 bg-cover"
							layout="fill"
							objectFit='contain'
						/>

					</div>
					<p>
						{ txt3 }
					</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>
						{ txtFull }
					</p>
				</Col>
			</Row>
		</Container>
	</Container>
	)
}