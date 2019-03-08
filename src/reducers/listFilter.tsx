let booleanList = [false,false,false];

const listFilter = (state:any = booleanList, action:any) => {
    switch (action.type) {
      case 'SET_DROPDOWN_VISIBILITY_FILTER':
        return action.elements
      default:
        return state
    }
  }
  
  export default listFilter