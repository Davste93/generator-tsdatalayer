import {Model, indexKey, List, Url} from  'tsmvc';
import {JsonObject, JsonMember} from 'typedjson';

<%- strImports %>

@JsonObject
export class <%= model.name %>  extends Model {
<% model.properties.forEach(function(property){ -%>
    @JsonMember
    <%=property.name-%>: <%-property.type.isResource? 'Url' : property.type.name-%>;
<% }) -%>
}
