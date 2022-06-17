import { Logo } from '../Logo/Logo';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  )
}