//import { useRouter } from 'next/router'
import Head from 'next/head'

import InnerHeader from "@containers/innerHeader/InnerHeader"
import ServicesBlock from '@containers/servicesBlock/ServicesBlock'

export default function About({
	state
}) {

	//const { asPath } = useRouter()
	//const newState = state.mainPages.filter(p => p.pathLink == asPath)
	//const newState = state.mainPages.indexOf(p => p.pathLink == asPath)
	const { 
		titleLink,
		seoTitle, 
		seoDescription, 
	} = state.mainPages[2]


	// 	if (state.mainPages.indexOf(p => p.pathLink) == asPath) {
	// 		state.mainPages.filter(p => p.pathLink == asPath)
	// 	} 
	// }

	//debugger;
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

		<ServicesBlock 
			ourServices={ state.ourServices }
		/>

	</>
	)
}