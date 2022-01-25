import Head from 'next/head'

import InnerHeader from "@containers/innerHeader/InnerHeader"

export default function ForInvestmentManagers({
	state
}) {

	const i = 3
	const { 
		titleLink,
		seoTitle, 
		seoDescription, 
	} = state.mainPages[i]

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

		< br />< br />< br />< br />
		For Investment Managers< br />

	</>
	)
}