import React,{useState,useEffect} from 'react'
import { Card } from 'antd';
const { Meta } = Card;

export default function Test_Card() {
const [len,setLen]=useState({name:'xcvbn',name2:'fghj'})
const len=[
{
name1:"sdfghj",
name2:"ertyui"
},
{
    name1:"sdfghj",
    name2:"ertyui"   
},
{
    name1:"sdfghj",
    name2:"ertyui"   
},
]
const x=[1]
const AddCard=()=>{
    x.push(1)
    console.log(x);
}
  return (
    <div>
      {/* {
          len.map((x)=>{
              return(
<div>
<Card
key={x}
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
          <div>{x.name}</div>
          <button onClick={()=>AddCard()}>add</button>
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
</div>
              )
          })
      } 
         */}
         {
             Object.values(names).map((x,i)=>{
                 return(
                    //  <div key=></div>
                 )
             })
         }
         
    </div>
  )
}
