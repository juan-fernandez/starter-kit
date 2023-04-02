import { Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BiMessageSquareEdit, BiCog } from 'react-icons/bi'
import { Sidebar } from './Sidebar'

export const DashSidebar = () => {
  const { pathname } = useRouter()

  return (
    <Flex minW="13.5rem">
      <Sidebar
        items={[
          {
            label: 'Feedback',
            icon: <BiMessageSquareEdit fontSize="1.5rem" />,
            props: {
              isActive: pathname === '/',
              as: Link,
              href: '/',
            },
          },
          {
            label: 'Settings',
            icon: <BiCog fontSize="1.5rem" />,
            props: {
              isActive: pathname === '/settings',
              as: Link,
              href: '/settings',
            },
          },
        ]}
      />
    </Flex>
  )
}
