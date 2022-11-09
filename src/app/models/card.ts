export class Data {
    icon: string = '°'
    title: string = ' whatsapp'
    description: string = 'Contact per this app'
    button: string = 'Contact'
}

export class Post extends Data {
    id: string = ''
    likes?: number = 0
}