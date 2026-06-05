import Dashboard from "./Pages/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen w-full h-full">
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_65%,#63e_100%)]"></div>
      <Dashboard />;
    </div>
  );
}

export default App;
