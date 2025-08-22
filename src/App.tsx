import FirstForm from "./lib/Forms/FirstForm";

function App() {
  return (
    <>
      <header className="flex flex-col gap-4 text-center py-12 bg-slate-900">
        <h1 className="text-4xl text-emerald-400 font-black">Formageddon</h1>
        <p className="text-xl text-yellow-200">
          Demonstrate form and reusable components
        </p>
      </header>
      <FirstForm />
      <footer>
        <div className="text-center py-6">
          <p className="text-emerald-800">Utviklet med React + TailwindCss</p>
          <a
            className="text-emerald-500 hover:text-blue-700 font-mono"
            href="https://github.com/mariusrundereim"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marius Rundereim
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
