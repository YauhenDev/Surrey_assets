import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// https://stackoverflow.com/questions/53262263/target-active-link-when-the-route-is-active-in-next-js

import styles from './ActiveLink.module.scss'

export default function ActiveLink({ 
	fuzzy = false, 
	href, 
	children
}) {

	const router = useRouter()
	let className = children.props.className || ''
	//let dataactive = children.props.setAttribute || 'false'
	
	const hrefTokens = href.substr(1).split('/')
	const pathTokens = router.asPath.substr(1).split('/')

	//const sanitizedPath = "/services#banking"
	//const sanitizedPath = router.asPath.split("#")[0].split("?")[0]
	//const sanitizedPath = href.substr(1).indexOf('#')


	let matched = false;
	for (let i = 0; i < hrefTokens.length; i++) {
		if (hrefTokens[i] === pathTokens[i]) {
		//if ((hrefTokens[i] === pathTokens[i]) || (sanitizedPath[i]) === pathTokens[i]) {
			matched = true;
			break;
		}
	}

	//if ((!fuzzy && router.asPath === href ) || ( !fuzzy && router.asPath.indexOf("#") > -1) || (fuzzy && matched)) {
	//if ((!fuzzy && router.asPath === href ) || (fuzzy && matched)) {
	if (fuzzy && matched) {
		//className = `${ className } ${ styles.active }`;
		className = `${ styles.active }`
		//dataactive = 'true'
	}

	return (
		<Link href={href}>
			{/* {React.cloneElement(children, { className, dataactive })} */}
			{React.cloneElement(children, { className })}
		</Link>
	)
}