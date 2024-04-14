import React from "react";
import kakaologin from "../../images/kakao_login_medium_narrow.png";
const LoginPage = () => {
    const REST_API_KEY = "ab472e238df9e16d1e7662ee32c4f9cf";
    const REDIRECT_URI = "http://localhost:5173/redirection";
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const loginHandler = () => {
        window.location.href = link;
    };

    return (
        <section>
            <button type="button" onClick={loginHandler}>
                <img src={kakaologin} alt="카카오 로그인 버튼" />
            </button>
        </section>
    );
};

export default LoginPage;
