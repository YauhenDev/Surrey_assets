import { useState } from 'react'
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
	const svgBoxMobile = "0 0 90 40"
	const xSurreyMobile  = 3
	const ySurreyMobile  = 16
	const xAssetsMobile  = 6
	const yAssetsMobile  = 33

	const [isMobile, setIsMobile] = useState(widthDevice);
	const ismobile = widthDevice < 576;
	if (ismobile !== isMobile) setIsMobile(ismobile);

	//debugger
	return (
	<svg className={ styles.intro } viewBox={isMobile ? svgBoxMobile : svgBox }>
		<text 
			textAnchor="start" 
			x={isMobile ? xSurreyMobile : xSurrey }
			y={isMobile ? ySurreyMobile : ySurrey }
			className={ styles.textStroke } 
			clipPath="url(#surrey)">
				SURREY
		</text>
		<text 
			textAnchor="start" 
			x={isMobile ? xAssetsMobile : xAssets }
			y={isMobile ? yAssetsMobile : yAssets }
			className={ styles.textStroke } 
			clipPath="url(#assets)"
		>
			ASSETS
		</text>
		
		<text 
			textAnchor="start" 
			x={isMobile ? xSurreyMobile : xSurrey }
			y={isMobile ? ySurreyMobile : ySurrey }
			className={`${ styles.textStroke } ${ styles.textStrokeNext }`} 
			clipPath="url(#surrey)"
		>
			SURREY
		</text>
		<text 
			textAnchor="start" 
			x={isMobile ? xAssetsMobile : xAssets }
			y={isMobile ? yAssetsMobile : yAssets }
			className={`${ styles.textStroke } ${ styles.textStrokeNext }`} 
			clipPath="url(#assets)"
		>
			ASSETS
		</text>
		
		<defs>
			<clipPath id="surrey">
				<text 
					textAnchor="start" 
					x={isMobile ? xSurreyMobile : xSurrey }
					y={isMobile ? ySurreyMobile : ySurrey }
				>
					SURREY
				</text>
			</clipPath>
			<clipPath id="assets">
				<text 
					textAnchor="start" 
					x={isMobile ? xAssetsMobile : xAssets }
					y={isMobile ? yAssetsMobile : yAssets }
				>
					ASSETS
				</text>
			</clipPath>
		</defs>
	</svg>
	)
}