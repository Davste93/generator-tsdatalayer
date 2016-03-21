import {Model, indexKey, List} from  "tsmvc";

<% allModels.forEach(function(currentModel){ -%>
import <%= currentModel.name %> from "./<%= currentModel.name %>";
<% }) -%>

export class <%= model.name %> extends Model {
<% model.properties.forEach(function(property){ -%>
    <%= property.name -%> : <%- property.type -%>;
<% }) -%>
}
