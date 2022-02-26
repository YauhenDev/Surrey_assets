import { useRouter } from 'next/router'
import Head from 'next/head'

import {Container, Row, Col } from 'react-bootstrap'

import InnerHeader from '@containers/innerHeader/InnerHeader'
import ContactBlock from '@containers/contactBlock/ContactBlock'
//import ContactForm from '@containers/contactForm/ContactForm'

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

		<ContactBlock 
			contacts={ state.contacts }
			mainAttr={ state.mainAttr }
		/>

		{/* <ContactForm

		/>
 */}
	</>
	)
}