import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <img src="/hero.png" />
    </div>
  );
}
