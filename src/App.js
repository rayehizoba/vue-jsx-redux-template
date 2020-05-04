import PersistGate from "./components/PersistGate";
import {persistor} from "./configureStore";
import RouterComponent from "./router";

export default {
  /**
   *
   * @param h
   * @returns {*}
   */
  render (h) {
    return (
      <div id="app">
        <PersistGate loading={null} persistor={persistor}>
          <RouterComponent />
        </PersistGate>
      </div>
    );
  }
}
