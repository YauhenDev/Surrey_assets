import Head from 'next/head'


import Navbar from '@components/dumb/navbar/Navbar'

export default function Layout({ 
	children,
	state,
	setmodalShow,
	widthDevice
}) {

	//debugger;
	return (
	<>
	
		<Head>
			<meta name="theme-color" content="#1f2641" />
			<link rel="shortcut icon" href="/assets/favicon/favicon.png" type="image/png" />
			<link rel="icon" href="/assets/favicon/favicon.svg" type="image/svg+xml" />

			<meta property="og:type" content="website" />
			<meta property="og:url" content="" />
			<meta property="og:site_name" content="" />
			{/* <meta property="og:image" content="/assets/img/nado.png" /> */}
		</Head>

		<Navbar
			mainPages={ state.mainPages }
		/>

		{ children }


	</>
	)
}