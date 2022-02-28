import Head from 'next/head'

import IndexHeader from '@containers/indexHeader/IndexHeader'
import OurTeam from '@containers/ourTeam/OurTeam'
import OurPartners from '@containers/ourPartners/OurPartners'
import IndexWe from '@containers/indexWe/IndexWe'

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

		<IndexWe 
			indexWe={ state.mainPages[0].indexWe }
			indexWeButton={ state.ourServices.services }
			aboutUs={ state.aboutUs }
		/>

		{/* <OurTeam
			ourTeam={ state.ourTeam }
		/> */}

		<OurPartners
			ourPartners={ state.ourPartners }
		/>

	</>
	)
}