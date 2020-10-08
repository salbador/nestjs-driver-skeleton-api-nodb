import {LogLevel} from '@nestjs/common';

require('dotenv').config();

export const configuration = () => ({
  api: {
    host: process.env.API_HOST || 'http://localhost',
    port: process.env.API_PORT || 3000,
    prefix: process.env.API_PREFIX || 'api/v2',
    environment: process.env.NODE_ENV || 'development',
    logger: {
      enabled: (process.env.API_LOGGER_ENABLED || 'true') === 'true',
      levels: (process.env.API_LOGGER_LEVELS || 'log,error,warn,debug,verbose').split(',') as LogLevel[]
    }
  },
  swagger: {
    title: process.env.SWAGGER_TITLE || 'title',
    description: process.env.SWAGGER_DESCRIPTION || 'description',
    version: process.env.SWAGGER_VERSION || '2.0.0',
    termsOfService: process.env.SWAGGER_TERMS_OF_SERVICE || 'terms_of_service',
    contact: {
      name: process.env.SWAGGER_CONTACT_NAME || 'contact_name',
      email: process.env.SWAGGER_CONTACT_EMAIL || 'contact_email',
      url: process.env.SWAGGER_CONTACT_URL || 'contact_url'
    },
    license: {
      description: process.env.SWAGGER_LICENSE_DESCRIPTION || 'license_description',
      url: process.env.SWAGGER_LICENSE_URL || 'license_url'
    },
    externalDoc: {
      description: process.env.SWAGGER_EXTERNAL_DOC_DESCRIPTION || 'external_doc_description',
      url: process.env.SWAGGER_EXTERNAL_DOC_URL || 'external_doc_url'
    },
    options: {
      docExpansion: process.env.SWAGGER_OPTIONS_DOC_EXPANSION || 'list',
      filter: (process.env.SWAGGER_OPTIONS_FILTER || 'true') === 'true',
      showRequestDuration: (process.env.SWAGGER_OPTIONS_SHOW_REQUEST_DURATION || 'true') === 'true'
    }
  }
});
