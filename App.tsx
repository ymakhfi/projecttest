import React from 'react';
import SignUpPresenter from './src/signUpScreen/SignupPresenter';
import SignUpScreenView from './src/signUpScreen/SignupScreenView';

const App: React.FC = () => {
  const presenter = new SignUpPresenter();
  return <SignUpScreenView presenter={presenter} />;
};

export default App;
