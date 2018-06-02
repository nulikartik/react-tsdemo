interface ITemplate {
    "id": number,
    "name": string,
    "description" : string,
    "slug": string,
    "wishId": number,
    "templateCode": string,
    "isActive": boolean,
    "fields": IField[]
}

interface ITemplateState{
    templateList: ITemplate[],
    selectedTemplate: ITemplate
}

interface IField{
    "id": number,
    "fId": number,
    "type" : string,
    "label": string,
    "placeholder": string,
    "value": string,
    "tagList": ITag[]
}

interface ITag{
    "id": number,
    "name": string,
    "slug" : string
}