import { StepOptions } from "shepherd.js";

export const newSteps: StepOptions[] = [
  {
    id: "step-1",
    text: "Welcome to the Excel file upload page!",
    attachTo: { element: ".upload-button", on: "bottom" },
    buttons: [{ action: () => {}, label: "text" }],
  },
  {
    id: "step-2",
    text: "Let's start converting the file.",
    attachTo: { element: ".convert-button", on: "bottom" },
  },
  {
    id: "step-3",
    text: "You can track your progress here.",
    attachTo: { element: ".progress-button", on: "bottom" },
  },
];
