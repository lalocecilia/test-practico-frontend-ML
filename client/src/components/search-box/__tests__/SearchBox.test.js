import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import SearchBox from '../SearchBox';

afterEach(cleanup);

test('Render component SearchBox', () => {
  const history = createMemoryHistory();
  history.push('/');
  const { getByAltText, getByPlaceholderText } = render(
    <Router history={history}>
      <SearchBox query="texto inicial" />
    </Router>
  );

  expect(getByAltText('Mercado Libre')).toBeInTheDocument();
  expect(getByAltText('Buscar')).toBeInTheDocument();
  const input = getByPlaceholderText('Nunca dejes de buscar');
  expect(input.value).toBe('texto inicial');

  fireEvent.change(input, { target: { value: 'texto ingresado' } });
  expect(input.value).toBe('texto ingresado');
});
