import {Model, indexKey, List} from  "tsmvc";

<%- strImports %>
export class <%= model.name %> extends Model {
<% model.properties.forEach(function(property){ -%>
    <%= property.name -%> : <%- property.type -%>;
<% }) -%>
}
