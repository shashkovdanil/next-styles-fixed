import Link from 'next/link'
import Header from '../components/header'
import styles from '../styles/a.sss'

export default () => (
  <div className={styles.a}>
    <Header />
    <Link prefetch href="/">
      <a>index</a>
    </Link>
  </div>
)
