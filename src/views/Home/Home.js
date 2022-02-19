import logo from "../../logo.svg";
import "./Home.scss";

export default function Home() {
  return (
    <div className="TempHolderPage">
      <p className="TempHolderPage__Title">Sheets Register form</p>
      <form>
        <div className="TempHolderPage__inputFeild">
          <label>Email ID</label>
          <input type="text" placeholder="@xyz.gmail.com" name="Email ID" />
        </div>
        <div className="TempHolderPage__inputFeild">
          <label>Create password</label>
          <input type="password" placeholder="********" name="Enter password" />
        </div>
        <div className="TempHolderPage__inputFeild">
          <label>Confirm password</label>
          <input
            type="password"
            placeholder="********"
            name="Cpnfirm password"
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
