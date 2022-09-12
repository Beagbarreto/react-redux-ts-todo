import React from 'react';
import { render, RenderAPI } from '@testing-library';

import Card from './Card';

describe('Card', () => {
  let component: RenderAPI;
  beforeEach(() => {
    component = render(<Card />);
  })
  it('Card renders correctly', () => {
    expect(component).not.toBeNull();
  });
});