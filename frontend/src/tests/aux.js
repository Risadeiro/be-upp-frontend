import React from 'react';
import App from '../App';
import FirstPage from '../components/FirstPage';
import { mount, render, shallow } from 'enzyme';
import toJson from "enzyme-to-json";
import { Typography } from '@material-ui/core';
import UserForm from '../components/UserForm';
import { fireEvent } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
//import renderer from 'react-test-renderer';

it("should render the homepage", () => {
    const app = mount(<FirstPage></FirstPage>);

    expect(app.find(Typography).at(1).text()).toEqual("Preencha a seguir o formulário pré-consulta")
    //expect(toJson(app)).toMatchSnapshot()
})

it("should render the homepage -> testing manually", () => {
    const app = mount(<FirstPage></FirstPage>);
    expect(app.find(Typography).at(1).text()).toEqual("Preencha a seguir o formulário pré-consulta")
    //expect(toJson(app)).toMatchSnapshot()
})

it("should render the app", () => {
    const app = mount(<App />);
    //expect(app.find(Typography).at(1).text()).toEqual("Preencha a seguir o formulário pré-consulta:")
    expect(toJson(app)).toMatchSnapshot()
})

it("should render the Userform", () => {
    const app = mount(
        <MemoryRouter initialEntries={[{ pathname: "/fpc/2", key: "6g0588" }]}>
            <UserForm />
        </MemoryRouter>
    );
    //expect(app.find(Typography).at(1).text()).toEqual("Preencha a seguir o formulário pré-consulta:")
    expect(toJson(app)).toMatchSnapshot()
})

it('validate user inputs, and provides error messages', async () => {
    const app = render(
        <MemoryRouter initialEntries={[{ pathname: "/fpc/2", key: "6g0588" }]}>
            <UserForm />
        </MemoryRouter>
    )
    console.log(app)

    // await act(async () => {
    //     fireEvent.change(screen.getByLabelText(/username/i), {
    //         target: { value: '' },
    //     });

    //     fireEvent.change(screen.getByLabelText(/password/i), {
    //         target: { value: '' },
    //     })
    // });

    // await act(async () => {
    //     fireEvent.submit(getByTestId('form'))
    // });

    // expect(getByText("User Name is required")).toBeInTheDocument();
    // expect(getByText("Password is required")).toBeInTheDocument();
});