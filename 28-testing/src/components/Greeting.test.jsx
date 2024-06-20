import { screen,render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting"; 

describe('greeting components',()=>{
    test( 'renders greeting message', () =>{
        //Arrange
        render(<Greeting/>)
        //Act
        
        //Assert
        const helloEllement=screen.getByText('hello world',{exact:false})
        expect(helloEllement).toBeInTheDocument()
    })
    test( 'renders to see no change', () =>{
        //Arrange
        render(<Greeting/>)
        //Act
    
        //Assert
        const helloEllement=screen.getByText('click this button to change me',{exact:false})
        expect(helloEllement).toBeInTheDocument()
    })
    test( 'renders to see change', () =>{
        //Arrange
        render(<Greeting/>)
        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        //Assert
        const helloEllement=screen.getByText('changed',{exact:false})
        expect(helloEllement).toBeInTheDocument()
    })
    test( 'renders to see check  change', () =>{
        //Arrange
        render(<Greeting/>)
        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        //Assert
        const helloEllement=screen.queryByText('click this button to change me',{exact:false})
        expect(helloEllement).toBeNull()
    })
})

