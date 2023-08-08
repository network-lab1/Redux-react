// actions.js
// export const addStudent = (name, age, country) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post('api/addStudent', { name, age, country });
//       dispatch({
//         type: 'ADD_STUDENT',
//         payload: response.data,
//       });
//     } catch (error) {
//       // Handle error if needed
//     }
//   };
// };
export const addStudent = (name, age, country, province) => {
    return {
      type: 'ADD_STUDENT',
      payload: { name, age, country, province },
    };
  };
  
export const deleteStudent = (index) => {
    return {
      type: 'DELETE_STUDENT',
      payload: index
    };
};