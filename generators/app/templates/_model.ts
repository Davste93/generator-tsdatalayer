import {Model, indexKey, List} from  "tsmvc";

<%- strImports %>
export class <%= model.name %>  extends Model {
<% model.properties.forEach(function(property){ -%>
    private _<%=property.name-%> : <%-property.type-%>;
    get <%=property.name-%>():<%-property.type-%> {
        return this._<%=property.name-%>;
    }
    set <%=property.name-%>(value : <%-property.type-%>) {
        this._<%=property.name-%> = value;
    }
    
<% }) -%>
}
