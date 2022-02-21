import "./Home.scss";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
export default function Home() {
  const { register, handleSubmit } = useForm();
  const { userData, setUserData } = useState("");

  const displayData = (data) => console.log(JSON.stringify(data));

  return (
    <div className="TempHolderPage">
      <p className="TempHolderPage__Title">Sheets Register form</p>
      <form onSubmit={handleSubmit(displayData)}>
        <div className="TempHolderPage__inputFeild">
          <label>Email ID</label>
          <input
            type="text"
            placeholder="@xyz.gmail.com"
            {...register("emailID")}
          />
        </div>
        <div className="TempHolderPage__inputFeild">
          <label>Username</label>
          <input
            type="text"
            placeholder="GGMAN#9909"
            {...register("Username")}
          />
        </div>
        <div className="TempHolderPage__inputFeild">
          <label>Create password</label>
          <input
            type="password"
            placeholder="********"
            {...register("password")}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
