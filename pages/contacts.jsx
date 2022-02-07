import { useRouter } from 'next/router'
import Head from 'next/head'

import {Container, Row, Col } from 'react-bootstrap'

import InnerHeader from '@containers/innerHeader/InnerHeader'
import YandexMap from '@containers/yandexMap/YandexMap'

export default function Contacts({
	state
}) {

	const { asPath } = useRouter()
	const newState = state.mainPages.filter(p => p.pathLink == asPath)
	const { 
		titleLink,
		seoTitle, 
		seoDescription, 
	} = newState[0]

	//debugger
	return (
	<>
		<Head>
			<title>{ seoTitle }</title>
			<meta name="description" 		content={ seoDescription } />
			<meta property="og:title"		content={ seoTitle } />
			<meta property="og:description"	content={ seoDescription } />
		</Head>

		<InnerHeader 
			h1={ titleLink }
		/>

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
				<Col>



				</Col>
				<Col>

					<YandexMap />

				</Col>
			</Row>
		</Container>
	</>
	)
}