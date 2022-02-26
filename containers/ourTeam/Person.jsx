import Link from 'next/link'
import Image from 'next/image'
import { Card } from 'react-bootstrap'

import styles from './OurTeam.module.scss'

export default function Person({ 
	name,
	position,
	place,
	photo,
	link,
	socialIco,
	socialNetwork
}) {

	//debugger;
	return (
	<Card 
		className={`${styles.cardPerson} h-100`}
	>
		<Image 
			src={ photo }
			alt={ name }
			width={409}
			height={610}
			className={`${styles.img} card-img-top`}
		/>
		<Card.Body className={ styles.body }>
			<Card.Text 
				className={ styles.text } 
				as="div"
			>

			<h3>
				{ name }
			</h3>

			<p>
				{ position }
			</p>
			<p>
				{ place }
			</p>

			</Card.Text>
		</Card.Body>
		{/* <Card.Footer 
			className={`${ styles.footer } pb-0`}
		>
			<Link
				href={link}
			>
				<a
					className="d-inline-flex bs-0" 
					target="_blank"
					rel="nofollow"
				>
					<Image 
						src={socialNetwork}
						alt={ name }
						width={32}
						height={32}
						className={socialIco}
					/>
				</a>
			</Link>
		</Card.Footer> */}
	</Card>
	)
}