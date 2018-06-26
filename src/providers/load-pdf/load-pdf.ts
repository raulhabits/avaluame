import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener';
import { File, DirectoryEntry } from '@ionic-native/file';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Platform } from 'ionic-angular';
import { DocumentViewerOptions, DocumentViewer } from '@ionic-native/document-viewer';
import { Avaluo } from '../../models/avaluo';


/*
  Generated class for the LoadPdfProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadPdfProvider {

  avaluo: Avaluo;

  constructor(private plt: Platform, private file: File, private fileOpener: FileOpener, private document: DocumentViewer) {
    console.log('Hello LoadPdfProvider Provider');
  }

  loadPdfViewer(value: string) {
    const options: DocumentViewerOptions = {
      title: 'Avaluo',
      email: { enabled: true },
      openWith: { enabled: true }
    }
    this.document.viewDocument(value, 'application/pdf', options);
    alert("Termino");
  }

  getDocumentDefinition() {
    let imageSize = 350;
    let currentDate = new Date();
    let documentDefinition = { content: [] , styles: {}};

    documentDefinition.styles = {
      header: {
        fontSize: 10,
        bold: true,
        alignment: 'right'
      },
      headerTitle: {
        fontSize: 24,
        bold: true,
        alignment: 'center'
      },
      sectionTitle: {
        fontSize: 16,
        bold: true,
        alignment: 'left'
      },
      subSectionTitle: {
        fontSize: 14,
        bold: true,
        alignment: 'left'
      },
      content: {        
        fontSize: 10,
        bold: false,
        alignment: 'left'
      },
      imageStyle: {
        alignment: 'center'
      }
      
    };


    documentDefinition.content.push({ text: 'INFORME VISITA TÉCNICA PUNTUAL', style: ['headerTitle'] });
    documentDefinition.content.push({ text: 'OBSERVACIONES INICIALES' , style: ['sectionTitle'] });
    documentDefinition.content.push({ text: this.avaluo.basicData.initialComments ? this.avaluo.basicData.initialComments : 'No registra.' });
    documentDefinition.content.push({ text: 'DATOS BÁSICOS DE SOLICITUD' , style: ['sectionTitle']});
    documentDefinition.content.push({ text: 'Solicitud N°:' , style: ['subSectionTitle'] });
    documentDefinition.content.push({ text: this.avaluo.basicData.requestNumber ? this.avaluo.basicData.requestNumber : 'No registra.' });
    documentDefinition.content.push({ text: 'Código sector:'  , style: ['subSectionTitle']});
    documentDefinition.content.push({ text: this.avaluo.basicData.sectorCode ? this.avaluo.basicData.sectorCode : 'No registra.' });
    documentDefinition.content.push({ text: 'Nómenclatura principal:'  , style: ['subSectionTitle']});
    documentDefinition.content.push({ text: this.avaluo.basicData.mainAddress ? this.avaluo.basicData.mainAddress : 'No registra.' });
    documentDefinition.content.push({ text: 'Nómenclatura secundaria:'  , style: ['subSectionTitle']});
    documentDefinition.content.push({ text: this.avaluo.basicData.secondaryAddress ? this.avaluo.basicData.secondaryAddress : 'No registra.' });
    documentDefinition.content.push({ text: 'INFORMACIÓN FÍSICA DEL INMUEBLE' , style: ['sectionTitle']});
    documentDefinition.content.push({ text: 'Área del terreno:'  , style: ['subSectionTitle']});
    documentDefinition.content.push({ text: this.avaluo.physicalData.landArea ? this.avaluo.physicalData.landArea : 'No registra.' });
    documentDefinition.content.push({ text: 'Área construida:'  , style: ['subSectionTitle']});
    documentDefinition.content.push({ text: this.avaluo.physicalData.builtArea ? this.avaluo.physicalData.builtArea : 'No registra.' });
    documentDefinition.content.push({ text: 'Destino económico:'  , style: ['subSectionTitle']});
    documentDefinition.content.push({ text: this.avaluo.physicalData.usage ? this.avaluo.physicalData.usage : 'No registra.' });
    documentDefinition.content.push({ text: 'Observaciones sobre ZHFG:'  , style: ['subSectionTitle']});
    documentDefinition.content.push({ text: this.avaluo.physicalData.ZHFGObservations ? this.avaluo.physicalData.ZHFGObservations : 'No registra.' });
    documentDefinition.content.push({ text: 'INFORMACIÓN ADICIONAL ÁREA CONSTRUIDA' , style: ['sectionTitle']});




    let areas = [];

    this.avaluo.additionalBuiltAreaData.forEach(area => {
      let areaDocument = [];
      areaDocument.push({ text: 'Tipo:'  , style: ['subSectionTitle']});
      areaDocument.push({ text: area.type ? area.type : 'No registra.' });
      areaDocument.push({ text: 'Unidad:'  , style: ['subSectionTitle']});
      areaDocument.push({ text: area.unit ? area.unit : 'No registra.' });
      areaDocument.push({ text: 'Uso:'  , style: ['subSectionTitle']});
      areaDocument.push({ text: area.usage ? area.usage : 'No registra.' });
      areaDocument.push({ text: 'Vetustez:'  , style: ['subSectionTitle']});
      areaDocument.push({ text: area.vetustez ? area.vetustez : 'No registra.' });
      let sum = 0;

      let areaRates = [];


      area.rates.forEach(rate => {
        areaRates.push({ text: 'Calificacion de ' + rate.usage.toLowerCase() + ' - ' + rate.type.toLowerCase() + ' - ' + rate.subtype.toLowerCase() + ':' + rate.option.toLowerCase() });
      });

      areaDocument.push({ul:areaRates});

      if (area.images.size != 0) {
        areaDocument.push({ text: 'Imágenes recolectadas'  , style: ['subSectionTitle']});
        let imageExist = false;
        area.getImageKeys().forEach(image => {
          if(area.getImage(image)) {
            imageExist = true;
            console.log(area.getImage(image));
          areaDocument.push({ width: imageSize, image: area.getImage(image) });
          }
        });
        if(!imageExist) {
          areaDocument.push({text: 'No tiene imagenes registradas.'});
        }
      }
      areas.push(areaDocument);
    });

    if(areas.length !== 0) {
      documentDefinition.content.push({ ul: areas });
    } else {
      documentDefinition.content.push({ text: 'No registra.' });
    }

    let owners = [];
    documentDefinition.content.push({ text: 'INFORMACION DE ASPECTO JURIDICO' , style: ['sectionTitle']});

    this.avaluo.owners.forEach(owner => {
      documentDefinition.content.push({ text: 'Tipo de identificación:' , style: ['subSectionTitle'] });
      documentDefinition.content.push({ text: owner.idType ? owner.idType : 'No registra.' });
      documentDefinition.content.push({ text: 'Numero identificación:'  , style: ['subSectionTitle']});
      documentDefinition.content.push({ text: owner.id ? owner.id : 'No registra.'});
      documentDefinition.content.push({ text: 'Nombres:'  , style: ['subSectionTitle']});
      documentDefinition.content.push({ text: owner.firstName ? owner.firstName : 'No registra.' });
      documentDefinition.content.push({ text: 'Apellidos:'  , style: ['subSectionTitle']});
      documentDefinition.content.push({ text: owner.lastName ? owner.lastName : 'No registra.'});
    });

    if(owners.length !== 0) {
      documentDefinition.content.push({ul: owners});
    } else {
      documentDefinition.content.push({ text: 'No registra.' });
    }
    


    documentDefinition.content.push({ text: 'CROQUIS' , style: ['sectionTitle']});
    documentDefinition.content.push({text: 'Coordenadas:' , style: ['subSectionTitle']});
    documentDefinition.content.push({text: 'Latitud: ' + (this.avaluo.geoLocationData.latitude ? this.avaluo.geoLocationData.latitude : 'No registra.') + " Longitud: " + (this.avaluo.geoLocationData.longitude ? this.avaluo.geoLocationData.longitude : 'No registra.')});
    documentDefinition.content.push({text: 'Vista previa en el mapa:' , style: ['subSectionTitle']});
    if(this.avaluo.geoLocationData.image) {
      documentDefinition.content.push({width: imageSize, image: this.avaluo.geoLocationData.image});
    } else {
      documentDefinition.content.push({ text: 'No registra.' });
    }

    documentDefinition.content.push({text: this.avaluo.madeBy ? this.avaluo.madeBy : 'No registra.', style: ['headerTitle']});
  

    return documentDefinition;
  }


  createPdfV2(avaluo: Avaluo) {
    this.avaluo = avaluo;
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    var dd = this.getDocumentDefinition();
    console.log(dd);
    const pdfDocGenerator = pdfMake.createPdf(dd);


    if (this.plt.is('cordova')) {
      pdfDocGenerator.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });

        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'AvaluoV2.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'AvaluoV2.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      pdfDocGenerator.download();
    }

  }

}
