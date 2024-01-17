import Image from 'next/image'
import styles from './page.module.css'
import { Layout, Row, Col, Button, Typography } from 'antd';
import Content  from 'antd/lib/layout';
import Header  from 'antd/lib/layout';
import Title from 'antd/lib/typography';

export default function Home() {
  return (
      <Layout>
        <Header>
            <Title level={2}>Subtitle</Title>
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
  )
}
