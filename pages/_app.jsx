import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Layout from '@components/layouts/Layout'
import InnerLayout from '@components/layouts/InnerLayout'
import ContactsModal from '@components/dumb/modal/ContactsModal'

import { en } from '@locales/en'
import { ru } from '@locales/ru'

import '@styles/app.scss'

export default function MyApp({ Component, pageProps }) {

	// подключаем используемые JS скрипты
	useEffect(() => {
		import("bootstrap/js/dist/dropdown") // подключаем только Dropdown bootstrap JS
	}, []);

	// Подключаем state в зависимости от языка
	const router = useRouter()
	const state = router.locale === 'ru' ? ru : en

	//Постоянно смотрим за разрешением 
	// const useDeviceSize = () => {

	// 	const [widthDevice, setWidthDevice] = useState(0)

	// 	const handleWindowResize = () => {
	// 		setWidthDevice(window.innerWidth);
	// 	}

	// 	useEffect(() => {
	// 		handleWindowResize();
	// 		window.addEventListener('resize', handleWindowResize);
	// 		return () => window.removeEventListener('resize', handleWindowResize);
	// 	}, []);
	// 	return widthDevice

	// }
	// const widthDevice = useDeviceSize();

	//Состояние модального окна
	const [modalShow, setmodalShow] = useState(false);

	return (
		// Основной шаблон Layout
		<Layout
			state={ state }
			setmodalShow={setmodalShow}
			//widthDevice={ widthDevice }
		>

			{/* Проверка на роут страницы */}
			{ router.pathname == "/" 
			? 
				/* Если "ГЛАВНАЯ" то выводим "ребенка" */
				<Component 
					{...pageProps}
					state={state}
					//widthDevice={ widthDevice }
				/>
			: 
				/* Если "ВНУТРЯНКА" то оборачиваем "ребенка в шаблон InnerLayout: */
				<InnerLayout
					state={ state }
					//widthDevice={ widthDevice }
				>
					<Component 
						{...pageProps}
						state={state}
						//widthDevice={ widthDevice }
					/>
				</InnerLayout>
			}

			{/* МОДАЛЬНОЕ ОКНО ДЛЯ ВСЕГО САЙТА */}
			<ContactsModal	
				modalShow={ modalShow }
				setmodalShow={ setmodalShow }
			/>

		</Layout>
	)
	
}