const actualSlide = (state:any = 0, action:any) => {
    switch (action.type) {
      case 'SET_NUM_SLIDE':
        return action.numSlide
      default:
        return state
    }
  }
  
  export default actualSlide