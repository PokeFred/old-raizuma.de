export interface BlogPost {
    identifier: string,
    title: string,
    description: string,
    publish: string,
    text: string
}

export function formatDateString(date: string): string {
    const dateParts: string[] = date.split("-")
    return `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`
}
