
export enum Usage {
    RESIDENCIAL="RESIDENCIAL",
    INDUSTRIAL_COMERCIAL = "COMERCIAL"
}

export enum Type {
    ESTRUCTURA= "ESTRUCTURA",
    ACABADOS= "ACABADOS"
}

export enum SubType {
    ARMAZON = "ARMAZÓN",
    MUROS = "MUROS",
    CUBIERTA = "CUBIERTA",
    CONSERVACION = "CONSERVACION",

    FACHADAS = "FACHADAS"
}

export enum Option {
    MADERA = "Madera",
    PREFABRICADO = "Prefabricado",
    LADRILLO_BLOQUE = "Ladrillo, bloque",
    CONCRETO_HASTA_TRES_PISOS = "Concreto hasta tres pisos",
    CONCRETO_CUATRO_MAS_PISOS = "Concreto cuatro o más pisos",

    MATERIALES_DESECHO_ESTERILLA = "Materiales de desecho, esterilla",
    BAHAREQUE_ADOBE_TAPIA = "Bahareque, adobe, tapia",
    CONCRETO_PREFABRICADO = "Concreto prefabricado",
    BLOQUE_LADRILLO = "Bloque, ladrillo",

    MATERIALES_DESECHO_TEJAS_ASFALTICAS = "Materiales de desecho, tejas asfálticas",
    ZINC_TEJA_BARRO_ETERNIT_RUSTICO = "Zinc, teja de barro o eternit rústico",
    ENTREPISO_PREFABRICADO = "Entrepiso (cubierta provisional) prefabricado",
    ETERNIT_TEJA_BARRO = "Eternit o teja de barro (cubierta sencilla)",
    AZOTEA_ALUMINIO_PLACA_SENCILLA_ETERNIT_TEJA_BARRO = "Azotea, aluminio, placa sencilla con eternit o teja de barro",
    PLACA_IMPERMEABILIZADA_CUBIERTA_LUJOSA_ORNAMENTAL = "Placa impermeabilizada, cubierta lujosa u ornamental",

    MALO = "Malo",
    REGULAR = "Regular",
    BUENO = "Bueno",
    EXCELENTE = "Excelente",    

    POBRE = "Pobre",
    SENCILLA = "Sencilla",
    BUENA  ="Buena",
    LUJOSA = "Lujosa"
}

export class OptionItem {
    usage: Usage;
    type: Type;
    subtype: SubType;
    option: Option;
    value: number;

    constructor(usage: Usage, type: Type, subtype: SubType, option: Option) {
        this.usage = usage;
        this.type = type;
        this.subtype = subtype;
        this.option = option;
    }
}

