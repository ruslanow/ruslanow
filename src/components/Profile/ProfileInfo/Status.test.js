import Status from "./Status";
import { create } from "react-test-renderer";
import TestRenderer from 'react-test-renderer';
const {act} = TestRenderer;


describe('Profile Status Component', () => {

    test('<span> should be displayed after creating a component', () => {
        const component = create(<Status status='some status'/>)
        const instance = component.root
        const span = instance.findByType("span");
        expect(span).not.toBeNull()
    })

    test('<span> should be displayed with correct props', () => {
        const component = create(<Status status='some status'/>)
        const instance = component.root
        const span = instance.findByType("span");
        expect(span.props.children).toBe('some status')
    })
    test('<input> shouldn`t be displayed', () => {
        const component = create(<Status status='some status'/>)
        const instance = component.root
        expect(() => {
            act ( () => instance.findByType("input"))
        }).toThrow()
    })
    test('<input> shouldn be displayed after doubleClick', () => {
        const component = create(<Status status='some status'/>)
        const root = component.root
        const span = root.findByType("span")
        act( () => span.props.onDoubleClick())
        const input = root.findByType("input");
        expect(input.props.value).toBe("some status")
    })

    test('callback should be called', ()=> {
        const mockCallback = jest.fn()
        const component = create(<Status status={'some status'} updateStatus={mockCallback} />)
        const instance = component.root
        const span = instance.findByType("span")
        act (() => span.props.onDoubleClick())
        const input = instance.findByType("input")
        act (() => input.props.onBlur())
        expect(mockCallback.mock.calls.length).toBe(1)
    })
} )