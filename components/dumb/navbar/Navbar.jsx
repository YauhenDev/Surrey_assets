import { useState, useEffect } from 'react'
import { Container, Row, Col, Nav, Button } from 'react-bootstrap'

import LogoImg from '@components/ui/logo/LogoImg'
import LinkLogo from '@components/ui/logo/LinkLogo'
import LinksMenu from '@components/dumb/menu/LinksMenu'
import ToggleLanguage from '@components/dumb/language/ToggleLanguage'

import styles from './Navbar.module.scss'

export default function Navbar({ 
	nameCompany,
	indexLinksBlock,
	mainPages,
}) {

	// Добавляем DATA атрбут для меню при скроле
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY >64);
		});
	}, []);

	const [isNavCollapsed, setIsNavCollapsed] = useState(true);
	const handleNavClose = () => setIsNavCollapsed(true); 				// Всегда фон прозрачный, меню закрыто
	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed); // Делать фон наоборот. Для бургера меню.
	

	//debugger;
	return (
	<Nav 
		as="nav" 
		className={`${ styles.menu } navbar-expand-lg fixed-top`}
		data-bg-alpha={ isNavCollapsed }
		data-menuscroll={scroll ? "true" : "false"}
	>
		<Container fluid="xxl">
			<Row>
				<Col 
					xs="auto"
					className={`${ styles.brand } navbar-brand d-flex align-items-center`}
					onClick={ handleNavClose }
				>

					<LinkLogo 
						path="/"
						nameCompany={ nameCompany }
					/>
					
				</Col>

				<Col
					className={`${ styles.togglerCol } navbar-toggler`}
				>

					<ToggleLanguage />

					<Button 
						className={ styles.togglerNavbar }
						variant="link"
						type="button" 
						data-bs-toggle="collapse" 
						data-bs-target="#navbarMenu" 
						aria-controls="navbarMenu" 
						aria-label="Toggle menu"
						aria-expanded={!isNavCollapsed ? true : false} 
						onClick={ handleNavCollapse }
					>
						<div className={ styles.hamburger }>
							<span className={ styles.line1 }></span>
							<span className={ styles.line2 }></span>
							<span className={ styles.line3 }></span>
							<span className={ styles.line4 }></span>
							<span className={ styles.line5 }></span>
						</div>
					</Button>

				</Col>

				<Col 
					lg="auto"
					className={`${ styles.collapse } ${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
					id="navbarMenu"
					//onClick={ handleNavCollapse } 
				>

					<div 
						className={`${ styles.bgLogo } d-md-block d-lg-none`}
						onClick={ handleNavClose }
					>
						<LogoImg />
					</div>


					<LinksMenu 
						indexLinksBlock={ indexLinksBlock }
						mainPages={ mainPages }
						handleNavClose={ handleNavClose }
					/>

					<div 
						className="d-none d-lg-block"
					>
						<ToggleLanguage />
					</div>

				</Col>

			</Row>
		</Container>
	</Nav>	
	)
}