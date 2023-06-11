import { Provider } from "react-redux";
import { ReactElement } from "react";
import { AppStore } from "../../store/store";

export const renderWithRedux = (component: ReactElement, store: AppStore) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Provider store={store}>{component}</Provider>;
};
