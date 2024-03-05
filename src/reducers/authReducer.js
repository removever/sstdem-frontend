const storedToken = localStorage.getItem('accessToken');
const storedUser = localStorage.getItem('user');

const user = storedUser ? JSON.parse(storedUser) : null

const initialState = {
  user,
  accessToken: storedToken,
  isAuthenticated: !!user,
};

const authReducer = (state = initialState, action) => {
  const reducers = {
    'LOGIN': () => {
      const { accessToken, user } = action.payload

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('user', JSON.stringify(user));

      return {
        ...state,
        accessToken,
        user,
        isAuthenticated: true,
      };
    },
    'LOGOUT': () => {
      localStorage.clear()

      return {
        ...state,
        accessToken: '',
        user: null,
        isAuthenticated: false,
      };
    },
  }

  return reducers[action.type] ? reducers[action.type]() : state
};

export default authReducer