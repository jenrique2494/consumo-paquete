
import './App.css';
import {ProductCard,ProductImage,ProductTitle, ProductButtons} from 'jepm-product-card'

const product={
  id:'1',
  title:'Coffee Mug - Card',
  img:'./coffee-mug.png'
}

function App() {
  return (
    <div className="App App-header">
        <ProductCard 
            product={ product} 
            initialValues={{
                count:4,
                maxCount:10,
            }}
        >
            {
                ({count,maxCount,reset,increaseBy, isMaxCountReached})=>(
                    <>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />
                        {count}
                        <button onClick={reset}>Reset</button>
                    </>
                )
            }
        </ProductCard>
    </div>
  );
}

export default App;
