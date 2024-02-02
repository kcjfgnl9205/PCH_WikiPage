import { db } from '@/apis/db'
import { Wiki } from '@/types'

// 데이터 추가
export const addItem = async (item: Wiki) => {
  try {
    return await db.wikis.add({
      title: item.title,
      content: item.content,
    })
  } catch (error) {
    return null
  }
}

// 모든 데이터 조회
export const getAllItems = async () => {
  try {
    return (await db.wikis.toArray()).sort(
      (a, b) => Number(b.id) - Number(a.id),
    )
  } catch (error) {
    return []
  }
}

// 데이터 상세 조회
export const getItemById = async (id: number) => {
  try {
    return await db.wikis.where('id').equals(id).first()
  } catch (error) {
    return null
  }
}

// 데이터 업데이트
export const updateItem = async (id: number, item: Wiki) => {
  try {
    return await db.wikis.update(id, {
      title: item.title,
      content: item.content,
    })
  } catch (error) {
    return null
  }
}

// 데이터 삭제
export const deleteItem = async (id: number) => {
  try {
    await db.wikis.delete(id)
  } catch (error) {
    return null
  }
}
