import {Container, Row, Col } from 'react-bootstrap'

import styles from './ServicesBlock.module.scss'

export default function ServicesBlock({ 
	ourServices
}) {

	// const { 
	 
	// } = 

	//debugger;
	return (
	<Container as="section" fluid="xxl" className={ styles.block }>
		<Row>
			<Col>
				<div className="separator"></div>
				<h2>
					We have many advantages
				</h2>
				<p>
					This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information.
				</p>
			</Col>
		</Row>
		<Row>
			<Col 
				xs={12}
				sm={6}
			>
				
				service

			</Col>
			<Col 
				xs={12} 
				sm={6}
			>

				service

			</Col>
		</Row>
	</Container>
	)
}