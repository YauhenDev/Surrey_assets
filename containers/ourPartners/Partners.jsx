import Image from 'next/image'

import Button from 'react-bootstrap/Button'

import styles from './OurPartners.module.scss'

export default function Partners({ 
	name,
	photo,
	linkTo
}) {

	//debugger;
	return (
	<div
		className={styles.partners}
	>
		<Button 
			rel="nofollow"
			href={linkTo}
			target="_blank"
			variant="link"
			className="bs-0"
			//onClick={()=> window.open(linkTo, "_blank")}
		>
			<Image 
				src={ photo }
				alt={ name }
				width={300}
				height={120}
				className="card-img-top"
				priority="eager"
			/>
		</Button>
	</div>
	)
}