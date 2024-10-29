import React from "react";

class FormComponent extends React.Component
{
    state = {
        name:'',
        age : ''
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
            

            
            </>
        )

    }


}



export default FormComponent
