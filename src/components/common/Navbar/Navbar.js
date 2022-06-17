import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Menu />
    </div>
  )
}