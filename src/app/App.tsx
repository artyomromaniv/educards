import { useAppDispatch, useAppSelector } from "app/hooks";
import { Counter } from "features/counter/Counter";
import { useEffect } from "react";
import { appActions } from "app/app.slice";
import { Register } from "features/auth/Register/Register";
import { Login } from "features/auth/Login/Login";

function App() {
  const isLoading = useAppSelector((state) => state.app.isLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }));
    }, 3000);
  }, []);

  return (
    <div className="App">
      {isLoading && <h1>Loader...</h1>}
      <Register/>
      <Login/>
      <Counter />
    </div>
  );
}

export default App;