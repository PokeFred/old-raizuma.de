import type { PageLoad } from "./$types"

interface Project {
    identifier: string,
    title: string,
    text: string
}

export const load: PageLoad = async ({ params, fetch }) => {
    let status: boolean = false
    let message: string = ""
    const project: Project = {
        identifier: "",
        title: "",
        text: ""
    }

    try {
        const rawResponse: Response = await fetch(`/projects_data/${params.slug}.json`)
        const result: any[] = await rawResponse.json()
        
        status = true
        message = ""

        project.identifier = params.slug
        project.title = result.title
        project.text = result.text
    } catch (error) {
        status = true
        message = "Error: project post not found."
        
        project.identifier = ""
        project.title = ""
        project.text = ""
    }

    return {
        status: status,
        message: message,
        project: project
    }
}
