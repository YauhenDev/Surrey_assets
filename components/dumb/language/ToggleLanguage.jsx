import Link from 'next/link'
import { useRouter } from 'next/router'

import RuSVG from '@components/ui/ico/flags/RuSVG'
import EnSVG from '@components/ui/ico/flags/EnSVG'

import styles from './ToggleLanguage.module.scss'

export default function ToggleLanguage() {

	const { asPath } = useRouter();
	const router = useRouter();
	const lng = router.locale === 'ru' ? "RU" : "EN"

	return (
	<ul className={`${ styles.toggleLng } navbar-nav`}>
		<li>
			<a 
				className="nav-link dropdown-toggle d-block bs-0" 
				href="#" 
				id="dropdownLng" 
				data-bs-toggle="dropdown" 
				aria-expanded="false"
			>
				{ lng } 
			</a>
			<div 
				className={`${ styles.dropDown } dropdown-menu`}
				aria-labelledby="dropdownLng"
			>
				<Link href={ asPath } locale="ru">
					<a className="dropdown-item">
						<RuSVG />
						<span>
							RU
						</span>
					</a>
				</Link>
				<Link href={ asPath } locale="en">
					<a className="dropdown-item">
						<EnSVG />
						<span>
							EN
						</span>
					</a>
				</Link>
			</div>
		</li>
	</ul>
	)
}