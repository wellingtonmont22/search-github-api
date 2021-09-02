import React, { useEffect } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

const Profile = () => {
  const { githubState } = useGithub();

  useEffect(() => {
    console.log(githubState.user);
  }, [githubState.user]);

  return (
    <S.Wrapper>
      <S.WrapperImage
        src={githubState.user.avatar}
        alt="avatar_user"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperGeneric>
            <h3>Username: </h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </S.WrapperGeneric>

          {githubState.user.company && (
            <S.WrapperGeneric>
              <h3>company: </h3>
              <span>{githubState.user.company}</span>
            </S.WrapperGeneric>
          )}
          {githubState.user.location && (
            <S.WrapperGeneric>
              <h3>Location: </h3>
              <span>{githubState.user.location}</span>
            </S.WrapperGeneric>
          )}
          {githubState.user.blog && (
            <S.WrapperGeneric>
              <h3>Blog: </h3>
              <a href={githubState.user.blog}>{githubState.user.blog}</a>
            </S.WrapperGeneric>
          )}
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>{githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{githubState.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
