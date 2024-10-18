import React from 'react';
import { Layout, Typography, Button, Col, Row } from 'antd';
const { Header, Sider, Content } = Layout;
import { FileOutlined, EditOutlined, EyeOutlined, ShareAltOutlined, DownloadOutlined, PrinterOutlined, DeleteOutlined, MoreOutlined } from '@ant-design/icons';
import { withAnimatedIcon } from '../../../lib/hoc';

const AnimatedIconButton = withAnimatedIcon(Button);

const Document: React.FC = () => {
  return (
    <>
      <Layout style={{ color: '#344054' }}>
        <Sider style={{ backgroundColor: '#fff', padding: '8px' }}>
          <Typography.Title level={5}>Documents</Typography.Title>
        </Sider>
        <Layout>
          <Header style={{ backgroundColor: '#fff', paddingLeft: '0px' }}>
            <Row>
              <Col span={24}>
                <Row align="middle">
                  <Col span={4}>
                    <Typography.Title level={2}>100002</Typography.Title>
                  </Col>
                  <Col span={20}>
                    <Row gutter={[12, 0]} justify="end" align="middle" style={{ padding: '12px 0' }}>
                      <Col>
                        <AnimatedIconButton icon={<FileOutlined />} type="default">
                          File
                        </AnimatedIconButton>
                      </Col>
                      <Col>
                        <AnimatedIconButton icon={<EditOutlined />} type="default">
                          Edit
                        </AnimatedIconButton>
                      </Col>
                      <Col>
                        <AnimatedIconButton icon={<EyeOutlined />} type="default">
                          View
                        </AnimatedIconButton>
                      </Col>
                      <Col>
                        <AnimatedIconButton icon={<ShareAltOutlined />} type="default">
                          Share
                        </AnimatedIconButton>
                      </Col>
                      <Col>
                        <AnimatedIconButton icon={<DownloadOutlined />} type="default">
                          Download
                        </AnimatedIconButton>
                      </Col>
                      <Col>
                        <AnimatedIconButton icon={<PrinterOutlined />} type="default">
                          Print
                        </AnimatedIconButton>
                      </Col>
                      <Col>
                        <AnimatedIconButton icon={<DeleteOutlined />} type="default">
                          Delete
                        </AnimatedIconButton>
                      </Col>
                      <Col>
                        <AnimatedIconButton icon={<MoreOutlined />} type="default">
                          More
                        </AnimatedIconButton>
                      </Col>
                      <Col>
                        <Button type="primary">New Folder</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <hr style={{ border: '0.5px solid #EAECF0', margin: 0 }} />
              </Col>
            </Row>
            <hr style={{ border: '0.5px solid #EAECF0', margin: 0 }} />
          </Header>
          <Content style={{ background: '#EAECF0' }}>This is content</Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Document;
