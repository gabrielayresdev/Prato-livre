import styles from "./App.module.sass";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className={styles.app}>
      <Menu />
    </div>
  );
}

export default App;
