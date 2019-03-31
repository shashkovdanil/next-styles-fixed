import Link from 'next/link'
import Footer from '../components/footer'
import styles from '../styles/b.sss'

export default () => (
  <div className={styles.b}>
    <Link prefetch href="/a">
      <a>a</a>
    </Link>
    <Footer />
  </div>
)
