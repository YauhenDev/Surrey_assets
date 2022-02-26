
import { useState } from 'react'

export default function ReadMore({ 
	text
}) {

	const [isReadMore, setIsReadMore] = useState(true)
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore)
	}

	//debugger;
	return (
	<>
		{isReadMore ? text.slice(0, 50) : text}
		<span onClick={toggleReadMore}>
			{isReadMore ? "...read more" : " show less"}
		</span>
	</>
	)
}