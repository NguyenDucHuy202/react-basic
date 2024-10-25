import React from "react";  

class MyComponent extends React.Component
{
    //bản chất giống object
    state ={
        name: "Đức Huy",
        Age: 22
    }

    // dùng class Component luôn phải có render(){}
    // Return ( __KHỐI CODE__)
    handleClickButton=()=>{
        alert("Clickme")
    }

    // onchangName
    handleOnChangeName = (event) =>
    {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge =(event) =>
    {
        this.setState(
            {
                Age: event.target.value
            }
        )
    }

    render()
    {
        let name = "Nguyễn Đức Huy"
       
        // Gọi console.log trước khi return
        console.log('My name is ( cách 1 ): ', name);
        return(

            // Fragment => version củ
            // <></> => version mới
            <>
         <React.Fragment>
            <div>
                {/* Nếu muốn gọi trong thằng return
                    thì phải cho zô khối html
                    vì JXS => Return về 1 khối div
                    => nếu muốn xuất 2 div đổ lên thì sao?
                    sử dụng Fragmanet
                */}
                {console.log('My name is ( cách 2 ): ', name)}
                
                My name is {name}, lấy tên từ state: {this.state.name}
                
            </div>
            <div className="OnChangeName">
                    <input value={this.state.name} onChange={(event)=>this.handleOnChangeName(event)}>
                    
                    </input>
                    Tôi tên là : {this.state.name}
            </div>
            <div>
                <input value={this.state.Age} onChange={(event)=>this.handleOnChangeAge(event)}></input>
                tuổi của  {this.state.name} là {this.state.Age}
            </div>

            <div className="clickMe">
                <button onClick={()=>{this.handleClickButton()}}> clickMe </button>
            </div>
            </React.Fragment>
            </>
        )
    }
}


// Muốn dùng nó thì phải export
// dùng default để dùng 1 cái class chính
// Nếu dùng nhiều class thì xài kiểu export khác
export default MyComponent;