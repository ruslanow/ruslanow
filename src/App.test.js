import { render, screen } from '@testing-library/react';
import MainApp from "./App";
import * as ReactDOM from "react-dom";


test('render without broken', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div);
})

