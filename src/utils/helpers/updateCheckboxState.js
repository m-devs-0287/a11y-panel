import { stateManager } from "../../db/stateManager.js";

export const updateCheckboxState = async ({
  dataName,
  btnId,
  classHolder = document.body,
  className,
  reverse
}) => {

  // get data
  const data = await stateManager.getState(dataName)

  // asign data
  let isActive = !data.value;
  const checkboxBtn = document.getElementById(btnId);

  if(!reverse){
    // update checkbox state
    isActive 
    ? checkboxBtn.checked = true 
    : checkboxBtn.checked = false;

    // toggle class base on state
    classHolder.classList.toggle(className, isActive);
  }else {
    isActive 
    ? checkboxBtn.checked = true 
    : checkboxBtn.checked = false;
    
    // toggle class base on state
    classHolder.classList.toggle(className, isActive === false);
  }
  



  // set data
  stateManager.setState(dataName, { value: isActive });
};