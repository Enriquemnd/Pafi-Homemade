import { Logo } from '../Logo/Logo';
import styles from './Navbar.module.css';
import CartIcon from '../../icons/Cart';

export const Navbar = (props) => {
  const toggleCartState = props.toggleCartState;
  return (
    <div className={styles.container}>
      <Logo />
      <div onClick={toggleCartState}>
        <CartIcon />
      </div>
    </div>
  )
}