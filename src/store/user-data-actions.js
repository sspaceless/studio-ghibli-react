import { doc, getDoc, onSnapshot } from 'firebase/firestore';

import { initialState, userDataActions } from './user-data-slice';
import { USERS_COLLECTION } from '../config';

const fetchUserData = (firestore, uid) => async (dispatch) => {
  const fetchData = async () => {
    dispatch(userDataActions.setIsLoading({ isLoading: true }));
    dispatch(userDataActions.setError({ error: null }));

    const userDocRef = doc(firestore, USERS_COLLECTION, uid);
    const userDataSnap = await getDoc(userDocRef);

    onSnapshot(userDocRef, (userDoc) => {
      console.log('onSnapshot');
      if (!userDoc.data()) {
        return;
      }
      dispatch(userDataActions.setUserData({ data: userDoc.data() }));
    });

    return userDataSnap.data() ?? initialState.data;
  };

  try {
    const userData = await fetchData();
    dispatch(userDataActions.setUserData({ data: userData }));
    dispatch(userDataActions.setIsLoading({ isLoading: false }));
  } catch (e) {
    dispatch(userDataActions.setError({ error: e.message }));
  }
};

export default fetchUserData;
