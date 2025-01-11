import { useState } from 'react';

const Step1 = ({ next }) => (
  <div>
    <h2>Step 1</h2>
    <button onClick={next}>Next</button>
  </div>
);

const Step2 = ({ next, previous }) => (
  <div>
    <h2>Step 2</h2>
    <button onClick={previous}>Previous</button>
    <button onClick={next}>Next</button>
  </div>
);

const Step3 = ({ previous }) => (
  <div>
    <h2>Step 3</h2>
    <button onClick={previous}>Previous</button>
    <button type="submit">Submit</button>
  </div>
);

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && <Step1 next={nextStep}></Step1>}
      {step === 2 && <Step2 next={nextStep} previous={previousStep}></Step2>}
      {step === 3 && <Step3 previous={previousStep}></Step3>}
    </form>
  );
};

const App = () => {
  return (
    <div>
      <h1>Multi-Step Form</h1>
      <MultiStepForm />
    </div>
  );
};

export default App;
