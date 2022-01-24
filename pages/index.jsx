import Head from 'next/head'

import IndexHeader from '@containers/indexHeader/IndexHeader'

export default function Home({
	state,
	//widthDevice,
}) {

	const i = 0
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

		<IndexHeader 
			//widthDevice={ widthDevice }
			nameCompany={ state.mainAttr.nameCompany }
		/>

		index page< br />
		fake blocks index< br />
		fake blocks index< br />
		fake blocks index< br />
		fake blocks index< br />
		fake blocks index< br />
		fake blocks index< br />
		fake blocks index< br />
		fake blocks index< br />
		fake blocks index< br />
		fake blocks index< br />
		fake blocks index< br />
		fake blocks index< br />
		fake blocks index< br />
		fake blocks index< br />

	</>
	)
}