import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import TutorCard from '../../components/TutorCard'

test('renders link with correct href and target', () => {
  const { container } = render(<TutorCard id={42} name="Test" subject="Math" rating={5} />)
  const link = container.querySelector('a')
  expect(link).toHaveAttribute('href', '/tutors/42')
  expect(link).toHaveAttribute('target', '_blank')
  expect(link).toHaveAttribute('rel', 'noopener noreferrer')
})
