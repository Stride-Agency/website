import type { Category } from './category'

export type Post = {
    title: string
    date: string
    author: string
    "content-image": string
    "author-image": string
    category: Category
    tags: string[]
}
