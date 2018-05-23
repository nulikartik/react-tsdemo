export const HOST = "http://wishcard20180515112441.azurewebsites.net/";

export const GET_ASSETS_BY_TAGS = "api/assets/tag/";
export const GET_SMSGS_BY_TAGS = "api/Wishes/tag/";
export const GET_TEMPLATES = "api/template"; 
export const GET_TEMPLATE_BY_ID = "api/template/";
export const GET_TEMPLATES_BY_WISHID = "api/template/wish/";
export const GET_WISHES = "api/Wishes";

export function GETC_TEMPLATE_BY_ID(id:number) 
        { return id > 0? ( GET_TEMPLATE_BY_ID + id ) : "INVALID_ID"  };

export function GETC_TEMPLATES_BY_WISHID(id:number) 
        { return id > 0? ( GET_TEMPLATES_BY_WISHID + id ) : "INVALID_ID"  };

export function GETC_ASSETS_BY_TAGS(ids:number[]) {
        return GET_ASSETS_BY_TAGS + ids.join("|");
}

export function GETC_SMSGS_BY_TAGS(ids:number[]) {
    return GET_SMSGS_BY_TAGS + ids.join("|");
}

