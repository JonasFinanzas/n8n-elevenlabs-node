import {
  INodeType,
  INodeTypeDescription,
  IExecuteSingleFunctions,
} from 'n8n-workflow';

export class ElevenLabs implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'ElevenLabs',
    name: 'elevenLabs',
    group: ['transform'],
    version: 1,
    description: 'Convierte texto a voz usando ElevenLabs',
    defaults: {
      name: 'ElevenLabs',
    },
    inputs: ['main'],
    outputs: ['main'],
    properties: [
      {
        displayName: 'Texto',
        name: 'texto',
        type: 'string',
        default: '',
        placeholder: 'Hola mundo',
        required: true,
        description: 'Texto que quieres convertir a voz',
      },
    ],
  };

  async execute(this: IExecuteSingleFunctions): Promise<any> {
    const texto = this.getNodeParameter('texto', 0) as string;

    return [
      {
        json: {
          audio_url: `https://api.elevenlabs.io/fake-voice?text=${encodeURIComponent(texto)}`,
          textoOriginal: texto
        },
      },
    ];
  }
}
