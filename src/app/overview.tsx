import React from 'react';
import { Layout, Row, Col, Button, Typography } from 'antd';

const { Header, Content } = Layout;
const { Title } = Typography;

const MyPage: React.FC = () => {
  return (
      <Layout>
        <Header>
          {/* Place your header content here */}
        </Header>
        <Content style={{ padding: '20px' }}>
          <Row>
            <Col span={12}>
              <Title level={2}>Subtitle</Title>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              {/* Place your control buttons here */}
              <Button type="primary">Button 1</Button>
              <Button>Button 2</Button>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginTop: '20px' }}>
            <Col span={12}>
              {/* Graph 1 */}
            </Col>
            <Col span={12}>
              {/* Graph 2 */}
            </Col>
          </Row>
        </Content>
      </Layout>
  );
};

export default MyPage;
