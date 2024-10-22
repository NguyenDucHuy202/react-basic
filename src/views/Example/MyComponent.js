import React from "react";  

class MyComponent extends React.Component
{

    // dùng class Component luôn phải có render(){}
    // Return ( __KHỐI CODE__)
    render()
    {
        return(

            <div>Hello Nguyễn Đức Huy</div>
        )
    }
}


// Muốn dùng nó thì phải export
// dùng default để dùng 1 cái class chính
// Nếu dùng nhiều class thì xài kiểu export khác
export default MyComponent;