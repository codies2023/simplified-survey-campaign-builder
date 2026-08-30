export const id = (p) =>
  `${p}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
export const makeQuestion = (n) => ({
  id: id("question"),
  title: `Question ${n}`,
  subtitle: "Please select one option.",
  options: [
    { id: id("option"), text: "Option 1" },
    { id: id("option"), text: "Option 2" },
  ],
  additionalComments: false,
  logic: { enabled: false, conditions: [] },
  buttonText: "Next",
});
