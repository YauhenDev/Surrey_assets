import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

import styles from './IndexHeader.module.scss'

export default function IndexHeader({ 
	nameCompany,
	indexHeader
	//widthDevice
}) {

	// Определение телефона по сетке bootstrap 5
	// для замены меню bootstrap 5 на offcanvas
	// const [isMobile, setIsMobile] = useState(widthDevice);
	// const ismobile = widthDevice < 992;
	// if (ismobile !== isMobile) setIsMobile(ismobile);

	//debugger;
	return (
	<Container 
		as="header" 
		fluid 
		className={`${ styles.block } p-0`}
	>
		<div className={ styles.skyBlock }>

		</div>
		<div
			className={ styles.city }
		>
		<Image 
				src="/assets/bg-index-header/city_mobile.png" 
				layout="fill"
				objectFit="cover"
       			quality={100}
				priority="false"
				alt="backgroud sky"
				className={ styles.bgcitymobile }
			/>
		<Image 
				src="/assets/bg-index-header/city.png" 
				layout="fill"
				objectFit="cover"
       			quality={100}
				priority="false"
				alt="backgroud sky"
				className={ styles.bgcity }
			/>
		{/* 
		{isMobile ?
			<Image 
				src="/assets/bg-index-header/city_mobile.png" 
				layout="fill"
				objectFit="cover"
       			quality={100}
				priority="false"
				alt="backgroud sky"
			/>
		: 
			<Image 
				src="/assets/bg-index-header/city.png" 
				layout="fill"
				objectFit="cover"
       			quality={100}
				priority="false"
				alt="backgroud sky"
			/>
		} 
		*/}
		</div>

		<div
			className={ styles.title }
		>
			<span 
				className={ styles.titleMain }
			>
				{ nameCompany }
			</span>
		</div>
		
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
							className="btn btn-lg btn-warning m-2" 
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
						href="#"
					>
						<a
							className="btn btn-lg btn-warning m-2"
						>
							<span>
								{ indexHeader.buttonPres }
							</span>
						</a>
					</Link>
				</Col>		
			</Row>
			<Row>
				<Col>
					<p className="mx-auto">
						{ indexHeader.txt }
					</p>
				</Col>
			</Row>
		</Container>
	</Container>
	)
}