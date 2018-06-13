import { Enum, EnumValue } from 'ts-enums';

export class Item {
    usage: UsageEnum;
    type: TypeEnum;
    subtype: SubTypeEnum;
    value: ItemEnumType;

    constructor(usage: UsageEnum, type: TypeEnum, subtype: SubTypeEnum, value: ItemEnumType) {
        this.usage = usage;
        this.type = type;
        this.subtype = subtype;
        this.value = value;
    }
}

export class UsageEnum extends EnumValue {
    constructor(name: string) {
        super(name);
    }
}
export class TypeEnum extends EnumValue {
    constructor(name: string) {
        super(name);
    }
}
export class SubTypeEnum extends EnumValue {
    constructor(name: string) {
        super(name);
    }
}
export class ItemEnumType extends EnumValue {
    constructor(name: string) {
        super(name);
    }
}

class Usage extends Enum<UsageEnum>{
    RESIDENCIAL: UsageEnum = new UsageEnum("RESIDENCIAL");
    INDUSTRIAL_COMERCIAL: UsageEnum = new UsageEnum("COMERCIAL");

    constructor() {
        super();
        this.initEnum('Usage');
    }
}

class Type extends Enum<TypeEnum> {
    ESTRUCTURA: TypeEnum = new TypeEnum("ESTRUCTURA");
    constructor() {
        super();
        this.initEnum('Type');
    }
}

class SubType  extends Enum<SubTypeEnum> {
    ARMAZON: SubTypeEnum = new SubTypeEnum("ARMAZÓN");
    MUROS: SubTypeEnum = new SubTypeEnum("MUROS");
    CUBIERTA: SubTypeEnum = new SubTypeEnum("CUBIERTA");
    CONSERVACION: SubTypeEnum = new SubTypeEnum("CONSERVACION");
    constructor() {
        super();
        this.initEnum('SubType');
    }
}

class ItemValue extends Enum<ItemEnumType>  {
    MADERA: ItemEnumType = new ItemEnumType("Madera");
    PREFABRICADO: ItemEnumType = new ItemEnumType("Prefabricado");
    LADRILLO_BLOQUE: ItemEnumType = new ItemEnumType("Ladrillo, bloque");
    CONCRETO_HASTA_TRES_PISOS: ItemEnumType = new ItemEnumType("Concreto hasta tres pisos");
    CONCRETO_CUATRO_MAS_PISOS: ItemEnumType = new ItemEnumType("Concreto cuatro o más pisos");

    MATERIALES_DESECHO_ESTERILLA: ItemEnumType = new ItemEnumType("Materiales de desecho, esterilla");
    BAHAREQUE_ADOBE_TAPIA: ItemEnumType = new ItemEnumType("Bahareque, adobe, tapia");
    CONCRETO_PREFABRICADO: ItemEnumType = new ItemEnumType("Concreto prefabricado");
    BLOQUE_LADRILLO: ItemEnumType = new ItemEnumType("Bloque, ladrillo");

    MATERIALES_DESECHO_TEJAS_ASFALTICAS: ItemEnumType = new ItemEnumType("Materiales de desecho, tejas asfálticas");
    ZINC_TEJA_BARRO_ETERNIT_RUSTICO: ItemEnumType = new ItemEnumType("Zinc, teja de barro o eternit rústico");
    ENTREPISO_PREFABRICADO: ItemEnumType = new ItemEnumType("Entrepiso (cubierta provisional) prefabricado");
    ETERNIT_TEJA_BARRO: ItemEnumType = new ItemEnumType("Eternit o teja de barro (cubierta sencilla)");
    AZOTEA_ALUMINIO_PLACA_SENCILLA_ETERNIT_TEJA_BARRO: ItemEnumType = new ItemEnumType("Azotea, aluminio, placa sencilla con eternit o teja de barro");
    PLACA_IMPERMEABILIZADA_CUBIERTA_LUJOSA_ORNAMENTAL: ItemEnumType = new ItemEnumType("Placa impermeabilizada, cubierta lujosa u ornamental");

    MALO: ItemEnumType = new ItemEnumType("Malo");
    REGULAR: ItemEnumType = new ItemEnumType("Regular");
    BUENO: ItemEnumType = new ItemEnumType("Bueno");
    EXCELENTE: ItemEnumType = new ItemEnumType("Excelente");

    constructor() {
        super();
        this.initEnum('ItemValue');
    }
}

export const Usages: Usage = new Usage();
export const Types: Type = new Type();
export const SubTypes: SubType = new SubType();
export const ItemValues: ItemValue = new ItemValue();