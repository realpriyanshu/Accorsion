import data from "./data";
import { useState } from "react";
import './style.css'

export default function Index() {

    const [selected , setSelected] = useState(null)
    const [enableMultiSelected ,setEnableMultiSelected] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(currentId){
        setSelected(currentId ===selected ? null :currentId);
    }

    function handleMultiSelection(currentId){

        const copyArr = [...multiple];
        
        const findIndexOfCurrentId = copyArr.indexOf(currentId);
 console.log(findIndexOfCurrentId);

        if(findIndexOfCurrentId === -1) copyArr.push(currentId)
        else{ copyArr.splice(findIndexOfCurrentId,1) ;
}
setMultiple(copyArr)
        
    }
    console.log(enableMultiSelected,selected,multiple)
    return (
      <div className="wrapper">
        <button onClick={()=> setEnableMultiSelected(!enableMultiSelected)}>selectMultiple</button>
        <div className="accordian">
            {

                data && data.length>0 ? data.map((d)=>(
                    <div  className="item">
                        <div onClick={()=> enableMultiSelected?handleMultiSelection(d.id) :handleSingleSelection(d.id)} className="title">
                            <h3>{d.question}</h3>
                        <span>+</span>
                        </div>
                        { enableMultiSelected ? multiple.indexOf(d.id) !== -1 && (
                            <div className="content">
                            <h5>{d.answer}</h5>
                        </div>
                        ):
                        
                        selected=== d.id? <div className="content">
                            <h5>{d.answer}</h5>
                        </div>: null}
                    </div>
                )) :<div> no data awailable</div>
                
            }
        </div>
      </div>
      )
}


