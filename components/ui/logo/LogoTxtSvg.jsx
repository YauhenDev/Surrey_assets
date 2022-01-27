import { useState, useEffect } from 'react'
import styles from './LogoTxtSvg.module.scss'

export default function LogoTxtSvg({ 
	widthDevice
}) {

	// PC
	const svgBox = "0 0 163 19"
	const xSurrey = 0
	const ySurrey = 16
	const xAssets = 90
	const yAssets = ySurrey

	// MOBILE
	// const svgBox = "0 0 90 40"
	// const xSurrey = 3
	// const ySurrey = 16
	// const xAssets = 6
	// const yAssets = 33


	// const [isMobile, setIsMobile] = useState(widthDevice);
	// const ismobile = widthDevice < 576;
	// if (ismobile !== isMobile) setIsMobile(ismobile);

	// useEffect(() => {
	// 	function tglMenu() {
	// 		if (ismobile) {
	// 			console.log("mobile")
		
	// 			const svgBox = "0 0 90 40"
	// 			const xSurrey = 3
	// 			const ySurrey = 16
	// 			const xAssets = 6
	// 			const yAssets = 33
	// 		} else {
	// 			console.log("pc")
		
	// 			const svgBox = "0 0 163 19"
	// 			const xSurrey = 0
	// 			const ySurrey = 16
	// 			const xAssets = 90
	// 			const yAssets = ySurrey
	// 		}
	// 	}
	// }, []);
	

	//debugger
	return (
	<svg className={ styles.intro } viewBox={ svgBox }>
		<text textAnchor="start" x={ xSurrey } y={ ySurrey } className={ styles.textStroke } clipPath="url(#surrey)">SURREY</text>
		<text textAnchor="start" x={ xAssets } y={ yAssets } className={ styles.textStroke } clipPath="url(#assets)">ASSETS</text>
		
		<text textAnchor="start" x={ xSurrey } y={ ySurrey } className={`${ styles.textStroke } ${ styles.textStrokeNext }`} clipPath="url(#surrey)">SURREY</text>
		<text textAnchor="start" x={ xAssets } y={ yAssets } className={`${ styles.textStroke } ${ styles.textStrokeNext }`} clipPath="url(#assets)">ASSETS</text>
		
		<defs>
			<clipPath id="surrey">
				<text textAnchor="start" x={ xSurrey } y={ ySurrey }>SURREY</text>
			</clipPath>
			<clipPath id="assets">
				<text textAnchor="start" x={ xAssets } y={ yAssets }>ASSETS</text>
			</clipPath>
		</defs>
	</svg>
	)
}