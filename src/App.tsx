import styles from "./App.module.sass";
import OrderFood from "./Pages/OrderFood";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className={styles.app}>
      <Menu />
      <OrderFood />
    </div>
  );
}

export default App;
