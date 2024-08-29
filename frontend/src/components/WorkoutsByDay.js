import { useRef, useState } from "react";
const WorkoutDays = ({children, day}) => {

    const dayWrapperRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
 
    const handleClick = (e) => {
        setIsOpen((prev) => !prev) 
    }

  return (
    <div clasName="WorkoutDays">
        <h2 className = "dayName" onClick = {handleClick}>{day}</h2>
        <div ref = {dayWrapperRef} className={`dayWrapper ${isOpen ? 'open' : 'closed'}`}>
        {children}
        </div>
    </div>
  );
};

export default WorkoutDays;