import Head from 'next/head'

import Navbar from '@components/dumb/navbar/Navbar'
import Footer from '@components/dumb/footer/Footer'

export default function Layout({ 
	children,
	state,
	//setmodalShow,
	//widthDevice
}) {

	//debugger;
	return (
	<>
	
		<Head>
			<meta name="theme-color" content="#1f2641" />
			<link rel="shortcut icon" href="/assets/favicon/favicon.png" type="image/png" />
			<link rel="icon" href="/assets/favicon/favicon.svg" type="image/svg+xml" />

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://surrey-assets.com/" />
			<meta property="og:site_name" content={ state.mainAttr.nameCompany } />
			{/* <meta property="og:image" content="/assets/img/surrey-assets.png" /> */}
		</Head>

		<Navbar
			mainPages={ state.mainPages }
			nameCompany={ state.mainAttr.nameCompany }
		/>

		{ children }

		<Footer
			mainAttr={ state.mainAttr }
			mainPages={ state.mainPages }
			footer={ state.footer }
			privacyPolicy={ state.privacyPolicy }
		/>

	</>
	)
}