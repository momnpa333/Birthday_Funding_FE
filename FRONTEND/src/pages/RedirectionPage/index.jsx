import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RedirectionPage = () => {
    const code = window.location.search;
    const navigate = useNavigate();
    console.log(`http://localhost:8080/oauth2${code}`);
    useEffect(() => {
        axios
            .get(`http://localhost:8080/oauth2${code}`, {
                withCredentials: true,
            })
            .then((r) => {
                let accessToken = r.headers.authorization;
                console.log(accessToken);

                // 토큰을 받아서 localStorage같은 곳에 저장하는 코드를 여기에 쓴다.
                localStorage.setItem("accessToken", accessToken); // 일단 이름만 저장했다.
                // localStrorage.setItem("token", r.data.);
                navigate("/loginSuccess");
            });
    }, []); 

    return <div>로그인 중입니다.</div>;
};

export default RedirectionPage;
