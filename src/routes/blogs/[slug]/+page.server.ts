import type { PageLoad } from "./$types"
import { BlogPost, formatDateString } from "../Blog"

export const load: PageLoad = async ({ params, fetch }) => {
    let status: boolean = false
    let message: string = ""
    const blogPost: BlogPost = {
        identifier: "",
        title: "",
        description: "",
        publish: "",
        text: ""
    }

    try {
        const rawResponse: Response = await fetch(`/blog_data/${params.slug}.json`)
        const result: any[] = await rawResponse.json()

        status = true
        message = ""

        blogPost.identifier = params.slug
        blogPost.title = result.title
        blogPost.description = ""
        blogPost.publish = formatDateString(result.publish)
        blogPost.text = result.text
    } catch (error) {
        status = true
        message = "Error: blog post not found."

        blogPost.identifier = ""
        blogPost.title = ""
        blogPost.description = ""
        blogPost.publish = ""
        blogPost.text = ""
    }

    return {
        status: status,
        message: message,
        post: blogPost
    }
}
