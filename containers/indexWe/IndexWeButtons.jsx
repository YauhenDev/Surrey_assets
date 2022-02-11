import Link from 'next/link'
import { Col } from 'react-bootstrap'
import IcoServices from '@components/ui/ico/IcoServices'

import styles from './IndexWe.module.scss'

export default function IndexWeButtons({ 
	name,
	link,
	ico
}) {


	//debugger;
	return (
	<Col 
		xs={12}
		lg={4}
		className="text-center"
	>

		<Link
			href={ link }
		>
			<a
				className="btn btn-lg btn-warning m-2 bs-0" 
			>
				<IcoServices 
					ico={ ico }
				/>
				{ name }
			</a>
		</Link>

	</Col>
	)
}