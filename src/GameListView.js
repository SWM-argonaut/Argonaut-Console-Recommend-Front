import React from 'react';
import {
  ChakraProvider,
  Box,
  Image,
  Badge,
  StarIcon,
  Text,
  Link,
  VStack,
  Center,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { Logo } from './Logo';

const tmpList = [
  {
    title: '마리오골프 슈퍼러시',
    price: 62210,
    imgUrl:
      'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2021/05/27/17/1/7aa4cc96-9e4e-45fa-9461-c579ebb1c3dd.jpg',
    rating: 5,
  },
  {
    title: '젤다의 전설 스카이워드',
    price: 58010,
    imgUrl:
      'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2021/06/10/16/5/119b76da-0aa7-4382-94be-5481e132650f.jpg',
    rating: 5,
  },
  {
    title: '룬팩토리5',
    price: 58030,
    imgUrl:
      'https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2021/06/07/18/2/122fa323-2d17-454a-9c11-532e930e3a46.jpg',
    rating: 5,
  },
  {
    title: '보이드 테라리움',
    price: 49540,
    imgUrl:
      'https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2021/05/12/11/3/c1234bb5-e843-4385-af39-03e7dd1890ec.jpg',
    rating: 5,
  },
  {
    title: '링 피트 어드밴처',
    price: 78000,
    imgUrl:
      'https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2019/10/14/18/8/ff824ac9-09a4-4282-b288-8a206e0eccb5.jpg',
    rating: 5,
  },
  {
    title: '테스트요',
    price: 12345,
    imgUrl: 'http://www.autoherald.co.kr/news/photo/201902/34148_55038_121.jpg',
    rating: 4,
  },
];

function _buildListItem({ title, price, imgUrl, rating }) {
  return (
    <Center>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={imgUrl} borderRadius="lg" />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Box>

          <Box>{price}원</Box>

          {/* <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon key={i} color={i < rating ? 'teal.500' : 'gray.300'} />
            ))}
        </Box> */}
        </Box>
      </Box>
    </Center>
  );
}

export default function GameListView() {
  return <Box>{tmpList.map(item => _buildListItem(item))}</Box>;
}
