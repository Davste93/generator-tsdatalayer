import {Model, indexKey, List} from  "tsmvc";

<% allModels.forEach(function(currentModel){ -%>
import <%= currentModel.entityName %> from "./<%= currentModel.entityName %>";
<% }) -%>

export class <%= model.entityName %> extends Model {
<% model.properties.forEach(function(property){ -%>
    <%= property.name -%> : <%- property.entityType!='entityList'? property.type : 'List<'+property.type+'>' -%>;
<% }) -%>
}
