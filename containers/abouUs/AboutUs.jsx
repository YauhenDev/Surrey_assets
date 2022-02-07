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
				</Col>
			</Row>
			<Row>
				<Col>
					<p>
						{ txt1 }
					</p>
					<p>
						{ txt2 }
					</p>
					<p>
						{ txt3 }
					</p>
					<p>
						{ txtFull }
					</p>
				</Col>
			</Row>
		</Container>
	</Container>
	)
}