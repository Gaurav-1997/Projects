const initialState= {
  composeModalIsOpen: false
};

const mailReducer = (state=initialState, action)=>{
    const newState = {...state};

    switch(action.type){
      case "OPEN_COMPOSE_MODAL":
        newState.composeModalIsOpen = !newState.composeModalIsOpen;
        break;
      case "CLOSE_COMPOSE_MODAL":
        newState.composeModalIsOpen = false;
        break;  
      default:
        break;
    };
    return newState;
};

export default mailReducer;

