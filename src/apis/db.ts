import Dexie, { Table } from 'dexie'
import { Wiki } from '@/types'

export class MySubClassedDexie extends Dexie {
  wikis!: Table<Wiki>

  constructor() {
    super('myDatabase')
    this.version(1).stores({
      wikis: '++id, title, content',
    })
  }
}

export const db = new MySubClassedDexie()
