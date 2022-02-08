import {Container, Row, Col } from 'react-bootstrap'

import styles from './ContactBlock.module.scss'

export default function ContactBlock({ 
	contacts
}) {


	//debugger;
	return (
	<Container as="section" fluid="xxl">
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
					lg={6}
					className={ styles.map }
				>



				</Col>
				<Col 
					xs={12}
					lg={6}
					className={ styles.map }
				>

					<iframe src="https://www.google.com/maps/d/embed?mid=1usJCuHsaWKytNRGVf6znrgcWi21bppD_&ehbc=2E312F"></iframe>

				</Col>
			</Row>
	</Container>
	)
}