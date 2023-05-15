import {Fragment, useState} from "react";
import {UncontrolledForm} from "./UncontrolledForm.tsx";
import {ControlledForm} from "./ControlledForm.tsx";
import {UncontrolledModal} from "./UncontrolledModal.tsx";
import {ControlledModal} from "./ControlledModal.tsx";
import {UncontrolledOnboardingFlow} from "./UncontrolledOnboardingFlow.tsx";
import {ControlledOnboardingFlow} from "./ControlledOnboardingFlow.tsx";

export interface StepData {
  name?: string;
  age?: number;
  hairColor?: string;
}

interface StepProps {
  goToNext?: (data: StepData) => void;
}

const StepOne = ({ goToNext }: StepProps) => (
  <>
    <h2>Step 1!</h2>
    <button onClick={() => goToNext && goToNext({ name: 'John Doe' })}>Go to step 2</button>
  </>
)
const StepTwo = ({ goToNext }: StepProps) => (
  <>
    <h2>Step 2!</h2>
    <button onClick={() => goToNext && goToNext({ age: 61 })}>Go to step 3</button>
  </>
)
const StepThree = ({ goToNext }: StepProps) => (
  <>
    <h2>Step 3</h2>
    <p>Congratulations! You qualify for our senior discount</p>
    <button onClick={() => goToNext && goToNext({})}>Go to step 4</button>
  </>
);
const StepFour = ({ goToNext }: StepProps) => (
  <>
    <h2>Step 4</h2>
    <button onClick={() => goToNext && goToNext({ hairColor: 'brown' })}>Next</button>
  </>
);

export const App = () => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [onboardingData, setOnboardingData] = useState<StepData>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const showModal = () => setShouldShowModal(true);
  const hideModal = () => setShouldShowModal(false);

  const onNext = (stepData: StepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <UncontrolledForm />
      <ControlledForm />

      <h2>----------------------------</h2>

      <UncontrolledModal>
        <h1>Modal component</h1>
      </UncontrolledModal>
      <ControlledModal shouldShow={shouldShowModal} onRequestClose={hideModal}>
        <h1>Modal component</h1>
      </ControlledModal>
      <button onClick={showModal}>{shouldShowModal ? 'Hide modal' : 'Show modal'}</button>

      <h2>----------------------------</h2>

      <h2>Uncontrolled Onboarding Flow</h2>
      <UncontrolledOnboardingFlow onFinish={(data: StepData) => console.log(data)}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>

      <h2>Controlled Onboarding Flow</h2>
      <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext} onboardingData={onboardingData}>
        <StepOne />
        <StepTwo />
        {(onboardingData.age && onboardingData.age >= 62) ? <StepThree /> : <Fragment />}
        <StepFour />
      </ControlledOnboardingFlow>
    </>
  )
}
