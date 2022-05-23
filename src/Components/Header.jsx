import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useUser } from 'reactfire';
import classes from './Header.module.css';

const Header = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const user = useUser();
  const { data: userData } = user;

  const signOutButtonClickHandler = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  let content = (
    <div className={classes.button}>
      <Link to="/authentication" style={{ textDecoration: 'none' }}>Sign in</Link>
    </div>
  );

  if (userData) {
    content = (
      <div className={classes.profile}>
        <button type="button" onClick={signOutButtonClickHandler}>
          Sign out
        </button>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className={classes['profile-icon']}>
            <img alt="profile-icon" src={userData.photoURL} />
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className={classes.navbar}>
      {content}
      <div className={classes.button}>
        <Link to="/" style={{ textDecoration: 'none' }}>Studio Ghibli</Link>
      </div>
    </div>
  );
};

export default Header;
