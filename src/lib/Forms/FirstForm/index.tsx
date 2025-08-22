import CascadingSelect from "../../../components/ui/CascadingSelect";
import Input from "../../../components/ui/Input";
import Typography from "../../../components/ui/Typography";

function FirstForm() {
  const options = [
    { value: "General", label: "General" },
    { value: "Frontend", label: "Frontend" },
    { value: "Backend", label: "Backend" },
    { value: "UIUX", label: "UI/UX" },
  ];

  const subOptionsMap = {
    Frontend: [
      { value: "react", label: "React" },
      { value: "vue", label: "Vue" },
      { value: "angular", label: "Angular" },
    ],
    Backend: [
      { value: "nodejs", label: "Node.js" },
      { value: "python", label: "Python" },
    ],
    UIUX: [
      { value: "Figma", label: "Figma" },
      { value: "AdobeXd", label: "Adobe XD" },
    ],
  };

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 bg-gray-100 min-h-min max-w-7xl mx-auto p-8 rounded-2xl">
        <div className="p-4 sm:p-12">
          <Typography
            variant="heading"
            color="text-emerald-800"
            fontSize="text-3xl"
          >
            Første skjema
          </Typography>
          <ul className="list-disc pl-6 mt-4">
            <li>Skjemaet demonstrerer gjenbrukbare komponenter</li>
            <li>Inkluderer sub-selection for dynamikk av valg</li>
            <li>Styling med TailwindCss</li>
          </ul>
        </div>
        <div className="p-4 sm:p-12">
          <div className="p-8 bg-white rounded-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Input label="Fornavn" placeholder="Ditt navn" />
                <Input label="Etternavn" placeholder="Ditt navn" />
              </div>
              <div>
                <Input label="E-post" placeholder="Din e-post addresse" />
              </div>
              <div>
                <CascadingSelect
                  mainLabel="Velg et område"
                  mainOptions={options}
                  subLabel="Velg et underområde"
                  subOptionsMap={subOptionsMap}
                  onMainChange={(value) => console.log("Main:", value)}
                  onSubChange={(value) => console.log("Sub:", value)}
                />
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send inn
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default FirstForm;
