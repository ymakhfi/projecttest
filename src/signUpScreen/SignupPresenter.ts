import SignUpScreenModel, {SignUpFormData} from './SignupScreenModel';

class SignUpPresenter {
  private readonly model: SignUpScreenModel;
  constructor() {
    this.model = new SignUpScreenModel();
  }
  get validationSchema() {
    return this.model.getValidationSchema();
  }
  SignUp(values: SignUpFormData) {
    console.log(values);
    // Add SignUp logic here
  }
}
export default SignUpPresenter;
