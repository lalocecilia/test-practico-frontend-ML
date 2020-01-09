import React from 'react';
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import resultsMock from 'MOCKS/resultsMock';
import Items from '../Items';

afterEach(cleanup);

test('Render component Items', () => {
  const { getByAltText, getByText, getAllByText } = render(
    <Items items={resultsMock.items} />
  );

  // 1 item
  expect(getByAltText('iPod Touch 32 Gb -representante Oficial De Apple-')).toBeInTheDocument();
  expect(getByText('21499')).toBeInTheDocument();
  expect(getByText('iPod Touch 32 Gb -representante Oficial De Apple-')).toBeInTheDocument();

  // 2 item
  expect(getByAltText('iPod Touch 32 Gb 6 Cuotas Sin Interes!!!')).toBeInTheDocument();
  expect(getByText('24799')).toBeInTheDocument();
  expect(getByText('iPod Touch 32 Gb 6 Cuotas Sin Interes!!!')).toBeInTheDocument();

  // 3 item
  expect(getByAltText('iPod 64 Gb Por Unidad')).toBeInTheDocument();
  expect(getByText('4000')).toBeInTheDocument();
  expect(getByText('iPod 64 Gb Por Unidad')).toBeInTheDocument();

  // 4 item
  expect(getByAltText('iPod Touch 4 Gen 8 Gb')).toBeInTheDocument();
  expect(getByText('2200')).toBeInTheDocument();
  expect(getByText('iPod Touch 4 Gen 8 Gb')).toBeInTheDocument();

  // common items
  expect(getAllByText('Capital Federal').length).toBe(3);
  expect(getAllByText('Capital Federal').length).not.toBe(4);
  expect(getByText('Santa Fe')).toBeInTheDocument();
  expect(getAllByText('$').length).toBe(4);
});
