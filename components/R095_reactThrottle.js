import React from 'react';
import { throttle } from "lodash";
import catImage from"../img/user/cats.jpg";

const ReactThrottle =()=>{
  const throttleFunc = throttle(() => {
    console.log("Throttle API Call");
  }, 1000);

    return (
      <div className ='cats'>

        <h2>집사의 고양이 정보관리</h2> 
        <img src={catImage} alt="고양이"/><br/>
        <h3>이름</h3>
        <input type="text" onChange={throttleFunc}/>
        <h3>연령</h3>
        <input type="text" onChange={throttleFunc}/>
        <h3>성별</h3>
        <input type="text" onChange={throttleFunc}/>
        <h3>종</h3>
        <input type="text" onChange={throttleFunc}/>
        <h3>좋아하는 장난감</h3>
        <input type="text" onChange={throttleFunc}/>
      </div>
    )
  }


export default ReactThrottle;