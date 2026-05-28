import { writeFileSync } from 'fs';

const content = `export const environment = {
  production: true,
  sanityProjectId: '${process.env.SANITY_PROJECT_ID}',
  sanityDataset: '${process.env.SANITY_DATASET}',
  sanityToken: '${process.env.SANITY_TOKEN}'
};
`;

writeFileSync('./src/environments/environment.prod.ts', content);
console.log('environment.prod.ts generado');