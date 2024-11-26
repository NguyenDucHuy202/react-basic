import React from "react";

class ChildComponent extends React.Component
{

    render(){
        
        // let name = this.props.name 
        // let age = this.props.age
        // nếu có 10 thằng thì sau? ghi 10 thằng?
        // cú pháp gỏ ngắn
        let {name,age, addres }= this.props; 

        return(
            <>
                <h1> name child: {name}</h1>
                <h1> Àge child: {age}</h1>
                <div className="list-Addres">
                    {
                        addres.map((item, index)=>{
                                return(
                                    <div key={item.id}>
                                        {item.soNha} - {item.phuong} - {item.quan} - {item.thanhpho}
                                    </div>
                                )
                        })
                    }
                </div>

            </>

        )
       

    }


}



export default ChildComponent