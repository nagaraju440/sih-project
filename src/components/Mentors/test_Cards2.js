import React,{useState,useEffect} from 'react'
import { Card } from 'antd';
const { Meta } = Card;

export default function Test_Cards2() {
  const [crds,setCrds]=useState(["dfghj"])
    // const card=()=>{
    //     // return(
    //         <div>
    //         {
    //             // return()
    //             Object.values(crds).map((x,y)=>{
    //                 <Card
    //                    key={y}
    //                            hoverable
    //                            style={{ width: 240 }}
    //                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    //                          >
    //                              {/* <div>{x.name}</div> */}
    //                              <button 
    //                              onClick={()=>AddCard()}
    //                              >add</button>
    //                            <Meta title="Europe Street beat" description="www.instagram.com" />
    //                          </Card>
    //             })
    //         }
                
    //         </div>
           
    //         // )
        
    // }
    function AddCard(){
setCrds([...crds,"rtyui"])
    }
  return (
    <div>
        test_Cards2
        <div>
        {
            Object.values(crds).map((x,i)=>{
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
    </div>
  )
}
