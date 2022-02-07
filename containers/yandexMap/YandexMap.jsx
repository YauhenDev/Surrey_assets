import { Container, Row, Col } from 'react-bootstrap'

import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps"

const mapState = {
	center: [51.504902, -0.019447],
	zoom: 15
};

import styles from './YandexMap.module.scss'

const YandexMap = () => {

	return (
	<Container fluid className={`${ styles.block } p-0`}>
		<Row className="g-0">
			<Col xs={12}>

				<YMaps>
					<Map 
						state = { mapState }
						width = "100%"
						height = "330px"
					>
						<Placemark
							key= { 0 }
							geometry = { [ 51.504902, -0.019447 ] }
							options = { {
								iconLayout: 'default#image',
								iconImageHref: '/assets/favicon/favicon.svg',
								iconImageSize: [50, 50],
								iconImageOffset: [-25, -25],
							} }
							
						/>
						<ZoomControl options={ { float: 'right' } } />
					</Map>
				</YMaps>
				
			</Col>
		</Row>
	</Container>
	)
}
export default YandexMap