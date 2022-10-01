class CookieHelper{

    private static cookieHelper:CookieHelper = null as unknown as CookieHelper;

    public static getCookieHelper(){
        if(this.cookieHelper === null){
            this.cookieHelper = new CookieHelper();
        }

        return this.cookieHelper;
    }

    private getCookiesArray(){
        return document.cookie.split(";");
    }

    public getCookieValueByName(fName:string):string{
        const cookies = this.getCookiesArray();
        const cookie = cookies.filter(c=>c.trim().slice(0, fName.length) === fName)[0];
        return cookie ? cookie.split("=")[1] : ""; 
    }

    public setCookie(fName:string, fValue:string):void{
        document.cookie = `${fName}=${fValue}`;
    }

    public removeCookieByName(fName:string):void{
        const pastTime = (new Date(0)).toUTCString();
        document.cookie = `${fName}=s;expires=${pastTime}`;
    }

    public setCookiesFromObject(object:Object){
        Object.entries(object).forEach((entry)=>{
            this.setCookie(entry[0], entry[1]);
        })
    }
}

export default CookieHelper;