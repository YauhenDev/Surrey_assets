//import { useRouter } from 'next/router'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

import { motion } from "framer-motion"

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
					<motion.a
						className="btn btn-lg btn-warning m-2 bs-0" 
						style={{opacity: 0}}
						initial={{ opacity: 0 }}
						animate={{ scale: [0, 1], }}
						transition={{ duration: 1 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						<span>
							{ indexHeader.buttonName }
						</span>
					</motion.a>
				</Link>
			</Col>
			<Col
				className={ styles.blockRight }
				xs={12}
				lg={6}
			>
				<Link
					href="/"
					locale="en"
				>
					<motion.a
						className="btn btn-lg btn-warning m-2 bs-0"
						style={{opacity: 0}}
						initial={{ opacity: 0 }}
						animate={{ scale: [0, 1], }}
						transition={{ duration: 1.5 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						
							{ indexHeader.buttonPres }
							{ /*lng*/ }
							&nbsp;(EN)

					</motion.a>
				</Link>
			</Col>		
		</Row>
		<Row>
			<Col>
				<motion.p
					className="mx-auto"
					style={{opacity: 0}}
					initial={{ opacity: 0 }}
					animate={{ scale: [0, 1], }}
					transition={{ duration: 1.8 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
				>
					{ indexHeader.txt } 
				</motion.p>
			</Col>
		</Row>
	</Container>
	)
}