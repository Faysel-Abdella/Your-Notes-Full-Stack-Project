import Wrapper from "../assets/wrappers/commonWrapper";
import FormRow from "../components/FormRow";
import CtaButton from "../components/CtaButton";

import { PiArrowRightBold, PiArrowLeftBold } from "react-icons/pi";

const CompletePage = () => {
  return (
    <Wrapper>
      <div className="signup-container">
        <div className="inside-singup">
          <h1 className="header-text">Complete Signup</h1>
          <form>
            <FormRow name="userName" type="text" label="Username" />
            <FormRow name="phone" label="Phone" />
            <FormRow name="birthday" label="Birthday Year" />
            <CtaButton text="Complete signup" Icon={PiArrowRightBold} />
            <CtaButton text="Back" Icon={PiArrowLeftBold} />
          </form>
          <p className="normal-text">
            Already have an account?{" "}
            <a className="go-link" href="/">
              Login
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default CompletePage;
