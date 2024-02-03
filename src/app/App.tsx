import Card from "../components/Card/Card";

function App() {
  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more AAAAAAAAAAAA
      </p>
      <Card
        imgSrc="/src/assets/img/komunikcja.svg"
        title="Komunikacja"
        linkPath="/komunikacja"
      />
      <Card
        imgSrc="/src/assets/img/persony.svg"
        title="Persony"
        linkPath="/komunikacja"
      />
    </>
  );
}

export default App;
