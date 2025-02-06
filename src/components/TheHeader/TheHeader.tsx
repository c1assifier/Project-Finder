import { ThemeSwitcher } from 'components/ThemeSwitcher'
import styles from './TheHeader.module.scss';


export const TheHeader = () => (
  <div className ={styles.header} data-testid="TheHeader">
    <div className = {styles.logo}>
      definder
    </div>
    <ThemeSwitcher />
  </div>
);
