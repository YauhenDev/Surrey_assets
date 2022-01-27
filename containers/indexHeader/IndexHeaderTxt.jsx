//import { useRouter } from 'next/router'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

import styles from './IndexHeader.module.scss'

export default function IndexHeaderTxt({ 
	indexHeader
}) {

	//const router = useRouter()
	//const lng = router.locale === 'en' ? " (EN)" : " (RU)"

	//debugger;
	return (
	<Container  
		fluid="xxl"
		className={ styles.blockTxt }
	>
		<Row
			className="justify-content-center"
		>
			<Col
				className={ styles.blockLeft }
				xs={12}
				lg={6}
			>
				<Link
					href="/about"
				>
					<a
						className="btn btn-lg btn-warning m-2 bs-0" 
					>
						<span>
							{ indexHeader.buttonName }
						</span>
					</a>
				</Link>
			</Col>
			<Col
				className={ styles.blockRight }
				xs={12}
				lg={6}
			>
				<Link
					href="/#"
					locale="en"
				>
					<a
						className="btn btn-lg btn-warning m-2 bs-0"
					>
						<span>
							{ indexHeader.buttonPres }
							{ /*lng*/ }
							&nbsp;(EN)
						</span>
					</a>
				</Link>
			</Col>		
		</Row>
		<Row>
			<Col>
				<p 
					className="mx-auto"
				>
					{ indexHeader.txt } 
				</p>
			</Col>
		</Row>
	</Container>
	)
}