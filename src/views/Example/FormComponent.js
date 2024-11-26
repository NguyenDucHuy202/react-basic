import React from "react";
import ChildComponent from './ChildComponent';
class FormComponent extends React.Component
{
    state = {
        name:'',
        age : '',
        addres:[
            {id: "001",soNha:"12", phuong:"Tây Thạnh", quan:"Tân Phú", thanhpho:"HCM"},
            {id: "003",soNha:"13", phuong:"Tây Thạnh", quan:"Tân Phú", thanhpho:"HCM"},
            {id: "004",soNha:"14", phuong:"Tây Thạnh", quan:"Tân Phú", thanhpho:"HCM"},
            {id: "005",soNha:"15", phuong:"Tây Thạnh", quan:"Tân Phú", thanhpho:"HCM"}
        ]
    }


    handleOnChangeName = (event) =>{
        this.setState(
           {
             name: event.target.value
           }
        )

    }

    handleOnChangeAge =(event) =>
    {
        this.setState({
            age: event.target.value
        })
    }

    handleClickButton=(event)=>{
        event.preventDefault() // không tải lại website
        alert(`Họ tên: ${this.state.name}, tuổi: ${this.state.age}`);
        console.log(`>> check data <<: `, this.state)
    }


    render(){
        return(
            <>

                <form>
                    <label>Tên: </label> <br/>
                    <input type="text" 
                        value={this.state.name} 
                        onChange={(event)=>this.handleOnChangeName(event)}>
                    </input>
                    <br/>
                    <label >Tuổi: </label><br/>
                    <input type="number" 
                        value={this.state.age} 
                        onChange={(event)=>this.handleOnChangeAge(event)}>
                    </input>
                    <br/>
                    <input  type="submit"
                        onClick={(event)=>this.handleClickButton(event)}
                    
                    
                    ></input>
                </form>
            
            
            <ChildComponent name={ this.state.name}
                            age = {this.state.age}
                            addres= {this.state.addres}
            
            />


           

            
            </>
        )

    }


}



export default FormComponent
