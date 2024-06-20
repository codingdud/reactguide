import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCT=[
  {
    id:'p1',
    price:6,
    title:'first book',
    description:'the first book which i read'
  },
  {
    id:'p2',
    price:16,
    title:'second book',
    description:'the second book which i see'
  },
  {
    id:'p3',
    price:7,
    title:'third book',
    description:'the third book which i read'
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map(item=><ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
