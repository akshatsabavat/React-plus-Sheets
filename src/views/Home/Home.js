import "./Home.scss";

export default function Home() {
  return (
    <div className="TempHolderPage">
      <p className="TempHolderPage__Title">Sheets Register form</p>
      <form onSubmit={handleSubmit(handleSubmit(formSubmitAction))}>
        <div className="TempHolderPage__inputFeild">
          <label>Email ID</label>
          <input
            type="text"
            placeholder="@xyz.gmail.com"
            name="Email ID"
            ref={register}
          />
        </div>
        <div className="TempHolderPage__inputFeild">
          <label>Create password</label>
          <input
            type="password"
            placeholder="********"
            name="Enter password"
            ref={register}
          />
        </div>
        <div className="TempHolderPage__inputFeild">
          <label>Confirm password</label>
          <input
            type="password"
            placeholder="********"
            name="Confirm password"
            ref={register}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
