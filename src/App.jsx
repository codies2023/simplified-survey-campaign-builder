import { SurveyProvider } from "./context/SurveyContext";
import Header from "./components/layout/Header";
import BuilderLayout from "./components/layout/BuilderLayout";
export default function App() {
  return (
    <SurveyProvider>
      <Header />
      <BuilderLayout />
    </SurveyProvider>
  );
}
