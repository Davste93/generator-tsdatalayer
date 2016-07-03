import {Model, indexKey, List} from  'tsmvc';
import {JsonObject, JsonMember} from 'typedjson';

<%- strImports %>

@JsonObject
export class <%= model.name %>  extends Model {
<% model.properties.forEach(function(property){ -%>
    @JsonMember
    <%=property.name-%>: <%-property.type.isResource? 'string' : property.type.name-%>;
<% }) -%>
}
