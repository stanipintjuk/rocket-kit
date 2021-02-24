import React from 'react';
import { render, screen } from '@testing-library/react';
import { TagNumber } from '../../..';

describe('Tag Number', () => {
  it('renders', () => {
    const { asFragment } = render(<TagNumber label={'Example'} value={10} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct value', async () => {
    const tagLabel = 'Tag Example';
    const tagValue = 10;
    render(<TagNumber label={tagLabel} value={tagValue} />);
    await screen.getByText(tagLabel);
  });
});