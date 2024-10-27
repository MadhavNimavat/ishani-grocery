import { Formik } from "formik";
import { useCallback } from "react";
import { MdEmail, MdPassword } from "react-icons/md";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Assets } from "../../assets/icons";
import { ButtonField, InputField } from "../../components";
import { makeUserLoggedIn } from "../../features";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const submitForm = useCallback(
    (values, { setSubmitting }) => {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        dispatch(makeUserLoggedIn({ ...values }));
      }, 1000);
    },
    [dispatch]
  );

  return (
    <div className="bg-background-variantOne h-screen w-full flex flex-col lg:flex-row overflow-x-hidden">
      {/* left section */}
      <div className="hidden lg:flex lg:w-3/5 items-end justify-start">
        <img src={Assets.Banner} alt="" className="w-2/4 object-cover" />
      </div>

      {/* right section */}
      <Formik
        initialValues={{ email: "", password: "", togglePassword: true }}
        validateOnBlur={true}
        validateOnChange={false}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {({ handleSubmit, isSubmitting, values, setFieldValue }) => (
          <div className="w-full h-screen lg:w-2/5 bg-background-form lg:shadow-2xl items-center justify-center flex flex-col px-4 sm:px-8 lg:px-16">
            <img
              src={Assets.Logo}
              alt=""
              className="w-28 h-32 object-contain"
            />
            <div className="my-1" />

            <div className="text-white text-2xl font-serif">
              Welcome Back to!
            </div>
            <div className="my-1" />
            <div className="text-white text-6xl font-serif text-center w-full">
              {"Ishani's Grocery"}
            </div>
            <div className="my-6" />
            <InputField
              leftIcon={<MdEmail className="h-8 w-8 text-white" />}
              placeholder={"Email address"}
              inputProps={{
                name: "email",
                type: "email",
                maxLength: 246,
              }}
            />
            <div className="my-2" />
            <InputField
              leftIcon={<MdPassword className="h-8 w-8 text-white" />}
              rightIcon={
                <div
                  onClick={() =>
                    setFieldValue("togglePassword", !values.togglePassword)
                  }
                >
                  {values.togglePassword ? (
                    <IoMdEye className="h-8 w-8 text-white" />
                  ) : (
                    <IoMdEyeOff className="h-8 w-8 text-white" />
                  )}
                </div>
              }
              placeholder={"Password"}
              inputProps={{
                name: "password",
                type: values.togglePassword ? "password" : "text",
                maxLength: 64,
              }}
            />
            <div className="my-8" />
            <ButtonField
              buttonTitle={"Login"}
              customClasses={"w-1/2"}
              onClick={handleSubmit}
              isLoading={isSubmitting}
            />
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
