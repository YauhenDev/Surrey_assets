import {Container, Row, Col } from 'react-bootstrap'

import Person from './Person'
import LogoImg from '@components/ui/logo/LogoImg'

import styles from './OurTeam.module.scss'

export default function Team({ 
	ourTeam
}) {

	//debugger;
	return (
	<Container as="section" fluid className={`${ styles.block } p-0`}>
		<div 
				className={ styles.bgLogo }
			>
				<LogoImg />
		</div>
		<Container fluid="xxl" className={ styles.wrapper }>
			
			<Row>
				<Col>
					<h2>
						{ ourTeam.h2 }
					</h2>
				</Col>
			</Row>
			<Row className="row row-cols-2 row-cols-lg-4 g-4">
				{ourTeam.person.map( (p, i) => (
					<Col key={ i } className={ styles.person }>
						<Person
							name={ p.name }
							position={ p.position }
							place={ p.place }
							contact= { p.contact }
							photo={`/assets/team/${p.photo}`}
						/>
					</Col>
				))}
			</Row>
		</Container>
	</Container>
	)
}