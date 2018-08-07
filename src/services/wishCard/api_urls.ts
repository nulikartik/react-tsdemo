export const HOST = "http://wishcard20180515112441.azurewebsites.net/";
export const GET_ASSETS_BY_TAGS = HOST + "api/assets/tag/";
export const GET_SMSGS_BY_TAGS = HOST + "api/Wishes/tag/";
export const GET_TEMPLATES = HOST + "api/template"; 
export const GET_TEMPLATE_BY_ID = HOST + "api/template/";
export const GET_TEMPLATES_BY_WISHID = HOST + "api/template/wish/";
export const GET_WISHES = HOST + "api/Wishes";
export const GET_WISH_BY_ID = HOST + "api/wish/";

export function GETC_TEMPLATE_BY_ID(id:number) 
        { return id > 0? ( GET_TEMPLATE_BY_ID + id ) : "INVALID_ID"  };

export function GETC_TEMPLATES_BY_WISHID(wishId:number) 
        { return wishId > 0? ( GET_TEMPLATES_BY_WISHID + wishId ) : "INVALID_ID"  };

export function GETC_ASSETS_BY_TAGS(ids:number[]) {
        return GET_ASSETS_BY_TAGS + ids.join("|");
}

export function GETC_SMSGS_BY_TAGS(ids:number[]) {
    return GET_SMSGS_BY_TAGS + ids.join("|");
}

export function GETC_WISH_BY_ID(id: number) {
        return id > 0 ? ( GET_WISH_BY_ID + id ) : "INVALID_ID";
}