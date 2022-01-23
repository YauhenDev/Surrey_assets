import Head from 'next/head'

export default function ForInvestmentManagers({
	state
}) {

	const i = 1
	const { 
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

		< br />< br />< br />< br />
		For Investment Managers< br />

	</>
	)
}