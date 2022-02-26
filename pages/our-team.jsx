import { useRouter } from 'next/router'
import Head from 'next/head'

import InnerHeader from "@containers/innerHeader/InnerHeader"
import OurTeam from '@containers/ourTeam/OurTeam'

export default function About({
	state
}) {

	const { asPath } = useRouter()
	const newState = state.mainPages.filter(p => p.pathLink == asPath)
	const { 
		titleLink,
		seoTitle, 
		seoDescription, 
	} = newState[0]

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

		<OurTeam
			ourTeam={ state.ourTeam }
		/>

	</>
	)
}