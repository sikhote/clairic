import css from 'styled-jsx/css';
import { spacing } from './base';

// prettier-ignore
export default css`
  .root {
    padding-left: ${spacing.medium}px;
    padding-right: ${spacing.medium}px;
    padding-top: ${spacing.medium}px;
    padding-bottom: ${spacing.medium}px;
    background:
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.03) 100%);

    .easy-grid {
      display: grid;
      grid-template-columns: auto;
      grid-auto-columns: auto;
      grid-auto-flow: column;
      grid-gap: ${spacing.large}px;
      align-items: center;
    }

    .main {
      grid-template-columns: auto 1fr;

      .directions {
        grid-gap: ${spacing.medium}px;
      }

      .controls {
        grid-template-columns: 200px auto;

        .control {
          grid-template-columns: auto auto 1fr;
          grid-gap: ${spacing.medium}px;
          max-width: 400px;
        }
      }
    }

    .info {
      padding-top: ${spacing.medium}px;
    }
  }
`;
