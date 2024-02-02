import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLiveQuery } from 'dexie-react-hooks'

import routes from '@/routes'
import { Link, Pagination } from '@/components/common'
import { Layout } from '@/components/layout'
import { CardList } from '@/components/wiki'
import { getAllItems } from '@/apis/wiki'

export default function List() {
  const items = useLiveQuery(() => getAllItems(), []) ?? []

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1

  const [currentPage, setCurrentPage] = useState(page)
  const perPage = 5

  const totalPages = Math.ceil(items.length / perPage)
  const startIndex = (currentPage - 1) * perPage
  const endIndex = Math.min(startIndex + perPage - 1, items.length - 1)

  const handlePageChange = (index: number) => {
    setCurrentPage(index)
  }

  return (
    <Layout title='위키 목록'>
      <Link label='추가' href={routes.add} />
      <CardList items={items.slice(startIndex, endIndex + 1)} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        perPage={perPage}
        onPageChange={handlePageChange}
      />
    </Layout>
  )
}
