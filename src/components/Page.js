import React from 'react';
import { Form, Input, Button, Typography, Layout, Row, Col, Radio } from 'antd';
import { Link } from 'react-router-dom';
import '../App.css';

const { Title } = Typography;
const { Content } = Layout;

const Page = () => {
  const onFinish = (values) => {

    console.log('Success:', values);
    alert('Bilgileriniz başarıyla kaydedildi!');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout className="layout">
      <Content style={{ padding: '50px', maxWidth: '600px', margin: '0 auto' }}>
        <Row justify="center">
          <Col span={24}>
            <div className="profile-container">
              <Title level={2}>Profil Oluştur</Title> 
              <Form
                name="profile"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Ad Soyad"
                  name="name"
                  rules={[{ required: true, message: 'Lütfen isminizi giriniz!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="E-mail"
                  name="Email"
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

                <Form.Item
                  label="Rol"
                  name="role"
                  rules={[{ required: true, message: 'Lütfen rolünüzü seçiniz!' }]}
                >
                  <Radio.Group>
                    <Radio value="student">Öğrenci</Radio>
                    <Radio value="teacher">Öğretmen</Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Kaydet
                  </Button>
                </Form.Item>
              </Form>
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Link to="/login">Giriş Yap</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Page;
