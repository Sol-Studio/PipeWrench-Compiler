import { JSONSchemaType } from 'ajv';

export interface ModInfo {
  name: string;
  poster: string;
  id: string;
  description: string;
  url: string;
}

export interface PipeWrenchConfig {
  modInfo: ModInfo;
  copyFiles: Array<string>;
}
export const PipeWrenchConfigSchema: JSONSchemaType<PipeWrenchConfig> = {
  type: 'object',
  properties: {
    modInfo: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        poster: { type: 'string' },
        id: { type: 'string' },
        description: { type: 'string' },
        url: { type: 'string' }
      },
      required: ['name', 'poster', 'id', 'description', 'url']
    },
    copyFiles: { type: 'array', items: { type: 'string' } }
  },
  required: ['modInfo'],
  additionalProperties: false
};
