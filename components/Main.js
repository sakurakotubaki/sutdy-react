import styles from '../styles/Home.module.css'
import { Links} from '../components/Links'
import { Headline } from '../components/Headline'

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page="index">
      {<code className={styles.props}>pages/{props.page}.js</code>}
      </Headline>
      <Links />
    </main>
  );
}
