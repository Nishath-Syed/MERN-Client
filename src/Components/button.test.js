import React from "react"; 
import {render,fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from "./button";

test('Render button with Label',()=>{
    const {getByText}=render(
    <Button label="Click Me!"/>)
    const buttonElement=getByText('Click Me!');
    expect(buttonElement).toBeInTheDocument();
});

//className=btn
test('ClassName btn present',()=>{
    const {container}=render(
        <Button label="Click Me!"/>
    )
    const buttonElement=container.querySelector('button');
    expect(buttonElement).toHaveClass('btn');
})

//fireEvent to click my button
test('Button is Clicked',()=>{
    const onClickMock=jest.fn();
    const button=render(
        <Button label="Click Me!"
        onClick={onClickMock}/>)
        const buttonElement=button.getByText('Click Me!');
        fireEvent.click(buttonElement) //simulate the button click
        fireEvent.click(buttonElement)
        expect(onClickMock).toHaveBeenCalledTimes(2);
})

/*const mockFun = jest.fn();

test('fun',()=>{
    mockFun();
    mockFun();
    expect(mockFun).toHaveBeenCalledTimes(2);
})*/