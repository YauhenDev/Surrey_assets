import Image from 'next/image'
import Link from 'next/link'

import {Container, Row, Col } from 'react-bootstrap'

import styles from './IndexWe.module.scss'

export default function IndexWe({ 
	indexWe,
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

					<div>
						<Link
							href="/services"
						>
							<a
								className="btn btn-lg btn-warning m-2 bs-0" 
							>
								Banking instruments
							</a>
						</Link>
					</div>
					<div>
						<Link
							href="/services"
						>
							<a
								className="btn btn-lg btn-warning m-2 bs-0" 
							>
								Oil and Gas sector
							</a>
						</Link>
					</div>
					<div>
						<Link
							href="/services"
						>
							<a
								className="btn btn-lg btn-warning m-2 bs-0" 
							>
								Development sector
							</a>
						</Link>
					</div>

				</Col>
			</Row>
		</Container>
	)
}