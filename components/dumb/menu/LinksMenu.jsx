import ActiveLink  from '@components/ui/links/ActiveLink'

import styles from './LinkMenu.module.scss'

export default function LinksMenu({ 
	mainPages
}) {

	//const mainPagesMenu = mainPages.slice(1,2)

	//debugger;
	return (
	<ul 
		className={`${ styles.nav } navbar-nav mx-auto`} 
	>
		{ mainPages.map( (p, i) => (
			<li 
				key={ i } 
				className={`${ styles.item } nav-item`}
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
	)
}