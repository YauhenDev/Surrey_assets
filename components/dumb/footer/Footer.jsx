import Link from 'next/link'
import {Container, Row, Col } from 'react-bootstrap'

import LinkLogo from '@components/ui/logo/LinkLogo'
import ActiveLink  from '@components/ui/links/ActiveLink'
import Phone from '../phone/Phone'

import styles from './Footer.module.scss'

const thisYear = new Date();

export default function Footer({ 
	mainAttr,
	mainPages,
	footer,
	privacyPolicy
}) {

	const { 
		nameCompany,
		ogNameCompany,
		phoneCompany,
		emailCompany,
		addrCompany
	} = mainAttr

	const {
		copyright,
		official,
		companyBlockName,
		investBlockName,
		contactsBlockName,
		companyTxt
	} = footer

	//Фильтруем mainPages
	//const pagesOnlyInvest = mainPages.filter(p => p.invest)
	const pagesOnlyCompany = mainPages.filter(p => !p.invest)

	//debugger; 
	return (
	<Container 
		fluid
		as="footer"
		className={ styles.block }
	>
		<Container 
			fluid="xxl" 
			className={ styles.wrapper }
		>
			<Row>
				<Col 
					// md={ 12 }
					// lg={ 6 } 
					// xl={ 4 }
					md={ 12 }
					lg={ 8 } 
					xl={ 6 }
				>

					<LinkLogo 
						path="/"
						nameCompany={ nameCompany }
					/>

					<p>
						{ companyTxt }
					</p>
				</Col>
				<Col 
					// md={ 6 }
					// lg={ 3 } 
					// xl={ 2 }
					md={ 12 }
					lg={ 4 } 
					xl={ 3 }
				>
					<h4>
						{ companyBlockName }:
					</h4>
					<ul>
						{ pagesOnlyCompany.map( (p, i) => (
							<li
								key={ i } 
							>
								<ActiveLink 
									fuzzy
									href={ p.pathLink }
								>
									<a 
										title={ p.titleLink }
										className={ styles.sidebarLink }
									>
										{ p.nameLink }
									</a>
								</ActiveLink>
							</li>
						))}
					</ul>
				</Col>
				{/* <Col 
					md={ 6 }
					lg={ 3 } 
					xl={ 3 }
				>
					<h4>
						{ investBlockName }:
					</h4>
					<ul>
						{ pagesOnlyInvest.map( (p, i) => (
							<li
								key={ i } 
							>
								<ActiveLink 
									fuzzy
									href={ p.pathLink }
								>
									<a 
										title={ p.titleLink }
										className={ styles.sidebarLink }
									>
										{ p.nameLink }
									</a>
								</ActiveLink>
							</li>
						))}
					</ul>
				</Col> */}
				<Col 
					lg={ 12 }
					xl={ 3 }
				>
					<h4>
						{ contactsBlockName }:
					</h4>
					<address>
						<ul>
							<li className={ styles.phone }>
								<Phone 
									phone={ phoneCompany }
								/>
							</li>
							<li>
								<a href={`mailto:${ emailCompany }`}>
									{ emailCompany }
								</a>
							</li>
							<li>
								<span>
									{ addrCompany }
								</span>
							</li>
						</ul>
					</address>
				</Col>
			</Row>
			<hr />
			<Row>
				<Col xs={ 12 } sm={ 6 } className={`${ styles.copyright } d-flex`}>
					<small>
						© 2011 — <span>
							{ thisYear.getFullYear() }
						</span> { copyright }<br /> 
						{ official } — <Link 
								href="/"
							>
								<a 
									title={ ogNameCompany }
								>
									{ ogNameCompany }
								</a>
							</Link>
					</small>
				</Col>
				<Col xs={ 12 } sm={ 6 } className={`${ styles.licenses } d-flex`}>
					<small>
						<Link 
							href={ privacyPolicy.pathLink }
							locale="en"
						>
							<a 
								title={ privacyPolicy.nameLink }
							>
								{ privacyPolicy.nameLink }
							</a>
						</Link>
					</small>
				</Col>
			</Row>
		</Container>
	</Container>
	)
}