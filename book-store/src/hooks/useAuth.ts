import { useNavigate } from "react-router-dom";
import { useAlert } from "./useAlert";

import { useState } from "react";
import { LoginProps } from "../pages/Login";
import { SignupProps } from "../pages/Signup";
import { useAuthStore } from "../store/authStore";
import { resetPassword, resetRequest, signin, signup } from "../api/auth.api";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const [resetRequested, setRequested] = useState(false);
  const { storeLogin } = useAuthStore();
  const userLogin = async (data: LoginProps) => {
    try {
      const res = await signin(data);
      storeLogin(res.token);
      {
        showAlert;
      }
      ("로그인이 완료되었습니다.");
      navigate("/");
    } catch (error) {
      {
        showAlert;
      }
      ("로그인에 실패했습니다.");
      console.error("로그인 실패:", error);
    }
  };

  const userSignup = async (data: SignupProps) => {
    try {
      await signup(data);
      {
        showAlert;
      }
      ("회원가입이 완료되었습니다.");
      navigate("/login");
    } catch (error) {
      console.error("회원가입 오류", error);
    }
  };

  const userResetPassword = async (data: SignupProps) => {
    try {
      await resetPassword(data);

      showAlert("비밀번호가 초기화 되었습니다.");
      return navigate("/login");
    } catch (error) {
      console.error("회원가입 오류", error);
    }
  };

  const userResetRequest = async (data: SignupProps) => {
    try {
      await resetRequest(data);
      setRequested(true);
    } catch (error) {
      console.error("회원가입 오류", error);
    }
  };
  return { userLogin, userSignup, userResetPassword, userResetRequest, resetRequested };
};
