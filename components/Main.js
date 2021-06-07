import classes from './Main.module.css'
import { Links} from '../components/Links'
import { Headline } from '../components/Headline'

export function Main(props) {
  return (
    <main className={classes.main}>
      <Headline page="index">
      {<code className={classes.props}>pages/{props.page}.js</code>}
      </Headline>
      <Links />
    </main>
  );
}
