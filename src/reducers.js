const initialState = {
    students: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_STUDENT':
        return {
          ...state,
          students: [...state.students, action.payload],
        };
      case 'DELETE_STUDENT':
        return {
        ...state,
        students: state.students.filter((_, index) => index !== action.payload)
        };
    default:
        return state;
    }
  };
  
  export default rootReducer;
  