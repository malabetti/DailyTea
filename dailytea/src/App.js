import { useState, useEffect } from 'react';
import { BarLoader } from 'react-spinners';
import ProductCard from './components/productCard';

const styles = {
  app: {
    textAlign: 'center',
    padding: '20px 0', 
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
    overflow: 'hidden', 
  },
  h1: {
    padding: '0 20px', 
  },
  productList: {
    listStyleType: 'none',
    padding: '20px', 
    display: 'flex',
    flexWrap: 'nowrap', 
    overflowX: 'auto', 
    gap: '20px',
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }
};

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados da API');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={styles.centered}>
        <BarLoader />
      </div>
    );
  }
  
  if (error) {
    return (
      <div style={styles.centered}>
        <p> Erro: {error} </p>
      </div>
    );
  }

  return (
    <div style={styles.app}>
      <h1 style={styles.h1}>Menu de Cafés</h1>
      <ul style={styles.productList}>
        {products.map((item) => {
          if (!item.image) {
            return null;
          }
          return (
            <ProductCard key={item.id} product={item} />
          )
        })}
      </ul>
    </div>
  );
}

export default App;