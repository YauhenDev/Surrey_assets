import Link from 'next/link'

import LogoImg from './LogoImg'
import LogoTxt from './LogoTxt'

export default function LinkLogo({ 
	path, 
	nameCompany 
}) {

	return (
		<Link 
			href={ path }
		>
			<a 
				title={ nameCompany }
				className="bs-0"
			>

				<LogoImg />
				<LogoTxt />

			</a>
		</Link>
	)
}