import React,{useState,useEffect} from 'react'
const Showthequery = () => {
const [items, setitems] = useState([{title:String,Content:String,_id:String,email:String}])
useEffect(() => {
    fetch('/items').then((res)=>{
        if(res.ok){
            console.log(typeof res)
            
            return res.json();
        }
    })
    .then((jsonRes)=>{
        console.log("json data",jsonRes);
        setitems(jsonRes)})
    .catch((err)=>{console.log(err)});
}, [items]);
    return (
        <div>
            {items.map((item)=>{
                return(
                    <div key={item._id}>
                    <h1>Title:=>{item.title}</h1>
                <h1>email=>{item.email}</h1>
                    <h1>content=>{item.content}</h1>

                    </div>
                )
            })}
           
        </div>
    )
}


export default Showthequery;
