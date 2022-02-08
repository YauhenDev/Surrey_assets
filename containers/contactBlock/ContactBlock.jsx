import Link from 'next/link'
import Image from 'next/image'

import {Container, Row, Col } from 'react-bootstrap'

import Phone from '@components/dumb/phone/Phone'

import styles from './ContactBlock.module.scss'

export default function ContactBlock({ 
	mainAttr,
	contacts
}) {


	//debugger;
	return (
	<Container as="section" fluid="xxl">
			<Row>
				<Col>
					<div className="separator"></div>
					<h2>
						{ contacts.h2 }
					</h2>

				</Col>
			</Row>
			<Row>
				<Col 
					xs={12}
					lg={5}
					className={ styles.map }
				>

					<h3>
						{ mainAttr.ogNameCompany }
					</h3>

						<div className="separator"></div>

					<p>
						{ mainAttr.addrCompany }
					</p>
					<p>
						<Phone 
							phone={ mainAttr.phoneCompany }
						/>
					</p>

					<div className={ styles.methods }>
						{ contacts.methods.map( (p, i) => (
							<Link
								href={ p.link }
								key={ i } 
							>
								<a
									target="_blank"
									title={ p.alt }
									rel="nofollow"
									className={`${p.sIco} bs-0`}
								>
									<Image 
										src={`/assets/ico-sc/${p.ico}`}
										alt={ p.alt }
										width={32}
										height={32}
										
									/>
								</a>
							</Link>
						))}
					</div>


				</Col>
				<Col 
					xs={12}
					lg={7}
					className={ styles.map }
				>

					<iframe src="https://www.google.com/maps/d/embed?mid=1usJCuHsaWKytNRGVf6znrgcWi21bppD_&ehbc=2E312F"></iframe>

				</Col>
			</Row>
	</Container>
	)
}