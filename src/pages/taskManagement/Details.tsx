import { Avatar, Badge, Button, Card, Divider, Input, List, Typography, } from 'antd';
import { CalendarOutlined, CloseOutlined, FileSearchOutlined, FileTextOutlined, FormOutlined, UpOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { useState } from 'react';
import './task.css'

const Details = () => {
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState<any>([])
  console.log("Notes", notes)
  const handleNoteChange = (e: any) => {
    console.log("e.target.value", e.target.value)
    setNote(e.target.value);
  }

  const handleNoteSubmit = (e: any) => {
    e.preventDefault()
    console.log(e.target.value)
    setNotes([...notes, note]);
    setNote('')
  }

  const data = [
    { title: 'Note 1', description: 'This is the first note.' },
    { title: 'Note 2', description: 'This is the second note.' },
    { title: 'Note 3', description: 'This is the third note.' },
    { title: 'Note 4', description: 'This is the fourth note.' },
    { title: 'Note 5', description: 'This is the fifth note.' },
    { title: 'Note 6', description: 'This is the sixth note.' },
    { title: 'Note 7', description: 'This is the seventh note.' },
    { title: 'Note 8', description: 'This is the eighth note.' },
    { title: 'Note 9', description: 'This is the ninth note.' },
    { title: 'Note 10', description: 'This is the tenth note.' },
  ];


  return (
    <Card
      title={
        <div style={{ display: 'flex', color: 'grey' }}>
          <FileTextOutlined style={{ color: 'green', marginRight: '8px' }} />
          <span>100011-11</span>
        </div>
      }
      style={{ width: 360, borderRadius: '15px', padding: '0 10px' }}
      headStyle={{
        padding: '0'
      }}
      bodyStyle={{
        padding: '0'
      }}
      extra={
        <CloseOutlined
          style={{
            color: 'grey'
          }} />
      }
    >
      <Flex vertical gap={5} style={{
        padding: '10px 0'
      }}>
        <Flex gap={10}>
          <FileSearchOutlined style={{ color: 'blue', fontSize: '1rem' }} />
          <Typography.Text strong>DETAILS</Typography.Text>
        </Flex>
        <Flex vertical gap={10}>
          <Flex>
            <Typography.Text
              strong
              style={{
                color: 'grey',
                minWidth: '120px'
              }}>Department:</Typography.Text>
            <Typography.Text strong>BI</Typography.Text>
          </Flex>
          <Flex align='center'>
            <Typography.Text
              strong
              style={{
                color: 'grey',
                minWidth: '120px'
              }}>Status:</Typography.Text>
            <Button variant="filled" color="primary" size='small' style={{
              fontWeight: '700',
              fontSize: '12px'
            }}>TO DO</Button>
          </Flex>
          <Flex>
            <Typography.Text
              strong
              style={{
                color: 'grey',
                minWidth: '120px'
              }}>Team:</Typography.Text>
            <Typography.Text strong>BI Mail</Typography.Text>
          </Flex>
          <Flex>
            <Typography.Text
              strong
              style={{
                color: 'grey',
                minWidth: '120px'
              }}>Task Description:</Typography.Text>
            <Typography.Text strong>BI Mail/Document Type</Typography.Text>
          </Flex>
          <Flex>
            <Typography.Text
              strong
              style={{
                color: 'grey',
                minWidth: '120px'
              }}>Scanned By:</Typography.Text>
            <Flex gap={5} align='center'>
              <Avatar size='small' />
              <Typography.Text strong>Laura Mercy</Typography.Text>
            </Flex>
          </Flex>
          <Flex>
            <Typography.Text
              strong
              style={{
                color: 'grey',
                minWidth: '120px'
              }}>Assignee:</Typography.Text>
            <Flex gap={5} align='center'>
              <Avatar size='small' />
              <Typography.Text strong>Christoper Nolen</Typography.Text>
            </Flex>
          </Flex>
          <Flex>
            <Typography.Text
              strong
              style={{
                color: 'grey',
                minWidth: '120px'
              }}>Priority:</Typography.Text>
            <Button variant="filled" size='small' color='danger' style={{
              fontWeight: '700',
              fontSize: '12px',
            }} icon={<UpOutlined />}>
              High
            </Button>
          </Flex>
        </Flex>
        <Divider style={{
          margin: '5px 0'
        }} />
        <Flex gap={10}>
          <CalendarOutlined style={{ color: 'blue', fontSize: '1rem' }} />
          <Typography.Text strong>DATE</Typography.Text>
        </Flex>
        <Flex vertical gap={10}>
          <Flex>
            <Typography.Text
              strong
              style={{
                color: 'grey',
                minWidth: '120px'
              }}>Created:</Typography.Text>
            <Typography.Text strong>Sep 01,2024 - 11.32 AM</Typography.Text>
          </Flex>
          <Flex>
            <Typography.Text
              strong
              style={{
                color: 'grey',
                minWidth: '120px'
              }}>Updated:</Typography.Text>
            <Typography.Text strong>Sep 01,2024 - 11.32 AM</Typography.Text>
          </Flex>
          <Flex>
            <Typography.Text
              strong
              style={{
                color: 'grey',
                minWidth: '120px'
              }}>Due date:</Typography.Text>
            <Typography.Text strong>Sep 01,2024 - 11.32 AM</Typography.Text>
          </Flex>
        </Flex>
        <Divider style={{
          margin: '5px 0'
        }} />

        <Flex gap={10}>
          <FormOutlined style={{ color: 'blue', fontSize: '1rem' }} />
          <Typography.Text strong>TASK NOTES</Typography.Text>
          <Badge style={{ background: '#F0F0F0', color: "grey", fontWeight: '600' }}
            count={10} />
        </Flex>

        <Input placeholder='Leave Notes' style={{
          fontWeight: '600'
        }}
          onPressEnter={handleNoteSubmit}
          value={note}
          onChange={handleNoteChange}
        ></Input>
        <div className='list'> 
        <List
          itemLayout="horizontal"
          dataSource={data}
          split={false}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                title={
                  <Flex justify='space-between'>
                    <a href="https://ant.design">{item.title}</a>
                    <p>time</p>
                  </Flex>
                }
                description={
                  <div style={{ backgroundColor: '#f0f0f0', padding: '2px 8px', borderRadius: '4px' }}>
                    <p>Notes one two three four five six seven eight</p>
                  </div>
                }
              />
            </List.Item>
          )}
        />
        </div>
      </Flex>

    </Card>

  )
}

export default Details