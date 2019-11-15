import styles from './index.css'
import { div } from '../../lib/dom'

export default function header() {
  return div(
    { className: styles.wrapp },
    'somehting',
    'something else'
  )
}