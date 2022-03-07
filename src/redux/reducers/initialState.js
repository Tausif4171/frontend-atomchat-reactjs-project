const initialState = {
  user: {
    name: "",
    email: "",
    phone: "",
    device_token: "",
    device_type: "",
  },

  reload: false,
  redirect: false,
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
};
export default initialState;
