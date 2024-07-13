import React from 'react';
import { Form, Input, Button, Layout, Typography, message } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;
const { Content } = Layout;

const Login = ({ history }) => {
  const handleLogin = (values) => {

    console.log('Giriş başarılı! Kullanıcı:', values.email);


    message.success('Giriş yapıldı');


    history.push('/');
  };

  return (
    <Layout className="layout">
      <Content style={{ padding: '50px', maxWidth: '600px', margin: '0 auto', backgroundColor: '#f0f2f5' }}>
        <div style={{ textAlign: 'center' }}>
          <Title level={2}>Giriş Yap</Title>
        </div>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={handleLogin}
          onFinishFailed={(errorInfo) => {
            console.log('Failed:', errorInfo);
          }}
        >
          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, message: 'Lütfen e-posta adresinizi giriniz!' }]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Şifre"
            name="password"
            rules={[{ required: true, message: 'Lütfen şifrenizi giriniz!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Giriş Yap
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/questionform">Soru Ekle</Link>
        </div>
      </Content>
    </Layout>
  );
};

export default Login;
