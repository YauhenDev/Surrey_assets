import {Container, Row, Col } from 'react-bootstrap'

import BgLogo from '@components/ui/logo/BgLogo'
import Person from './Person'

import styles from './OurTeam.module.scss'

export default function Team({ 
	ourTeam
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
						{ ourTeam.h2 }
					</h2>
				</Col>
			</Row>
			<Row className="row row-cols-2 row-cols-lg-4 g-4">
				{ourTeam.person.map( (p, i) => (
					<Col key={ i } className={ styles.person }>
						<Person
							photo={`/assets/team/${p.photo}`}
							name={ p.name }
							position={ p.position }
							place={ p.place }
							link= { p.link }
							socialNetwork={`/assets/ico-sc/${p.socialNetwork}`}
							socialIco={ p.socialIco }
						/>
					</Col>
				))}
			</Row>
		</Container>
	</Container>
	)
}