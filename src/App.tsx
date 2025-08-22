import Typography from "./components/ui/Typography";
import FirstForm from "./lib/Forms/FirstForm";

function App() {
  return (
    <>
      <header className="flex flex-col gap-4 text-center py-12 bg-slate-900">
        <Typography
          variant="heading"
          color="text-emerald-400"
          fontSize="text-4xl"
          fontWeight="font-bold"
        >
          Formageddon
        </Typography>
        <Typography variant="paragraph" color="text-white" fontSize="text-xl">
          Demonstrate form and reusable components
        </Typography>
      </header>
      <section className="bg-slate-900  space-y-8 py-8">
        <FirstForm />
      </section>
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
