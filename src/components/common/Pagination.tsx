import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PaginationItem from '@/components/common/PaginationItem'

interface Props {
  // 현재 페이지
  currentPage: number

  // 한 페이지에 보여줄 아이템 갯수
  perPage: number

  // 전체 페이지 수
  totalPages: number

  // Pagination 보여질 최대 버튼 수
  count?: number

  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  perPage,
  count = 5,
  onPageChange,
}: Props) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = useCallback(
    (page: number) => {
      const searchParams = new URLSearchParams(location.search)

      searchParams.set('page', page.toString())
      searchParams.set('perPage', perPage.toString())

      const newSearch = searchParams.toString()
      const url = `${location.pathname}${newSearch ? `?${newSearch}` : ''}`

      onPageChange(page)
      navigate(url)
    },
    [navigate, location.pathname, location.search, onPageChange, perPage],
  )

  const renderPageButtons = () => {
    const buttons = []

    // 시작 페이지, 마지막 페이지
    let startPage = Math.max(1, currentPage - Math.floor(count / 2))
    const endPage = Math.min(startPage + count - 1, totalPages)

    // 시작 페이지
    startPage = Math.max(1, endPage - count + 1)

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <PaginationItem
          key={i}
          n={i}
          selected={i === currentPage}
          onClick={() => handleClick(i)}
        />,
      )
    }

    return buttons
  }

  return (
    <ul className='flex justify-center gap-2 my-4'>
      {currentPage > 1 && (
        <PaginationItem prev onClick={() => handleClick(currentPage - 1)} />
      )}

      {renderPageButtons()}

      {currentPage < totalPages && (
        <PaginationItem next onClick={() => handleClick(currentPage + 1)} />
      )}
    </ul>
  )
}
