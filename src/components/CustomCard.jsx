import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const CustomCard = ({source,title , description}) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="img" src={source} />}
  >
    <Meta title={title} description={description} />
  </Card>
);
export default CustomCard;
