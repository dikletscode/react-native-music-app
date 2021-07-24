const reducer = (prevState: any, {type, payload}: any) => {
  switch (type) {
    case 'LOADING':
      return {
        ...prevState,
        auth: {
          ...prevState.auth,
          isLoading: true,
          isLogin: null,
          error: null,
        },
      };
    case 'LOGIN_SUCCESS':
      return {
        ...prevState,
        auth: {
          ...prevState.auth,
          isLoading: false,
          isLogin: true,
          result: payload,
        },
      };
    case 'LOGIN_FAILED':
      return {
        ...prevState,
        auth: {
          ...prevState.auth,
          isLoading: false,
          isLogin: false,
          error: true,
        },
      };
    default:
      return prevState;
  }
};
export default reducer;
