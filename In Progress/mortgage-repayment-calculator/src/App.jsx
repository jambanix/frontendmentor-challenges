import "./App.css";
import { Calculator } from "./components/Calculator";
import { PageContainer } from "./components/Layout/PageContainer";

function App() {
  return (
    <main>
      <PageContainer>
        <Calculator />
      </PageContainer>
    </main>
  );
}

export default App;
