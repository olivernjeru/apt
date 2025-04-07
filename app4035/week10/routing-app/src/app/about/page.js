"use client";

import React from 'react';
import { Carousel } from 'antd';
import Typography from 'antd/lib/typography';

const { Title, Paragraph } = Typography;

export default function About() {
    const contentStyle = {
        height: '160px',
        color: '#ff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79'
    };
    const data = [
        {
            id: 1,
            name: 'John Doe',
            title: 'Director'
        },
        {
            id: 2,
            name: 'Jane Doe',
            title: 'Managing Director'
        }
    ];
    const listItems = data.map((employee) =>
        <li key={employee.id.toString()}>
            {employee.name} | {employee.title}
        </li>
    );
    return (
        <div>
            <Title level={1} style={contentStyle}>This is the About Page</Title>
            <div style={{ width: 50 + '%', margin: 'auto' }}>
                <Carousel autoplay>
                    <Title level={3} style={contentStyle}>1</Title>
                    <Title level={3} style={contentStyle}>2</Title>
                    <Title level={3} style={contentStyle}>3</Title>
                    <Title level={3} style={contentStyle}>4</Title>
                </Carousel>
            </div>
            <Paragraph>Below are our staff members:</Paragraph>
            <ul>{listItems}</ul>
        </div>
    );
}
