import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Context } from "@/context/Context";
import validationSchema from "@/schemas/SigninSchema";
import { useFormik } from "formik"; 
import { useContext, useState } from "react";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const {handleSubmit} = useContext(Context)

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit:handleSubmit
  });

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden border-none">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form onSubmit={formik.handleSubmit} className="p-6 md:p-8 bg-gray-800/20  min-h-[60vh]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-balance text-muted-foreground">
                  Login to your Acme Inc account
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  name="username"
                  id="username"
                  type="text"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.username && formik.errors.username
                      ? "border-red-500"
                      : ""
                  }
                />
                {formik.touched.username && formik.errors.username && (
                  <p className="text-red-500 text-sm">{formik.errors.username}</p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  name="password"
                  id="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : ""
                  }
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm">{formik.errors.password}</p>
                )}
              </div>
              {apiError && (
                <p className="text-red-500 text-sm text-center">{apiError}</p>
              )}
              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.4572675350887!2d74.30902627565177!3d31.511598674217936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919038080f2fa49%3A0xae4788c491fe91!2sVision%20Plus!5e0!3m2!1sen!2s!4v1737368433514!5m2!1sen!2s"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
};

export default LoginForm;
