import fetcher from "@utils/fetcher";
import axios from "axios";
import React, { FC, useCallback } from "react";
import { Redirect } from "react-router";
import useSWR from "swr";
import { Header, ProfileImg, RightMenu } from "@layouts/Workspace/styles";

const Workspace: FC = ({children}) => {
  const { data, error, revalidate, mutate } = useSWR("http://localhost:3095/api/users", fetcher, {
    dedupingInterval: 2000,     // 2초
  });

  const onLogout = useCallback(() => {
    axios
      .post('http://localhost:3095/api/users/logout', null,
      {
        withCredentials: true,
      })
      .then(() => {
        mutate(false, false);
      })
  }, []);

  console.log('에에에에에??????', data)

  if(!data) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <Header>
        <RightMenu>
          <span>
            <ProfileImg src="" alt ={data.nickname} />
          </span>
        </RightMenu>
      </Header>
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </div>
    
  );
  
};

export default Workspace;