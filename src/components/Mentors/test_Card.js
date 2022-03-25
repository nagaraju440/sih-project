import React,{useState,useEffect} from 'react'
import { Card } from 'antd';
const { Meta } = Card;

export default function Test_Card() {
const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []);
const len=[
{
name1:"sdfghj",
name2:"ertyui"
},
// useEffect(()=>{
//     AddCard()
// })
]
const x=[1]
const AddCard=()=>{
    len.push({})
    console.log(len);
}
const y=()=>{
    return(
        <div>
        {
            Object.values(len).map((x,i)=>{
                return(
                   <div key={i}>
                   <Card
                   key={x}
                           hoverable
                           style={{ width: 240 }}
                           cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                         >
                             {/* <div>{x.name}</div> */}
                             <button onClick={()=>AddCard()}>add</button>
                           <Meta title="Europe Street beat" description="www.instagram.com" />
                         </Card>
                   </div>
                )
            })
        }
        
   </div>
    )
}
  return (
   <div>
       {y()}
   </div>
  )
}
