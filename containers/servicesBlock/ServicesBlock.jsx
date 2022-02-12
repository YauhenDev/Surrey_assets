import parse from 'html-react-parser'
import Image from 'next/image'

import {Container, Row, Col } from 'react-bootstrap'
import BgLogo from '@components/ui/logo/BgLogo'

import styles from './ServicesBlock.module.scss'

export default function ServicesBlock({ 
	ourServices
}) {

	//debugger;
	return (
	<Container as="section" fluid className={`${ styles.block } p-0`}>
		<BgLogo />	
		<Container fluid="xxl" className={ styles.wrapper }>
			<Row>
				<Col>
					<div className="separator"></div>
					<h2>
						{ ourServices.h2 }
					</h2>
					<p>
						This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information.
					</p>
				</Col>
			</Row>
			<Row 
				className="mb-4" 
				id={ ourServices.services[0].anchor }
			>
				<Col 
					xs={{ span: 12, order: 1 }}
					lg={{ span: 7, order: 1 }}
				>
					<div className="separator"></div>
					<h3>
						{ ourServices.services[0].h3 }
					</h3>

					{ parse(`
						${ ourServices.services[0].txt }
					`) }

				</Col>
				<Col 
					xs={{ span: 12, order: 2 }}
					lg={{ span: 5, order: 2 }}
				>

					<Image 
						src={`/assets/services/${ourServices.services[0].img}`}
						alt={ ourServices.services[0].h3 }
						width={960}
						height={600}
					/>

				</Col>
			</Row>
			<Row 
				className="mb-4" 
				id={ ourServices.services[1].anchor }
			>
				<Col 
					xs={{ span: 12, order: 2 }}
					lg={{ span: 5, order: 1 }}
				>
					
					<Image 
						src={`/assets/services/${ourServices.services[1].img}`}
						alt={ ourServices.services[1].h3 }
						width={960}
						height={600}
					/>

				</Col>
				<Col 
					xs={{ span: 12, order: 1 }}
					lg={{ span: 7, order: 2 }}
				>

					<div className="separator"></div>
					<h3>
						{ ourServices.services[1].h3 }
					</h3>

					{ parse(`
						${ ourServices.services[1].txt }
					`) }

				</Col>
			</Row>
			<Row 
				className="mb-4" 
				id={ ourServices.services[2].anchor }
			>
				<Col 
					xs={{ span: 12, order: 1 }}
					lg={{ span: 7, order: 1 }}
				>
					<div className="separator"></div>
					<h3>
						{ ourServices.services[2].h3 }
					</h3>

					{ parse(`
						${ ourServices.services[2].txt }
					`) }

				</Col>
				<Col 
					xs={{ span: 12, order: 2 }}
					lg={{ span: 5, order: 2 }}
				>

					<Image 
						src={`/assets/services/${ourServices.services[2].img}`}
						alt={ ourServices.services[2].h3 }
						width={960}
						height={600}
					/>

				</Col>
			</Row>
		</Container>
	</Container>
	)
}