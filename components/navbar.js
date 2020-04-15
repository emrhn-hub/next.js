import Link from 'next/link'
import style from './master-oage.module.css'

function Navigation() {
    return <nav>
        <Link href="../about">
            <a className={style.link}>Hakkında</a>
        </Link>
        <Link href="../index">
            <a > Anasayfa</a>
        </Link>
    </nav>

}
export default Navigation