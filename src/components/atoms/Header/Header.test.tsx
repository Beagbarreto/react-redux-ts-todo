import React from 'react';
import { render, screen, RenderAPI } from '@testing-library';

import Header from './Header';

describe('Header', () => {
  let component: RenderAPI;
  beforeEach(() => {
    component = render(<Header />);
  })
  it('Header renders correctly', () => {
    expect(component).not.toBeNull();
  });
  it('Has a title text', () => {
    const titleEl = screen.getByText('Pendings');
    expect(titleEl).toBeInTheDocument();
  });
});