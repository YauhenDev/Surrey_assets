import Head from 'next/head'
import Image from 'next/image'
import {Container, Row, Col } from 'react-bootstrap'

import IndexHeader from '@containers/indexHeader/IndexHeader'
import OurTeam from '@containers/ourTeam/OurTeam'
import OurPartners from '@containers/ourPartners/OurPartners'

export default function Home({
	state,
	widthDevice,
}) {

	const { 
		seoTitle, 
		seoDescription, 
		indexHeader
	} = state.mainPages[0]

	//debugger
	return (
	<>
		<Head>
			<title>{ seoTitle }</title>
			<meta name="description" 		content={ seoDescription } />
			<meta property="og:title"		content={ seoTitle } />
			<meta property="og:description"	content={ seoDescription } />
		</Head>

		<IndexHeader 
			widthDevice={ widthDevice }
			//nameCompany={ state.mainAttr.nameCompany }
			indexHeader={ indexHeader }
		/>

		<Container as="section" fluid="xxl">
			<Row>
				<Col>
					<div className="separator"></div>
					<h2>
						We have many advantages
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

					{ state.aboutUs.txt2 }

				</Col>
			</Row>
		</Container>

		<OurTeam
			ourTeam={ state.ourTeam }
		/>

		<OurPartners
			ourPartners={ state.ourPartners }
		/>

	</>
	)
}