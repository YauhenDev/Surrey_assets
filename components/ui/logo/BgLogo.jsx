import LogoImg from './LogoImg'

import styles from './BgLogo.module.scss'

export default function BgLogo() {
	return (
	<div 
		className={ styles.bgLogo }
	>
		<LogoImg />
	</div>
	)
}