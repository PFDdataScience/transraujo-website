// filepath: /c:/Z ARQUIVOS/transraujo-website/src/App.test.tsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// filepath: /c:/Z ARQUIVOS/transraujo-website/jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

// filepath: /c:/Z ARQUIVOS/transraujo-website/src/setupTests.ts
import '@testing-library/jest-dom/extend-expect';