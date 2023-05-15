import React from 'react';
import {StepData} from "./App.tsx";

interface ChildProps {
  goToNext: (stepData: StepData) => void;
}

interface OnboardingFlowProps {
  children: React.ReactElement<ChildProps>[];
  currentIndex: number;
  onNext: (data: StepData) => void;
  onboardingData: StepData;
}

export const ControlledOnboardingFlow = ({ children, currentIndex, onNext, onboardingData }: OnboardingFlowProps) => {
  const goToNext = (stepData: StepData) => {
    onNext(stepData);
  }

  const currentChild = children[currentIndex];

  if (React.isValidElement(currentChild)) {
    if (currentIndex === 2 && onboardingData.age && onboardingData.age >= 62) {
      return React.cloneElement(currentChild, { goToNext });
    } else if (currentIndex === 2 && (!onboardingData.age || onboardingData.age < 62)) {
      return React.cloneElement(children[3], { goToNext });
    } else {
      return React.cloneElement(currentChild, { goToNext });
    }
  }

  return currentChild;
}
