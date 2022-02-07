import Image from 'next/image'
import { Card } from 'react-bootstrap'

import styles from './OurTeam.module.scss'

export default function Person({ 
	name,
	position,
	place,
	photo,
	contact
}) {

	//debugger;
	return (
	<Card 
		className={`${styles.cardPerson} h-100`}
	>
		<Image 
			src={ photo }
			alt={ name }
			width={500}
			height={745}
			className="card-img-top"
		/>
		<Card.Body>
			<Card.Text 
				className={ styles.text } 
				as="div"
			>

			<h3>
				{ name }
			</h3>

			{ position }<br />
			{ place }<br />

			</Card.Text>
		</Card.Body>
		<Card.Footer 
			className={ styles.footer } 
		>
			{ contact }
		</Card.Footer>
	</Card>
	)
}