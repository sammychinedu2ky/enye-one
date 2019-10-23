

const initialState = {
    columns: [
      { title: 'FirstName', field: 'firstname' },
      { title: 'LastName', field: 'lastname' },
      { title: 'Birthday', field: 'birthday', type: 'date' },
     
      { title: 'Age', field: 'age'},
      {
        title: 'Hobby',
        field: 'hobby',
        lookup: { 1: 'Reading', 2:'Coding',3:'Movies',4:'Eating',5:'Tennis',6:'Others' },
      },
    ],
    data: [
      
      
    ],
  };

const form = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE': {
      console.log({...state,...action.data})
      return {...state,...action.data};
    }
    default: {
      return state;
    }
  }
};

export default form;
