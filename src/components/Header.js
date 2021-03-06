import styled from "styled-components"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { auth, provider } from "../firebase"
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from "../features/user/userSlice"

const Header = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          setUser(user);
          history.push("/home");
        }
      });
    }, [userName]);

    const handleAuth = () => {
      if (!userName) {
        auth
          .signInWithPopup(provider)
          .then((result) => {
            setUser(result.user);
          })
          .catch((error) => {
            alert(error.message);
          });
      } else if (userName) {
        auth
          .signOut()
          .then(() => {
            dispatch(setSignOutState());
            history.push("/");
          })
          .catch((err) => alert(err.message));
      }
    };
  
    const setUser = (user) => {
      dispatch(
        setUserLoginDetails({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
    };

    return (
      <Nav>
        <Logo>
          <img src="/images/logo.svg" alt="Disney+ Logo" />
        </Logo>
  
        {!userName ? (
          <Login onClick={handleAuth}>S'identifier</Login>
        ) : (
          <>
            <NavMenu>
              <a href="/">
                <img src="/images/home-icon.svg" alt="Accueil" />
                <span>Accueil</span>
              </a>
              <a href="#">
                <img src="/images/search-icon.svg" alt="Recherche" />
                <span>Recherche</span>
              </a>
              <a href="#">
                <img src="/images/watchlist-icon.svg" alt="Ma liste" />
                <span>Ma liste</span>
              </a>
              <a href="#">
                <img src="/images/original-icon.svg" alt="Originals" />
                <span>Originals</span>
              </a>
              <a href="#">
                <img src="/images/movie-icon.svg" alt="Films" />
                <span>Films</span>
              </a>
              <a href="#">
                <img src="/images/series-icon.svg" alt="S??ries" />
                <span>S??ries</span>
              </a>
            </NavMenu>
            <SignOut>
              <UserImg src={userPhoto} alt={userName} />
              <DropDown>
                <span onClick={handleAuth}>Se d??connecter</span>
              </DropDown>
            </SignOut>
          </>
        )}
      </Nav>
    );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  @media (max-width: 768px) {
    height: 150px;
    padding: 10;
  }
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  @media (max-width: 768px) {
    display:none;
  }
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-flow: row nowrap;
  height: 100%;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    @media (max-width: 768px) {
      padding: 2px 12px;
    }
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      text-transform: uppercase;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
        @media (max-width: 768px) {
          bottom: -3px;
        }
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 768px) {
    margin-left: 0;
    flex-direction: column;
    justify-content:center;
  } 
`;
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
    cursor:pointer;
  }
`
const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 10px;
  right: 80px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 1px;
  width: 150px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  letter-spacing:3px;
  @media (max-width: 768px) {
    margin-right: 5vw;
  }
  ${UserImg} {
    border-radius: 50%;
    width: 75%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      text-align:center;
      opacity: 1;
      transition-duration: 1s;
    }
  }
`

export default Header