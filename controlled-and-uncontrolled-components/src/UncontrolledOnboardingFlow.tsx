import React, {useState} from 'react';
import {StepData} from "./App.tsx";

interface ChildProps {
  goToNext: (stepData: StepData) => void;
}

interface OnboardingFlowProps {
  children: React.ReactElement<ChildProps>[];
  onFinish: (updatedData: StepData) => void;
}


export const UncontrolledOnboardingFlow = ({children, onFinish}: OnboardingFlowProps) => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (stepData: StepData) => {
    const nextIndex = currentIndex + 1;

    const updatedData = { ...onboardingData, ...stepData };

    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }

    setOnboardingData(updatedData);
  };

  const currentChild = children[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return null;
}
