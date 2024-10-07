import { createBucketClient } from '@cosmicjs/sdk'

const BUCKET_SLUG = import.meta.env.PUBLIC_COSMIC_BUCKET_SLUG
const READ_KEY = import.meta.env.PUBLIC_COSMIC_READ_KEY

const cosmic = createBucketClient({
  bucketSlug: BUCKET_SLUG,
  readKey: READ_KEY
})

export async function getAllCategories() {
  const data3 = await cosmic.objects
    .find({
      type: 'categories'
    })
    .props('title,slug,thumbnail,metadata')
    .depth(2)
    .sort('title')
  return data3.objects
}

export async function getAllSubCategories() {
  const data4 = await cosmic.objects
.find({"type": "subcategories"})
.props("slug,title,metadata")
.depth(3)
.sort("title")
  return data4.objects
}

export async function getAllProducts() {
  const data5 = await cosmic.objects
    .find({
      type: 'products'
    })
    .props('title,slug,metadata')
    .depth(2)
  return data5.objects
}

export async function getAllPosts() {
  const data = await cosmic.objects
    .find({
      type: 'posts'
    })
    .props('title,slug,metadata,created_at,excerpt')
    .sort('-created_at')
    .depth(2)
  return data.objects
}

export async function getFeaturedPost() {
  const data = await cosmic.objects
    .findOne({
      type: 'featured-post',
      slug: 'set-featured-post'
    })
    .props('metadata')
    .depth(2)
  return data.object.metadata.post
}

export async function getAllPages() {
  const data2 = await cosmic.objects
    .find({
      type: 'pages'
    })
    .props('title,slug,metadata,created_at')
  return data2.objects
}

export async function getNavLinks() {
  const data2 = await cosmic.objects
    .find({
      type: 'pages',"$and": [
        {
            "metadata.mainnav": true
        }
    ]
    })
    .props('title,slug,metadata')
  return data2.objects
}

export async function getFeaturedPage() {
  const data = await cosmic.objects
    .findOne({
      type: 'page',
      slug: 'set-featured-post'
    })
    .props('metadata')
    .depth(2)
  return data.object.metadata.post
}

export async function getAllArticles() {
  const data2 = await cosmic.objects
    .find({
      type: 'articles'
    })
    .props('title,slug,metadata')
    .depth(1)
  return data2.objects
}

export async function getFeaturedArticle() {
  const data = await cosmic.objects
    .findOne({
      type: 'article',
      slug: 'set-featured-article'
    })
    .props('title,slug,metadata')
    .depth(2)
  return data.object.metadata.article
}

export async function getConfig() {
  const data = await cosmic.objects
    .findOne({ type: 'config', slug: 'config' })
    .props('metadata')
    .depth(1)
  return data.object
}