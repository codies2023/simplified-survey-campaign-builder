import { defaultSurveyData } from "../data/defaultSurveyData";
import { makeQuestion, id } from "../utils/surveyHelpers";

const patch = (obj, path, value) => {
  const keys = path.split(".");
  const out = structuredClone(obj);
  let current = out;

  keys.slice(0, -1).forEach((key) => {
    current = current[key];
  });
  current[keys.at(-1)] = value;
  return out;
};

export function surveyReducer(state, action) {
  switch (action.type) {
    case "UPDATE_SURVEY_PAGE_COUNT": {
      const pageCount = Math.max(1, Number(action.value) || 1);
      let questions = [...state.content.questions];

      while (questions.length < pageCount) {
        questions.push(makeQuestion(questions.length + 1));
      }
      questions = questions.slice(0, pageCount);

      return {
        ...state,
        content: {
          ...state.content,
          numberOfPages: pageCount,
          questions,
        },
        preview: {
          ...state.preview,
          currentQuestion: Math.min(
            state.preview.currentQuestion,
            pageCount - 1,
          ),
          showThankYou: false,
        },
      };
    }
    case "UPDATE_QUESTION":
      return {
        ...state,
        content: {
          ...state.content,
          questions: state.content.questions.map((q) =>
            q.id === action.id ? { ...q, ...action.patch } : q,
          ),
        },
      };
    case "ADD_OPTION":
      return {
        ...state,
        content: {
          ...state.content,
          questions: state.content.questions.map((q) =>
            q.id === action.questionId
              ? {
                  ...q,
                  options: [
                    ...q.options,
                    {
                      id: id("option"),
                      text: `Option ${q.options.length + 1}`,
                    },
                  ],
                }
              : q,
          ),
        },
      };
    case "DELETE_OPTION": {
      const canDelete = state.content.questions.some(
        (question) =>
          question.id === action.questionId && question.options.length > 2,
      );
      return {
        ...state,
        content: {
          ...state.content,
          questions: state.content.questions.map((q) =>
            q.id === action.questionId && q.options.length > 2
              ? {
                  ...q,
                  options: q.options.filter((o) => o.id !== action.optionId),
                }
              : q,
          ),
        },
        preview:
          canDelete &&
          state.preview.selectedOptions[action.questionId] === action.optionId
            ? {
                ...state.preview,
                selectedOptions: Object.fromEntries(
                  Object.entries(state.preview.selectedOptions).filter(
                    ([questionId]) => questionId !== action.questionId,
                  ),
                ),
              }
            : state.preview,
      };
    }
    case "UPDATE_OPTION":
      return {
        ...state,
        content: {
          ...state.content,
          questions: state.content.questions.map((q) =>
            q.id === action.questionId
              ? {
                  ...q,
                  options: q.options.map((o) =>
                    o.id === action.optionId ? { ...o, text: action.text } : o,
                  ),
                }
              : q,
          ),
        },
      };
    case "ADD_CONDITION":
      return {
        ...state,
        content: {
          ...state.content,
          questions: state.content.questions.map((q) =>
            q.id === action.id
              ? {
                  ...q,
                  logic: {
                    ...q.logic,
                    conditions: [
                      ...q.logic.conditions,
                      {
                        id: id("condition"),
                        optionId: q.options[0]?.id || "",
                        target: Math.min(state.content.questions.length, 2),
                      },
                    ],
                  },
                }
              : q,
          ),
        },
      };
    case "UPDATE_CONDITION":
      return {
        ...state,
        content: {
          ...state.content,
          questions: state.content.questions.map((q) =>
            q.id === action.questionId
              ? {
                  ...q,
                  logic: {
                    ...q.logic,
                    conditions: q.logic.conditions.map((c) =>
                      c.id === action.id ? { ...c, ...action.patch } : c,
                    ),
                  },
                }
              : q,
          ),
        },
      };
    case "UPDATE_THANK_YOU":
      return {
        ...state,
        content: {
          ...state.content,
          thankYou: { ...state.content.thankYou, ...action.patch },
        },
      };
    case "UPDATE_STYLE":
      return {
        ...state,
        styling: patch(state.styling, action.path, action.value),
      };
    case "SET_CURRENT_QUESTION":
      return {
        ...state,
        preview: {
          ...state.preview,
          currentQuestion: Math.max(
            0,
            Math.min(Number(action.index) || 0, state.content.questions.length),
          ),
          showThankYou: false,
        },
      };
    case "SELECT_OPTION":
      return {
        ...state,
        preview: {
          ...state.preview,
          selectedOptions: {
            ...state.preview.selectedOptions,
            [action.questionId]: action.optionId,
          },
        },
      };
    case "UPDATE_COMMENT":
      return {
        ...state,
        preview: {
          ...state.preview,
          comments: {
            ...state.preview.comments,
            [action.questionId]: action.value,
          },
        },
      };
    case "SHOW_THANK_YOU":
      return { ...state, preview: { ...state.preview, showThankYou: true } };
    case "CLOSE_SURVEY":
      return { ...state, preview: { ...state.preview, isClosed: true } };
    case "RESET_SURVEY":
      return structuredClone(defaultSurveyData);
    default:
      return state;
  }
}
