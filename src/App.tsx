import MainLayout from "./components/layout/MainLayout";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { darkMode } = useAppSelector((store) => store.theme);
  return (
    <div
      className={` min-h-screen w-full ${
        darkMode ? "bg-black text-white" : ""
      }`}
    >
      <MainLayout />
    </div>
  );
}

export default App;
