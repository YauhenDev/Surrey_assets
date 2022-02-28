import parse from 'html-react-parser'
import Image from 'next/image'

import {Container, Row, Col } from 'react-bootstrap'
import BgLogo from '@components/ui/logo/BgLogo'

import styles from './ServicesBlock.module.scss'

export default function ServicesBlock({ 
	ourServices
}) {

	// const odd = ourServices.services.filter(
	// 	(item, i) => i % 2 === 0
	// )

	//debugger;
	return (
	<Container as="section" fluid className={`${ styles.block } p-0`}>
		<BgLogo />	
		<Container fluid="xxl" className={ styles.wrapper }>
			<Row 
				className="mb-4" 
				id={ ourServices.services[0].anchor }
			>
				<Col 
					xs={{ span: 12, order: 2 }}
					lg={{ span: 5, order: 1 }}
					className={ styles.img }
				>
					
					<Image 
						src={`/assets/services/${ourServices.services[0].img}`}
						alt={ ourServices.services[0].h3 }
						width={1200}
						height={675}
					/>

				</Col>
				<Col 
					xs={{ span: 12, order: 1 }}
					lg={{ span: 7, order: 2 }}
				>

					<div className="separator"></div>
					<h3>
						{ ourServices.services[0].h3 }
					</h3>

					{ parse(`
						${ ourServices.services[0].txt }
					`) }

				</Col>
			</Row>

			{/* 0 */}
			<Row 
				className="mb-4" 
				id={ ourServices.services[1].anchor }
			>
				<Col 
					xs={{ span: 12, order: 1 }}
					lg={{ span: 7, order: 1 }}
				>
					<div className="separator"></div>
					<h3>
						{ ourServices.services[1].h3 }
					</h3>

					{ parse(`
						${ ourServices.services[1].txt }
					`) }

				</Col>
				<Col 
					xs={{ span: 12, order: 2 }}
					lg={{ span: 5, order: 2 }}
					className={ styles.img }
				>

					<Image 
						src={`/assets/services/${ourServices.services[1].img}`}
						alt={ ourServices.services[1].h3 }
						width={1200}
						height={675}
					/>

				</Col>
			</Row>

			{/* 1 */}
			<Row 
				className="mb-4" 
				id={ ourServices.services[2].anchor }
			>
				<Col 
					xs={{ span: 12, order: 2 }}
					lg={{ span: 5, order: 1 }}
					className={ styles.img }
				>
					
					<Image 
						src={`/assets/services/${ourServices.services[2].img}`}
						alt={ ourServices.services[2].h3 }
						width={1200}
						height={675}
					/>

				</Col>
				<Col 
					xs={{ span: 12, order: 1 }}
					lg={{ span: 7, order: 2 }}
				>

					<div className="separator"></div>
					<h3>
						{ ourServices.services[2].h3 }
					</h3>

					{ parse(`
						${ ourServices.services[2].txt }
					`) }

				</Col>
			</Row>

			<Row 
				className="mb-4" 
				id={ ourServices.services[3].anchor }
			>
				<Col 
					xs={{ span: 12, order: 1 }}
					lg={{ span: 7, order: 1 }}
				>
					<div className="separator"></div>
					<h3>
						{ ourServices.services[3].h3 }
					</h3>

					{ parse(`
						${ ourServices.services[3].txt }
					`) }

				</Col>
				<Col 
					xs={{ span: 12, order: 2 }}
					lg={{ span: 5, order: 2 }}
					className={ styles.img }
				>

					<Image 
						src={`/assets/services/${ourServices.services[3].img}`}
						alt={ ourServices.services[3].h3 }
						width={1200}
						height={675}
					/>

				</Col>
			</Row>

			<Row 
				className="mb-4" 
				id={ ourServices.services[4].anchor }
			>
				<Col 
					xs={{ span: 12, order: 2 }}
					lg={{ span: 5, order: 1 }}
					className={ styles.img }
				>
					
					<Image 
						src={`/assets/services/${ourServices.services[4].img}`}
						alt={ ourServices.services[4].h3 }
						width={1200}
						height={675}
					/>

				</Col>
				<Col 
					xs={{ span: 12, order: 1 }}
					lg={{ span: 7, order: 2 }}
				>

					<div className="separator"></div>
					<h3>
						{ ourServices.services[4].h3 }
					</h3>

					{ parse(`
						${ ourServices.services[4].txt }
					`) }

				</Col>
			</Row>

			{/* <Row 
				className="mb-4" 
				id={ ourServices.services[5].anchor }
			>
				<Col 
					xs={{ span: 12, order: 1 }}
					lg={{ span: 7, order: 1 }}
				>
					<div className="separator"></div>
					<h3>
						{ ourServices.services[5].h3 }
					</h3>

					{ parse(`
						${ ourServices.services[5].txt }
					`) }

				</Col>
				<Col 
					xs={{ span: 12, order: 2 }}
					lg={{ span: 5, order: 2 }}
					className={ styles.img }
				>

					<Image 
						src={`/assets/services/${ourServices.services[5].img}`}
						alt={ ourServices.services[5].h3 }
						width={1200}
						height={675}
					/>

				</Col>
			</Row> */}

		</Container>
	</Container>
	)
}