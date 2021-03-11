export const FETCH_USERS = 'FETCH_USERS';
export const SET_USERS_LIST_LOADER = 'SET_USERS_LIST_LOADER';
export const SET_USERS = 'SET_USERS';
export const DELETE_USER = 'DELETE_USER';
export const EDIT_USER_ROLE = 'EDIT_USER_ROLE';
export const SET_ALL_USERS_ROLE = 'SET_ALL_USERS_ROLE';
export const SET_USER_ROLE = 'SET_USER_ROLE';

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setLoadingUsersList = (loading) => ({
  type: SET_USERS_LIST_LOADER,
  loading,
});

export const deleteUser = (idUser) => ({
  type: DELETE_USER,
  idUser,
});

export const editUserRole = (idUser) => ({
  type: EDIT_USER_ROLE,
  idUser,
});

export const setAllUsersRole = (usersRole) => ({
  type: SET_ALL_USERS_ROLE,
  usersRole,
});

export const setUserRole = (id, role) => ({
  type: SET_USER_ROLE,
  id,
  role,
});
