import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running shoes',
    price: '$100',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-asics-running-shoes-1636736175.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple Macbook',
    price: '$1000',
    image:
      'https://helios-i.mashable.com/imagery/reviews/03y8gbj1mqCuexgXxFJ5vyX/hero-image.fill.size_1248x702.v1623391330.jpg',
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify='center' spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
