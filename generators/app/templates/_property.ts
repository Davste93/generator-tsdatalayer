
@indexKey
id: string;

//TODO: @optional, @readonly, @otherValidationAnnotations (ask wallace).
name: string="defaultName";
surname: string;

//TODO: @complex. Also need to see about recursive serialization
addresses: List<AddressModel>;
