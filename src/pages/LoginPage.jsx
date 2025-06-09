import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { schemaLogin } from "../validator/schemaAuth";
import { toast } from "react-toastify";

const initialInput = {
  username: "",
  password: "",
};

function LoginPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading },
  } = useForm({
    defaultValues: initialInput,
    shouldFocusError: true,
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = async (data) => {
    try {
      reset();
      toast.success("Login Success");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Username</label>
          <input
            {...register("username")}
            type="text"
            className="input"
            placeholder="Username"
          />
          {errors?.username && (
            <p className="text-red-500 text-xs">{errors.username?.message}</p>
          )}

          <label className="label">Password</label>
          <input
            {...register("password")}
            type="password"
            className="input"
            placeholder="Password"
          />
          {errors?.password && (
            <p className="text-red-500 text-xs">{errors.password?.message}</p>
          )}

          <button disabled={isLoading} className="btn btn-neutral mt-4">
            Login
          </button>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  );
}

export default LoginPage;
