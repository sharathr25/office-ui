import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

describe("LoginForm", () => {
    test("should have radio buttons admin and employee and admin should checked", () => {
        const { container } = render(<LoginForm />)
        const radioButtons = container.querySelectorAll('.radio');
        expect(radioButtons.length).toBe(2);
        expect(radioButtons[0].textContent).toBe('Admin');
        expect(radioButtons[1].textContent).toBe('Employee');
        expect(radioButtons[0].getAttribute('class')).toContain('radio--isActive');
        expect(radioButtons[1].getAttribute('class')).not.toContain('radio--isActive');
    });
    test("should have email and passowrd input", () => {
        const { container } = render(<LoginForm />)
        const inputs = container.querySelectorAll('.input-container');
        expect(inputs.length).toBe(2);
        expect(inputs[0].textContent).toContain('Email');
        expect(inputs[1].textContent).toContain('Password');
    });
    test("should have login button", () => {
        const { container } = render(<LoginForm />)
        const loginbutton = container.getElementsByTagName('button')[0];
        expect(loginbutton.textContent).toBe('Login');
    })
})

