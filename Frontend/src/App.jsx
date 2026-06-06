import Dashboard from "./Pages/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen w-full h-full">
      <div class="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#63e_120%)]"></div>
      <Dashboard />;
    </div>
  );
}

export default App;
