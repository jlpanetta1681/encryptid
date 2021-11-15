import { Input, Button, Form } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'antd/dist/antd.css';
export default function Home() {
  const [form] = Form.useForm();
  const [img, setImg] = useState('')
  const [data, setData] = useState(null)
  useEffect(() => {
    console.log("here")
    axios.get('http://localhost:5001/api/cryptids')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])


  const onFinish = (value) => {
    if (img) {
      value.cryptids_id = data.cryptids_id
      axios.put('http://localhost:5001/api/cryptids', value).then(()=>{
        location.reload();
      })
    } else {
      setImg(value.img_url)
    }
  }
  return (
    <div className='m-10'>
      {data && <Form className='flex flex-col h-full' form={form} onFinish={onFinish} initialValues={{ title: data.title }}>
        <a href={data?.source_url}>{data.source_url}</a>
        <img src={img} alt='image goes here' className='mb-5 h-60 object-cover' />
        <Form.Item name="title" className='mb-5' >
          <Input className='h-12' placeholder='title' />
        </Form.Item>
        <Form.Item name="img_url" className='mb-5' >
          <Input placeholder='Image Url' className='h-12' />
        </Form.Item>
        <Form.Item name="descriptions">
          <Input placeholder='descriptions' className='h-40' />
        </Form.Item>
        <Button className='mt-2' htmlType='submit'>{img ? "submit" : "preview"}</Button>
      </Form>}
    </ div>
  )
}
