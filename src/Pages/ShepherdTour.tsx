import { useEffect, useState } from "react";
import { ShepherdJourneyProvider, useShepherd } from "react-shepherd";
import { newSteps } from "../TourSteps"; // Assuming you have your steps defined here
import "shepherd.js/dist/css/shepherd.css";
import { StepOptions } from "shepherd.js";

export const ShepherdTour = () => {
  const [tourStarted, setTourStarted] = useState(false);
  const [stepsCompleted, setStepsCompleted] = useState<any>([]);

  const tourOptions = {
    defaultStepOptions: {
      cancelIcon: {
        enabled: true,
      },
    },
    useModalOverlay: true,
  };

  // Check if the user has already completed the tour or certain steps
  useEffect(() => {
    const completedSteps = JSON.parse(
      localStorage.getItem("completedSteps") || "[]"
    );
    setStepsCompleted(completedSteps);
  }, []);

  // Update localStorage with completed steps
  const updateStepProgress = (stepId: string) => {
    const updatedCompletedSteps = [...stepsCompleted, stepId];
    setStepsCompleted(updatedCompletedSteps);
    localStorage.setItem(
      "completedSteps",
      JSON.stringify(updatedCompletedSteps)
    );
  };

  // Define the steps, checking if the step was completed
  const updatedSteps = newSteps.map((step: StepOptions) => ({
    ...step,
    when: {
      show: () => step && !stepsCompleted.includes(step.id),
    },
    buttons: [
      {
        text: "Next",
        action: (tour: any) => {
          if (step) {
            updateStepProgress(step.id as string);
            tour.next();
          }
        },
      },
    ],
  }));

  // Start the tour using the useShepherd hook
  function StartTourButton() {
    const Shepherd = useShepherd();
    const tour = new Shepherd.Tour({
      ...tourOptions,
      steps: newSteps,
    });

    return (
      <button className="button dark" onClick={tour.start}>
        Start Tour
      </button>
    );
  }
  const resetTour = () => {
    localStorage.removeItem("completedSteps"); // Clear the stored progress
    setStepsCompleted([]); // Reset the stepsCompleted state
    setTourStarted(false); // Optionally, reset the tourStarted state to false
  };
  return (
    <>
      <button>hi</button>
      <button>Bye</button>
      <button onClick={resetTour}>Reset Tour</button>
      <div>
        <ShepherdJourneyProvider>
          <StartTourButton />
        </ShepherdJourneyProvider>
      </div>
    </>
  );
};
