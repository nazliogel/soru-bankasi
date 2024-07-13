import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const Home = () => {
  const styles = {
    homeContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      position: 'relative',
    },
    homeContent: {
      textAlign: 'center',
      background: 'linear-gradient(to bottom, #FFA500, #000000)', 
      padding: '20px',
      borderRadius: '10px',
      position: 'relative',
      zIndex: 1,
      color: '#fff', 
      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)', 
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 0,
    },
  };

  return (
    <Layout className="layout">
      <Content style={styles.homeContainer}>
        <img src="/assets/resim1.jpg" alt="Background" style={styles.backgroundImage} />
        <div style={styles.homeContent}>
          <Title level={1}>HOŞ GELDİNİZ!</Title>
          <Link to="/profile" style={{ color: '#fff', fontSize: '18px' }}>Profil Oluştur</Link>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
