import React, { useState } from 'react';
import { Form, Input, Button, Layout, Typography, Select } from 'antd';

const { Title } = Typography;
const { Content } = Layout;
const { Option } = Select;

const QuestionForm = () => {
  const [numQuestions, setNumQuestions] = useState(1); 
  const [questions, setQuestions] = useState([]); 
  const [testResults, setTestResults] = useState(null); 

  const handleSubmit = (values) => {
    console.log('Submitted values:', values);
    setQuestions([...questions, values]);
  };

  const handleNumQuestionsChange = (value) => {
    setNumQuestions(value); 
  };

  const questionItems = [];
  for (let i = 0; i < numQuestions; i++) {
    questionItems.push(
      <div key={i} style={{ marginBottom: '20px', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '8px', boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}>
        <Title level={4}>Soru {i + 1}</Title>
        <Form
          name={`questionForm_${i}`}
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          onFinishFailed={(errorInfo) => {
            console.log('Failed:', errorInfo);
          }}
        >
          <Form.Item
            label="Soru"
            name={`question_${i}`}
            rules={[{ required: true, message: 'Lütfen soruyu giriniz!' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="Doğru Cevap"
            name={`correctAnswer_${i}`}
            rules={[{ required: true, message: 'Lütfen doğru cevabı giriniz!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Seçenekler"
            name={`options_${i}`}
            rules={[{ required: true, message: 'Lütfen soru seçeneklerini giriniz!' }]}
          >
            <Input.TextArea rows={3} placeholder="Her bir seçeneği ayrı bir satıra yazınız." />
          </Form.Item>

          <Form.Item
            label="Doğru Seçenek"
            name={`correctOption_${i}`}
            rules={[{ required: true, message: 'Lütfen doğru seçeneği seçiniz!' }]}
          >
            <Select placeholder="Doğru seçeneği seçiniz">
              <Option value="A">A</Option>
              <Option value="B">B</Option>
              <Option value="C">C</Option>
              <Option value="D">D</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Gönder
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }

  const handleFinishTest = (values) => {
    const results = [];
    questions.forEach((question, index) => {
      const userAnswer = values[`answer_${index}`];
      const correctAnswer = question[`correctAnswer_${index}`];
      results.push({
        question: question[`question_${index}`],
        userAnswer,
        correctAnswer,
        isCorrect: userAnswer === correctAnswer,
      });
    });
    setTestResults(results);
  };

  const testResult = testResults && (
    <div style={{ marginTop: '20px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <Title level={3}>Test Sonucu</Title>
      {testResults.map((result, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <Title level={4}>Soru {index + 1}</Title>
          <p>{result.question}</p>
          <p style={{ marginBottom: '5px' }}>Sizin Cevabınız: {result.userAnswer}</p>
          <p>Doğru Cevap: {result.correctAnswer}</p>
          <p style={{ color: result.isCorrect ? 'green' : 'red' }}>
            {result.isCorrect ? 'Doğru!' : 'Yanlış!'}
          </p>
        </div>
      ))}
    </div>
  );

  // Test formu oluştur
  const testForm = (
    <Form
      name="testForm"
      onFinish={handleFinishTest}
      style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', marginTop: '20px' }}
    >
      <Title level={3}>Test Yap</Title>
      {questions.map((question, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <Title level={4}>Soru {index + 1}</Title>
          <p>{question[`question_${index}`]}</p>
          <Form.Item
            name={`answer_${index}`}
            label="Cevabınız"
            rules={[{ required: true, message: 'Lütfen cevabınızı giriniz!' }]}
          >
            <Input />
          </Form.Item>
          <p>Doğru Cevap: {question[`correctAnswer_${index}`]}</p>
        </div>
      ))}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Testi Bitir
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <Layout className="layout">
      <Content style={{ padding: '50px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Title level={2}>Soru Ekle</Title>
          <Select defaultValue={1} style={{ width: 120, marginLeft: '10px' }} onChange={handleNumQuestionsChange}>
            <Option value={1}>1 Soru</Option>
            <Option value={2}>2 Soru</Option>
            <Option value={3}>3 Soru</Option>
            <Option value={4}>4 Soru</Option>
            <Option value={5}>5 Soru</Option>
          </Select>
        </div>
        {questionItems}
        {questions.length > 0 && testForm}
        {testResults && testResult}
      </Content>
    </Layout>
  );
};

export default QuestionForm;
