import type { PageLoad } from "./$types"
import { BlogPost, formatDateString } from "./Blog"

async function getPosts(names: string[], baseUrl): Promise<BlogPost[]> {
    const postsPromises: Promise<BlogPost>[] = names.map(async (element: string): Promise<BlogPost> => {
        try {
            const rawResponse: Response = await fetch(`${baseUrl}/blog_data/${element}.json`)
            const result = await rawResponse.json()

            const post: BlogPost = {
                identifier: element,
                title: result.title,
                description: result.description,
                publish: result.publish,
                text: result.text
            }

            return post
        } catch (error) {}
    })

    const posts = await Promise.all(postsPromises)

    return posts
}

export const load: PageLoad = async ({ params, fetch, url }) => {
    let status: boolean = false
    let message: string = ""
    let posts: BlogPost[] = []

    try {
        const rawResponse: Response = await fetch("/blog_data/REGISTER.json")
        const result: string[] = await rawResponse.json()

        status = true
        message = ""
        posts = await getPosts(result, url.origin)        
    } catch (error) {
        status = false
        message = "Error: blog post not found."
        posts = []
    }

    for (let i = 0; i < (posts.length - 1); i++) {
        for (let j = 0; j < (posts.length - 1); j++) {
            const post1: BlogPost = posts[j]
            const post2: BlogPost = posts[j + 1]

            const post1Date = new Date(post1.publish)
            const post2Date = new Date(post2.publish)

            if (post2Date > post1Date) {
                posts[j] = post2
                posts[j + 1] = post1
            }
        }
    }

    posts.forEach((element: BlogPost) => {
        element.publish = formatDateString(element.publish)
    })

    return {
        status: status,
        message: message,
        posts: posts
    }
}
