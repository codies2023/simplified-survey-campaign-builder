import { useContext } from "react";
import { SurveyContext } from "../context/SurveyContext";
export const useSurvey = () => {
  const v = useContext(SurveyContext);
  if (!v) throw Error("useSurvey must be used inside SurveyProvider");
  return v;
};
