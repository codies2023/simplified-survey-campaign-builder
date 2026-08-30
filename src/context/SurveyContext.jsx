import { createContext, useReducer } from "react";
import { defaultSurveyData } from "../data/defaultSurveyData";
import { surveyReducer } from "../reducer/surveyReducer";
export const SurveyContext = createContext(null);
export function SurveyProvider({ children }) {
  const [state, dispatch] = useReducer(surveyReducer, defaultSurveyData);
  return (
    <SurveyContext.Provider value={{ state, dispatch }}>
      {children}
    </SurveyContext.Provider>
  );
}
