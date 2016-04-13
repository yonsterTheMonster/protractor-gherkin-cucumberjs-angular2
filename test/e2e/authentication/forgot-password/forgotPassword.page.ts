export class ForgotPasswordPageObject {

  private form;
  private emailInput;
  private submitButton;
  private goToLoginLink;
  private goToRegisterLink;

  constructor() {

    // get the relevant elements
    this.form = element(by.id('forgot-password-form'));
    this.emailInput = this.form.element(by.id('forgot-password-email'));
    this.submitButton = this.form.element(by.id('forgot-password-submit'));

    this.goToLoginLink = element(by.id('forgot-password-login-link'));
    this.goToRegisterLink = element(by.id('forgot-password-register-link'));

  }

  getPage() {
    return browser.get('http://localhost:3000/forgot-password');
  }

  setEmail(value: string) {
    return this.emailInput.clear().sendKeys(value);
  }

  submitForm() {
    return this.submitButton.sendKeys(protractor.Key.ENTER);
  }

  getAllErrorMessages() {
    return element.all(by.css('.error-group'));
  }

  hasErrorMessages() {
    return this.getAllErrorMessages().count().then(value => {
      return value > 0;
    });
  }

  formIsValid(){
    return this.getAllErrorMessages().count().then(value => {
      return value === 0;
    });
  }

}
