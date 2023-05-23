

export class ContainerPropertyDescriptor {
   

    private id:any;
    private outerId:any

    private marginTop: any|undefined="0";
    private marginRight:any|undefined="0";
    private marginBottom: any|undefined="0";
    private marginLeft:any|undefined="0";
   
   private paddingTop:any|undefined="0";
   private paddingLeft:any;
   private paddingBottom:any;
   private paddingRight:any;

    private width:any;
    private heigth: any;
    private minWidth: any;
    private minHeight: any;
    private maxHeight:any;
    private maxWidth:any;

    private innerText:any
    private fontType: any;
    private fontSize: any;
    private fontColor: any;
    private fontWeight:any;
    private align: any;
    private style: any;

    private backgroundColor: any

    private border:any;
    private borderRadius:any;
    private borderWidth:any;
    private borderColor:any;

    public getFontWeight(): any {
        return this.fontWeight;
    }

    public setFontWeight(fontWeight: any): void {
        this.fontWeight = fontWeight;
    }

    public getBorderWidth(): any {
        return this.borderWidth;
    }

    public setBorderWidth(borderWidth: any): void {
        this.borderWidth = borderWidth;
    }

    public getBorderColor(): any {
        return this.borderColor;
    }

    public setBorderColor(borderColor: any): void {
        this.borderWidth = borderColor;
    }


    public getOuterId(): any {
        return this.outerId;
    }

    public setOuterId(outerId: any): void {
        this.outerId = outerId;
    }

    public getId(): any {
        return this.id;
    }

    public setId(id: any): void {
        this.id = id;
    }


    public getMarginTop(): any {

        if(this.marginTop=="") {
            return 0 ;
            }
        
        return  this.marginTop ;
    }

    public setMarginTop(marginTop: any): void {
        this.marginTop = marginTop;
    }

    public getMarginRight(): any {

        if(this.marginRight==""){
            return 0;
        }
        return this.marginRight;
    }

    public setMarginRight(marginRight: any): void {
        this.marginRight = marginRight;
    }

    public getMarginBottom(): any {

        if(this.marginBottom==""){
            return 0;
        }
        return this.marginBottom;
    }

    public setMarginBottom(marginBottom: any): void {
        this.marginBottom = marginBottom;
    }

    public getMarginLeft(): any {

        if(this.marginLeft=="") {
            return 0 ;
        }

        return this.marginLeft;
    }

    public setMarginLeft(marginLeft: any): void {
        this.marginLeft = marginLeft;
    }

   

    public getPaddingTop(): any {
        if(this.paddingTop=""){
            return 0;
        }
        
        return this.paddingTop;
    }

    public setPaddingTop(paddingTop: any): void {
        this.paddingTop = paddingTop;
    }

    public getPaddingLeft(): any {
        return this.paddingLeft;
    }

    public setPaddingLeft(paddingLeft: any): void {
        this.paddingLeft = paddingLeft;
    }

    public getPaddingBottom(): any {
        return this.paddingBottom;
    }

    public setPaddingBottom(paddingBottom: any): void {
        this.paddingBottom = paddingBottom;
    }

    public getPaddingRight(): any {
        return this.paddingRight;
    }

    public setPaddingRight(paddingRight: any): void {
        this.paddingRight = paddingRight;
    }

    public getWidth(): any {
        return this.width;
    }

    public setWidth(width: any): void {
        this.width = width;
    }

    public getHeigth(): any {
        return this.heigth;
    }

    public setHeigth(heigth: any): void {
        this.heigth = heigth;
    }

    public getMinWidth(): any {
        return this.minWidth;
    }

    public setMinWidth(minWidth: any): void {
        this.minWidth = minWidth;
    }

    public getMinHeight(): any {
        return this.minHeight;
    }

    public setMinHeight(minHeight: any): void {
        this.minHeight = minHeight;
    }

    public getMaxHeight(): any {
        return this.maxHeight;
    }

    public setMaxHeight(maxHeight: any): void {
        this.maxHeight = maxHeight;
    }

    public getMaxWidth(): any {
        return this.maxWidth;
    }

    public setMaxWidth(maxWidth: any): void {
        this.maxWidth = maxWidth;
    }

    public getInnerText(): any {
        return this.innerText;
    }

    public setInnerText(innerText: any): void {
        this.innerText = innerText;
    }


    public getFontType(): any {
        return this.fontType;
    }

    public setFontType(fontType: any): void {
        this.fontType = fontType;
    }

    public getFontSize(): any {
        return this.fontSize;
    }

    public setFontSize(fontSize: any): void {
        this.fontSize = fontSize;
    }

    public getFontColor(): any {
        return this.fontColor;
    }

    public setFontColor(fontColor: any): void {
        this.fontColor = fontColor;
    }

    public getAlign(): any {
        return this.align;
    }

    public setAlign(align: any): void {
        this.align = align;
    }

    public getStyle(): any {
        return this.style;
    }

    public setStyle(style: any): void {
        this.style = style;
    }

    public getBackgroundColor(): any {
        return this.backgroundColor;
    }

    public setBackgroundColor(backgroundColor: any): void {
        this.backgroundColor = backgroundColor;
    }

    public getBorderRadius(): any {
        return this.borderRadius;
    }

    public setBorderRadius(borderRadius: any): void {
        this.borderRadius = borderRadius;
    }



    public getBorder(): any {
        return this.border;
    }

    public setBorder(border: any): void {
        this.border = border;
    }


}