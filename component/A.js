import Link from "next/link";
import '../styles/A.module.css'

export default function ({name, href, className}) {
    return <Link href = {href}>
        <a className = {className || 'nav-image'}>{name}</a></Link>
}