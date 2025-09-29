import React from 'react';

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    width: '300px',
    flexShrink: 0, 
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    transition: 'transform 0.2s',
  },
  cardImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  cardContent: {
    paddingTop: '10px',
  },
  cardTitle: {
    fontSize: '1.25rem',
    margin: '10px 0',
  },
  cardDescription: {
    fontSize: '0.9rem',
    color: '#555',
  },
};

const ProductCard = ({ product }) => {
  return (
    <li style={styles.card}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img src={product.image} alt={product.title} style={styles.cardImage} />
      <div style={styles.cardContent}>
        <h2 style={styles.cardTitle}>{product.title}</h2>
        <p style={styles.cardDescription}>{product.description}</p>
      </div>
    </li>
  );
};

export default ProductCard;