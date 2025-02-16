import type { Category } from './category'

export type Post = {
    id: string
    title: string
    content: string
    date: string
    author: string
    contentImage: string
    authorImage: string
    category: Category
    tags: string[]
}
