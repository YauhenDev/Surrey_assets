import Image from 'next/image'
import {Container, Row, Col } from 'react-bootstrap'
import IndexWeButtons from './IndexWeButtons'

import styles from './IndexWe.module.scss'

export default function IndexWe({ 
	indexWe,
	indexWeButton,
	aboutUs
}) {

	//debugger;
	return (
	<Container as="section" fluid="xxl">
			<Row>
				<Col>
					<div className="separator"></div>
					<h2>
						{ indexWe.h2 }
					</h2>
				</Col>
			</Row>
			<Row>
				<Col 
					xs={12}
					sm={6}
				>

					<Image 
						src="/assets/bn-fon.jpg"
						alt=""
						width={1200}
						height={675}
						quality={98}

					/>

				</Col>
				<Col 
					xs={12} 
					sm={6}
				>

					{ aboutUs.txt2 }

				</Col>
			</Row>
			<Row className="mb-4">
				{indexWeButton.map( (p, i) => (
					<IndexWeButtons 
						key={ i }
						name={ p.name }
						link={ p.link }
						ico={ p.ico }
					/>
				))
				}
			</Row>
		</Container>
	)
}