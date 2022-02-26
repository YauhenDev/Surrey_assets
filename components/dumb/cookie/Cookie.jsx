import Link from 'next/link'
import CookieConsent from 'react-cookie-consent'

import styles from './Cookie.module.scss'

export default function Cookie({ 
	cookie
}) {

	//debugger; 
	return (
	<CookieConsent
		debug={true}
		location="bottom"
		buttonText={ cookie.textBtn }
		//overlay={true}
		cookieName="surreyAssetsPrivacyPolicy"
		//style={{ background: "#2B373B" }}
  		//buttonStyle={{ backgroundColor: "#FFB400", color: "#181c32", fontSize: "12px" }}
		containerClasses={ styles.container }		// контейнер
		contentClasses={ styles.content }			// блок с текстом
		buttonWrapperClasses={ styles.btnBlock }	// блок с кнопкой
		buttonClasses={ styles.btn }				// кнопка
	>
		{ cookie.textPre } {' '}
		<Link
			href={ cookie.link }
			locale="en"
		>
			<a>
				{ cookie.textLink }
			</a>
		</Link>
	</CookieConsent>
	)
}