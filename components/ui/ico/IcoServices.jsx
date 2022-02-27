export default function IcoServices({ 
	ico
}) {

	if (ico == 'bank') {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<path d="M496 448h-16v-40c0-13.255-10.745-24-24-24h-40V208h-32v176h-64V208h-32v176h-64V208h-32v176h-64V208H96v176H56c-13.255 0-24 10.745-24 24v40H16c-8.837 0-16 7.163-16 16v8a8 8 0 0 0 8 8h496a8 8 0 0 0 8-8v-8c0-8.837-7.163-16-16-16zM64 416h384v32H64v-32zm440.267-280L271.179 34.463a48.004 48.004 0 0 0-30.358 0L7.733 136A11.999 11.999 0 0 0 0 147.216V156c0 6.627 5.373 12 12 12h20v12c0 6.627 5.373 12 12 12h424c6.627 0 12-5.373 12-12v-12h20c6.627 0 12-5.373 12-12v-8.784c0-4.982-3.077-9.445-7.733-11.216zM448 160H64v-13.606l187.943-81.871a16.004 16.004 0 0 1 8.114 0L448 146.394V160z"/>
			</svg>
		)
	} 
	else if (ico == 'oil') {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
				<path d="M629.8 160.31L416 224l-50.49-25.24a64.07 64.07 0 0 0-28.62-6.76H272v-64h72c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H168c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h72v64h-64v-.02L37.72 166.84C16.54 162.98 0 179.92 0 198.33v94.95c0 15.46 11.06 28.72 26.28 31.48L96 337.44V384c0 17.67 14.33 32 32 32h274.63c8.55 0 16.75-3.42 22.76-9.51l212.26-214.75c1.5-1.5 2.34-3.54 2.34-5.66V168c.01-5.74-5.48-9.03-10.19-7.69zM96 304.91l-64-11.64.04-94.94L96 209.96v94.95zM402.63 384H128V224h208.89c4.97 0 9.87 1.16 14.31 3.38l56.15 28.07c3.64 1.82 7.83 2.18 11.72 1.02l155.35-46.28L402.63 384zm176.21-89.09C568.38 310.06 544 347.53 544 367.98c0 26.47 21.53 48 48 48s48-21.53 48-48c0-20.45-24.38-57.92-34.84-73.08-5.94-8.65-20.38-8.65-26.32.01zM592 383.98c-8.81 0-16-7.17-16-15.98.12-4.89 6.78-18.83 16-34.34 9.22 15.52 15.88 29.45 16 34.33 0 8.82-7.19 15.99-16 15.99z"/>
			</svg>
		)
	} 
	else if  (ico == 'development') {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
				<path d="M192 107v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12zm116-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-128 96h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm128 0h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-128 96h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm128 0h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm140 205v20H0v-20c0-6.627 5.373-12 12-12h20V24C32 10.745 42.745 0 56 0h336c13.255 0 24 10.745 24 24v456h20c6.627 0 12 5.373 12 12zm-64-12V32H64v448h128v-85c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v85h128z"/>
			</svg>
		)
	}
	else if  (ico == 'management') {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
				<path d="M256.7 135.7l56.4 16.1c8.8 2.5 14.9 10.6 14.9 19.7 0 11.3-9.2 20.5-20.5 20.5h-36.9c-8.2 0-16.1-2.6-22.6-7.3-3-2.2-7.2-1.5-9.8 1.2l-11.4 11.4c-3.5 3.5-2.9 9.2 1 12.2 12.3 9.4 27.2 14.5 42.9 14.5h1.4v24c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-24h1.4c22.8 0 44.3-13.6 51.7-35.2 10.1-29.6-7.3-59.8-35.1-67.8L263 104.1c-8.8-2.5-14.9-10.6-14.9-19.7 0-11.3 9.2-20.5 20.5-20.5h36.9c8.2 0 16.1 2.6 22.6 7.3 3 2.2 7.2 1.5 9.8-1.2l11.4-11.4c3.5-3.5 2.9-9.2-1-12.2C336 37.1 321.1 32 305.4 32H304V8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h-3.5c-30.6 0-55.1 26.3-52.2 57.5 2 22.1 19 40.1 40.4 46.2zm301.6 197.9c-19.7-17.7-49.4-17.6-69.9-1.2l-61.6 49.3c-1.9 1.5-4.2 2.3-6.7 2.3h-41.6c4.6-9.6 6.5-20.7 4.8-32.3-4-27.9-29.6-47.7-57.8-47.7H181.3c-20.8 0-41 6.7-57.6 19.2L85.3 352H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h88l46.9-35.2c11.1-8.3 24.6-12.8 38.4-12.8H328c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88c-8.8 0-16 7.2-16 16s7.2 16 16 16h180.2c9.7 0 19.1-3.3 26.7-9.3l61.6-49.2c7.7-6.1 20-7.6 28.4 0 10.1 9.1 9.3 24.5-.9 32.6l-100.8 80.7c-7.6 6.1-17 9.3-26.7 9.3H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h400.5c17 0 33.4-5.8 46.6-16.4L556 415c12.2-9.8 19.5-24.4 20-40s-6-30.8-17.7-41.4z"/>
			</svg>
		)
	}
	else if  (ico == 'metals') {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<path d="M256 64C114.67 64 0 128.44 0 208v112c0 70.72 114.67 128 256 128s256-57.28 256-128V208c0-79.56-114.67-144-256-144zM64 366.61C43.69 352 32 335.68 32 320v-42.34A183.65 183.65 0 0 0 64 303zm80 35.32A306.25 306.25 0 0 1 96 385v-64.69a327.39 327.39 0 0 0 48 17zm96 13.68a450 450 0 0 1-64-6.61v-64.27a442.1 442.1 0 0 0 64 6.53zm96-6.61a450 450 0 0 1-64 6.64v-64.38a442.1 442.1 0 0 0 64-6.53zm80-24a306.25 306.25 0 0 1-48 16.9v-64.6a327.39 327.39 0 0 0 48-17zm64-65c0 15.68-11.69 32-32 46.61V303a183.65 183.65 0 0 0 32-25.37zm-224 0c-132 0-224-59-224-112S124 96 256 96s224 59 224 112-92 112-224 112z"/>
			</svg>
		)
	}
}