
export enum Usage {
    RESIDENCIAL = "RESIDENCIAL",
    INDUSTRIAL_COMERCIAL = "COMERCIAL"
}

export enum Type {
    ESTRUCTURA = "ESTRUCTURA",
    ACABADOS_PRINCIPALES = "ACABADOS PRINCIPALES",
    BANYO = "BAÑO",
    COCINA = "COCINA",
    COMPLEMENTO_INDUSTRIA = "COMPLEMENTO INDUSTRIA"
}

export enum SubType {
    ARMAZON = "ARMAZÓN",
    MUROS = "MUROS",
    CUBIERTA = "CUBIERTA",
    CONSERVACION = "CONSERVACION",

    FACHADAS = "FACHADAS",
    CUBRIMIENTO_MUROS = "CUBRIMIENTO MUROS",
    PISOS = "PISOS",

    TAMANYO = "TAMAÑO",
    ENCHAPES = 'ENCHAPES',
    MOBILIARIO = 'MOBILIARIO',

    CERCHAS = "CERCHAS"

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
    BUENA = "Buena",
    LUJOSA = "Lujosa",

    SIN_CUBRIMIENTO = "Sin cubrimiento",
    PANYETE_LADRILLO_PRENSADO = "Pañete, ladrillo prensado",
    ESTUCO_CERAMICA_PAPEL_COLGADURA = "Estuco, cerámica, papel colgadura",
    MADERA_PIEDRA_ORNAMENTAL = "Madera, piedra ornamental",
    MARMOL_LUJOS_OTROS = "Marmol, lujos y otros",

    TIERRA_PISADA = "Tierra pisada",
    CEMENTO_MADERA_BURDA = "Cemento, madera burda",
    BALDOSA_COMUN_CEMENTO_TABLON_LADRILLO = "Baldosa común, cemento, tablón, ladrillo",
    LISTON_MACHIHEMBRIADO = "Listón machihembriado",
    TABLETA_CAUCHO_ACRILICO_GRANITO_BALDOSA_FINA = "Tableta, caucho, acrílico, granito, baldosa fina",
    PARQUET_ALFOMBRA_RETAL_DE_MARMOL_GRANO_PEQUENYO = "Parquet, alfombra, retal demármol ( grano pequeño )",
    RETAL_MARMOL_MARMOL_OTROS_LUJOS = "Retal mármol, mármol, otros lujos",

    SIN_BANYO = "Sin baño",
    BANYO_PEQUENYO = "Pequeño ( 0 - 4 m2 )",
    BANYO_MEDIANO = "Mediano ( 4 - 6 m2 )",
    BANYO_GRANDE = "Grande >  6 m2",

    PANYETE_BALDOSA_COMUN_CEMENTO = "Pañete, baldosa común, cemento",
    BALDOSIN_CRISTANAC_PAPEL = "Baldosín ( < 11 x 11 cm ) cristanac - papel",
    BALDOSIN_CERAMICA = "Baldosín ( > 11 x 11 cm ) cerámica",
    MARMOL_ENCHAPE_LUJOSO = "Mármol, enchape lujoso",

    SENCILLO = "Sencillo",
    LUJOSO = "Lujoso",


    SIN_COCINA = "Sin cocina",
    COCINA_PEQUENYA = "Cocina pequeña ( 0 - 5 m2 )",
    COCINA_MEDIANA = "Cocina mediana ( 5 - 10 m2 )",
    COCINA_GRANDE = "Cocina grande >  10 m2",

    METALICA_LIVIANA = "Metálica liviana (luz menor a 10 m)",
    METALICA_MEDIANA = "Metálica mediana (luz 10 - 20 m)",
    METALICA_PESADA = "Metálica pesada (luz mayor a 10 m)",
    ALTURA_MAYOR_7M_COLUMNA_PUENTE_GRUA = "Altura mayor a 7m en columna - puenta grúa"


}

export class OptionItem {
    usage: Usage;
    type: Type;
    subtype: SubType;
    option: Option;
    value: number;

    constructor(value: number, usage: Usage, type: Type, subtype: SubType, option: Option) {
        this.value = value;
        this.usage = usage;
        this.type = type;
        this.subtype = subtype;
        this.option = option;
    }
}

